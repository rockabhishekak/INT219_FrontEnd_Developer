top=-1
declare a -stack
push(){
    ((top++))
    stack[$top]=$1
    echo "Element added: $1"

}
pop(){
    if ((top==-1))
    then 
        echo "under flow"
    else
        echo "Element deleted: ${stack[$top]}"
        ((top--))
    fi
}
display(){
    if((top==-1))
    then
        echo "Empty"
    else 
        for((i=top;i>=0;i--))
        do
            echo ${stack[$i]}
        done
    fi
}
while true
do
    echo "1.push , 2 pop, 3 Display, 4 Exit"
    read ch
    case $ch in 
    1)
        echo "Enter element"
        read val
        push $val
        ;;
    2)
     pop ;;
    3)
    display ;;
    4)
    break ;;
    *)
    echo "invalid iput"
    esac
done
1