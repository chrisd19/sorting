var bubbleSort = function(array){
    for (var i = array.length; i > 0  ; i--){
        var notSorted = true;
        for (var j = 0; j < i; j++){
            var temp = array[j];
            if(array[j+1] < array[j]){
                notSorted = false;
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
        if (notSorted) break;
    }
    return array;
}