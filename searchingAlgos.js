//Binary Search Algo
const list = [3, 5, 6, 8, 11, 12, 14, 15, 16, 17, 18];
const item = 15;

//recursive vs iterative

//iterative
function binarySearch(){
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

function binarySearch2(){
    //define low = 0 
    let low = 0
    //define high = list.length -1
    let high = list.length - 1 

    //have a while condition; while low <= high start searching
    while(low <= high){

        //mid and guess need to be in while condition
        //ISSUE WAS parantheses for mid calculation
        //define mid index = Math.floor(low + high / 2 )
        let mid = Math.floor( (low + high) / 2)
        let guess = list[mid]

        //if guess == item, return array position of guess
        if(guess === item){
            console.log(`Guess value is ${list[mid]};`, `guess found at index position ${mid}`)
            return
        }
        console.log("iterating now", `guess is ${guess}`)
        if (guess > item){
            high = mid -1
        }

        else{
            low = mid + 1 
        }
    }
    return -1
}

binarySearch2(list, item)