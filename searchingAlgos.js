//Binary Search Algo
const list = [3, 5, 6, 8, 11, 12, 14, 15, 16, 17, 18];
const item = 8;

//recursive vs iterative

//iterative
function binarySearch2(){
    let low = 0
    let high = list.length - 1

    while(low <= high){

    let mid = Math.floor((low + high) / 2)

    let guess = list[mid]

        if(guess === item){
            //console log mid index
            console.log(mid, "this is result")
        }

        //if guess < item
        if(guess < item){
            console.log('in first if')
            low = mid + 1
       }
        //if guess > item
        else {
            console.log('in else')
            high = mid - 1
        }
    }
    return null
}

binarySearch2(list, item)