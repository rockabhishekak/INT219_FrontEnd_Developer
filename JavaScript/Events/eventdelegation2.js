// Step 1: Select the parent element (product list)


let productlist1 = document.querySelector("#productlist");

// Step 2: Add event listener to the parent element
productlist1.addEventListener("click", (event) => {
    if(event.target.classList.contains("cartbtn")){
            console.log("cart button clicked");

            // event.target = the actual element that was clicked
            // i.e . 
    }
})

// step 3: Dynamically add a new product to the list
let newProduct = document.createElement("div");
newProduct.className = "product";
newProduct.innerHTML = `<button class="cartbtn">Add to Cart 3</button>`;

// step4 : Append it to parent element
productlist1.appendChild(newProduct);

