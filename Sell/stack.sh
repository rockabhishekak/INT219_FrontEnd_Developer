top=-1
declare -a stack
push(){
    ((top++))
    stack[$top]=$1
    echo "Element add: $1"

}
pop(){
    if((top==-1))
    then 
        echo "Under flow condition"
    else
        echo "delete the element ${stack[$top]}"
        ((top--))
    fi
}
display(){
    if((top==-1))
    then 
        echo "Stack is empty"
    else
        for((i=top; i>=0;i--))
        do 
            echo "${stack[$i]}"
        done
    fi
}
while true
do
    echo " 1:push /n 2:pop /n 3:display /n 4: exit"
    read ch
    case $ch in
    1) echo "Enter the number"
    read val
    push $val ;;
    2) echo 
    pop ;;
    3) 
    display ;;
    4)
    break ;;
    *) 
    echo "Enter the valid number";;
    esac
done