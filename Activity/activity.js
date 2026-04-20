const commentInput = document.getElementById('comment-input');
const postButton = document.getElementById('post-comment');
const commentsContainer = document.getElementById('comments-container');

let comments = [];

function formatTime(dateString) {
    return new Date(dateString).toLocaleString([], {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function escapeHtml(text) {
    return text
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');
}

function renderComments() {
    commentsContainer.innerHTML = '';

    comments.forEach((comment) => {
        const commentElement = document.createElement('article');
        commentElement.className = 'comment';
        commentElement.innerHTML = `
			<div class="comment-top">
				<span class="comment-author">Guest</span>
				<span class="comment-time">${formatTime(comment.createdAt)}</span>
			</div>
            ${comment.editOpen ? `
                <div class="edit-form">
                    <textarea rows="3">${escapeHtml(comment.text)}</textarea>
                    <div class="comment-actions">
                        <button type="button" data-action="save-edit" data-id="${comment.id}">Save</button>
                        <button type="button" data-action="cancel-edit" data-id="${comment.id}">Cancel</button>
                    </div>
                </div>
            ` : `<p class="comment-content">${escapeHtml(comment.text)}</p>`}
			<div class="comment-actions">
				<button type="button" data-action="like" data-id="${comment.id}" class="${comment.liked ? 'liked' : ''}">${comment.liked ? 'Liked' : 'Like'} (${comment.likes})</button>
				<button type="button" data-action="reply" data-id="${comment.id}">Reply</button>
				<button type="button" data-action="edit" data-id="${comment.id}">Edit</button>
				<button type="button" data-action="delete" data-id="${comment.id}" class="danger">Delete</button>
			</div>
			<div class="reply-area" id="reply-area-${comment.id}"></div>
			<div class="replies">
				${comment.replies.map((reply) => `
					<div class="reply-item">
						<strong>Reply</strong>
                        <p class="comment-content">${escapeHtml(reply)}</p>
					</div>
				`).join('')}
			</div>
		`;

        const replyArea = commentElement.querySelector(`#reply-area-${comment.id}`);
        if (comment.replyOpen) {
            replyArea.innerHTML = `
				<div class="reply-form">
					<textarea placeholder="Write a reply..." rows="3"></textarea>
					<button type="button">Post Reply</button>
				</div>
			`;

            const replyTextArea = replyArea.querySelector('textarea');
            const replyButton = replyArea.querySelector('button');

            replyButton.addEventListener('click', () => {
                const replyText = replyTextArea.value.trim();
                if (!replyText) {
                    return;
                }

                comment.replies.push(replyText);
                comment.replyOpen = false;
                renderComments();
            });
        }

        commentsContainer.appendChild(commentElement);
    });
}

function addComment() {
    const text = commentInput.value.trim();

    if (!text) {
        return;
    }

    comments.unshift({
        id: Date.now(),
        text,
        createdAt: new Date().toISOString(),
        likes: 0,
        liked: false,
        replies: [],
        replyOpen: false,
        editOpen: false
    });

    commentInput.value = '';
    renderComments();
}

postButton.addEventListener('click', addComment);

commentInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && event.ctrlKey) {
        addComment();
    }
});

commentsContainer.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-action]');

    if (!button) {
        return;
    }

    const commentId = Number(button.dataset.id);
    const comment = comments.find((item) => item.id === commentId);

    if (!comment) {
        return;
    }

    const { action } = button.dataset;

    if (action === 'like') {
        comment.liked = !comment.liked;
        comment.likes += comment.liked ? 1 : -1;
    }

    if (action === 'reply') {
        comments.forEach((item) => {
            item.replyOpen = item.id === commentId ? !item.replyOpen : false;
            item.editOpen = false;
        });
    }

    if (action === 'edit') {
        comments.forEach((item) => {
            item.editOpen = item.id === commentId ? !item.editOpen : false;
            item.replyOpen = false;
        });
    }

    if (action === 'save-edit') {
        const editArea = button.closest('.edit-form');
        const editText = editArea.querySelector('textarea').value.trim();

        if (editText) {
            comment.text = editText;
            comment.editOpen = false;
        }
    }

    if (action === 'cancel-edit') {
        comment.editOpen = false;
    }

    if (action === 'delete') {
        comments = comments.filter((item) => item.id !== commentId);
    }

    renderComments();
});

renderComments();
