function x(){
    const hello = 'world'
    for(let i = 0; i<10; i++){
        console.log(i ** 2) // i**2 means i to the power of 2
    }
    console.log(hello + i) // This will not work either because i only exists within the for loop
}

console.log(hello) //would not work since hello only exists within the function, the scope is not global