const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr3 = [...arr1,...arr2] //Adding ... before the array will deconstruct the square brackets for the array
const arr4 = [{
    name:'Brax'
}]
const arr5 = [{
    name:'John'
}]
const arr6 = [...arr4,...arr5]
for(let i = 0; i < arr3.length; i++){
    console.log(arr3[i])
}
console.log(arr3)
console.log(arr6)

