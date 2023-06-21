function uniqueCandies(candyType){
    let count=new Map()
    for(let i=0;i<candyType.length;i++){
        if(count.has[candyType[i]]){
            count.set(candyType[i].count.get(candyType[i]+1));
        }
        else{
            count.set(candyType[i],1);
        }

    }

    let maxCandies=Math.min(count.size,candyType.length/2);
    return maxCandies;
    
    

}



let candyType=[1,1,2,2,3,3];
let result=uniqueCandies(candyType);
console.log(result);