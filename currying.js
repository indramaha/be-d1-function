// konsep dari currying itu adalah 
//function yang returnnya adalah function lain

// contoh
const funcOne = () => {
    return(
        "ini function pertama"
    )
}

const funcCurrying = () => {
    return(funcOne)
}

const result = funcCurrying()()
console.log(result)