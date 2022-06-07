const arr = [1,2,3,4,5,6,7,8]
const friend = [
    {
        name:'x',
        age: 15
    },
    {
        name : 'y',
        age : 21
    },
    {
        name : 'z',
        age : 22
    }

]
const newMappedArray = arr.map(function(element){
    return 100 // This will map all the elements in the array into 100
     
})

const filteredArray = arr.filter(element => element < 5) //This filters out elements that are less than 5

const filteredar = friend.filter(element => element.age > 16) //This filters out age that is less than 16

console.log(arr,filteredar)
