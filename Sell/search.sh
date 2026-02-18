echo "Enter the number of element"
read n
declare -a arr
echo "Enter the element"
for((i=0;i<n;i++))
do 
    read arr[$i]
done
echo "Enter the key"
read key
flag=false
index=-1
for((i=0;i<n;i++))
do
    if((arr[i]==key))
    then 
        flag=true
        index=$i
        break
    fi
done
if $flag
then
    echo "the number in key at index $index"
else
    echo "the number is not found"
fi


