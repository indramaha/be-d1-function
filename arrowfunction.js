// arrow function ini merupakan function gabungan dari basic function dengan anonymus function

// basic function
function basic(params){
    return(
        "Hello basic" + " " + params
    )
}

//anonymus function
const iniVariabel = function(params){
    return(
        "hello anonym" + " " + params
    )
}


//menjadilah arrow function karena kata function dalam anonymus function ini di pindah ke sebelah kanan params dijadikan arrow/panah
const arrowFunction = (params) => {
    return(
        "hello arrow" + " " + params
    )
}


console.log(basic("bagus"))

console.log(iniVariabel("bagus"))

console.log(arrowFunction("bagus"))