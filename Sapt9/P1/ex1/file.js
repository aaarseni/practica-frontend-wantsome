// acum se printeaza in consola '1' '2' '3' '4' '5' .
// Vrem sa fie ordinea '3' '5' '2' '1' '4'
//hint setTimeout

const func1 = () => {
    setTimeout(() => console.log('1'), 3)
}

const func2 = () => {
    setTimeout(() => console.log('2'), 2)
}

const func3 = () => {
    setTimeout(() => console.log('3'), 0)
}

const func4 = () => {
    setTimeout(() => console.log('4'), 5)
}

const func5 = () => {
    setTimeout(() => console.log('5'), 1)
}


func1();
func2();
func3();
func4();
func5();