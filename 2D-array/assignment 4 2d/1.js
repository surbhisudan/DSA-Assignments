function integers(arr1,arr2,arr3){
    let result=[];
    let i=0,j=0,k=0;
    while(i<=arr1.length,j<=arr2.length,k<=arr3.length){
        if(arr1[i]==arr2[j] && arr2[j]==arr3[k]){
            result.push(arr1[i]);
            i++;
            j++;
            k++;
        } 
        else if(arr1[i]<arr2[j]){
            i++;
        }
        else if(arr2[j]<arr3[k]){
            j++
        }
        else{
            k++
        }
    }
    return result;

}
let arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8];
console.log(integers(arr1,arr2,arr3))