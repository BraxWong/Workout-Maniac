const age = 21
function print_age() {
    const age = 22  //Makes it impossible for the function to access the first age variable, it will overshodow the previous variable with the same name, hence shadow.
    console.log(age)
}

print_age()