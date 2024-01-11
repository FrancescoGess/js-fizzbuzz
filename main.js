// Scrivi un programma che stampi in console i numeri da 1 a 100
        // per i multipli di 3 stampi “Fizz” 
        // per i multipli di 5 stampi “Buzz”
        // Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”


for (let i = 1; i <= 100; i++){

    if (((i % 3) === 0) && ((i % 5) === 0)){
        let divFizzBuzz = document.createElement("div");
        let divContainer = document.getElementById("container")
        divFizzBuzz.className = "fizz-buzz"
        divContainer.append(divFizzBuzz) 
        divFizzBuzz.innerHTML += 'FizzBuzz'
        // console.log('FizzBuzz')
    } else if ((i % 3) === 0){
        let divFizz = document.createElement("div");
        let divContainer = document.getElementById("container")
        divFizz.className = "fizz"
        divContainer.append(divFizz) 
        divFizz.innerHTML += 'Fizz'
        // console.log('Fizz')
    } else if ((i % 5) === 0){
        let divBuzz = document.createElement("div");
        let divContainer = document.getElementById("container")
        divBuzz.className = "buzz"
        divContainer.append(divBuzz) 
        divBuzz.innerHTML += 'Buzz'
        // console.log('Buzz')
    } else {
        let divNumber = document.createElement("div");
        let divContainer = document.getElementById("container")
        divNumber.className = "number"
        divContainer.append(divNumber)  
        divNumber.innerHTML += i 
        // console.log(i)
    }
}