// callback adalah metode yang penggunaannya dengan cara
// menggunakan function untuk memanggil function lain

// function helloWorld(){
//     return("Hello World")
// }

// function helloWorldName(params){
//     const result = params()
//     return(result + " " + "Bagus")
// }

// const result = helloWorldName(helloWorld)

// console.log(result)


// ----------------------------------------------------------------------------------------------------------------------

// atau juga bisa tuliskan seperti ini

function callName(params) {
    const result = params()
    return(result + " " + "bagus")
}

const res = callName(function(){ {/*function yang menjadi parameter disini tidak memiliki nama ini disebut anonymus function*/}
    return("hello world")
})

console.log(res)