setTimeout(function() {
    find_max()
    });
    console.log('Hello');

    function find_max(){

        let max_num = Number.NEGATIVE_INFINITY;
    
        for(let num of [-1000,-2,-3,-4,-5,-100]){
    
            if(num > max_num){
    
               max_num = num
    
            }
    
        }
    
        console.log("max_num",false && true)
    
        return max_num
    
    }
