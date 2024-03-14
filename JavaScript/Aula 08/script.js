let teste = 10;
teste = 11

const str = "1234"
// str = "234" -> não posso fazer

function funcTest() {
    if (true) {
        var t = 1
        let i = 1
    }
    console.log(t) // 1
    // console.log(i) // undefined
}

funcTest()

// Operação

1 + 1 // soma
2 - 1 // sub
2 * (2 + 1) * 3 // multi
2 / 3 // div
5 % 2 // 1 -> resto
3 ** 2 // 3^2 -> exponencial

Math.trunc(5.2) // 5

// Comparação

2 == 2 // true
2 == "2" // true

2 === 2 // true
2 === "2" // false

2 != 2 // false
2 != "2" // false
2 != 1 // true

2 !== 2 // false
2 !== "2" // true
2 !== 1 // true

2 < 5 // true
4 < 2 // false
2 < 2 // false

2 <= 5 // true
4 <= 2 // false
2 <= 2 // true

2 > 5 // false
4 > 2 // true
2 > 2 // false

2 >= 5 // false
4 >= 2 // true
2 >= 2 // true

// Logicos

// and (e)
true && true // true
true && false // false
false && true // false
false && false // false

// or (ou)
true || true // true
true || false // true
false || true // true
false || false // false

// not (negação)
!true // false
!false // true

!!!true // false
console.log(!!!!!!!!!!!!!false) // true

// Condicionais

// if

let n1 = 5
if (n1 % 2 === 0) {
    console.log("é par")
}

// if else

if (n1 % 2 === 0) {
    console.log("é par")
} else {
    console.log("é impar")
}

if (n1 > 5)
    console.log("Entrei")
else
    for (let i = 0; i < 10; i++) {
        console.log(i)
    }