front=0
rear=-1
declare -a Queue
eque(){
    ((rear++))
    ehco "Eque the element $1"
    Queue[$rear]=$1
}

deque(){
    if((rear<front))
    then 
    echo "Queue is empty"
    else
        echo "element ${Queue[$front]}"
        ((front++))
    fi    
}
display(){
    if((rear<front))
    then 
    echo "Queue is empty"
    else
        for((i=front;i<=rear;i++))
        do
            echo "${Queue[$i]}"
        done
    fi
}

while true
do
    echo " 1:eque /n 2:deque /n 3:display /n 4: exit"
    read ch
    case $ch in
    1) echo "Enter the number"
    read val
    eque $val ;;
    2) echo 
    deque ;;
    3) 
    display ;;
    4)
    break ;;
    *) 
    echo "Enter the valid number";;
    esac
done