const myNumbers ={};
myNumbers[Symbol.iterator] = function(){
    let n = 0;
    let done = false;
    return{
        next(){
            n += 10;
            if(n == 110){ done = true}
            return{
                value: n,
                done : done
            }
        }
    }
}

for(let num of myNumbers){
    console.log(num);
}