function home(){
    homeVar = Math.random()
    homeVar = homeVar * 6
    homeVar = Math.floor(homeVar)

    const homeArray = [
        "a cardboard box",
        "a shack",
        "a trailer",
        "an apartment",
        "a house",
        "a mansion"
    ]

    return(homeArray[homeVar])
}
function children(){
    childVar = Math.random()
    childVar = childVar * 15
    childVar = Math.floor(childVar)
    if(childVar == 1){
        childVar = 2
    }

    return(childVar)
}
function car(){
    carVar = Math.random()
    carVar = carVar * 7
    carVar = Math.floor(carVar)

    const carArray = [
        "no vehicle",
        "a biycicle",
        "an old rusty car",
        "a nice car",
        "a motorcycle",
        "a supercar",
        "a jet"
    ]

    return(carArray[carVar])
}
function salary(){
    salVar = Math.random()
    salVar = salVar * 1000000
    salVar = Math.floor(salVar)

    salVarNeg = Math.random()
    if(.3 > salVarNeg){
        salVar = salVar * -1
    }
    if(salVarNeg > .3){
        salVar = salVar * 1
    }

    return salVar
}
function lifeTIme(){
    lifeVar = Math.random()
    lifeVar = lifeVar * 120
    lifeVar = Math.floor(lifeVar)

    return lifeVar
}
function job(){
    jobVar = Math.random()
    jobVar = jobVar * 12
    jobVar = Math.floor(jobVar)

    const jobArray = [
        "a janitor",
        "a construction worker",
        "a mechanic",
        "a pilot",
        "a taxi driver",
        "a software engineer",
        "a plumber",
        "a farmer",
        "a lawyer",
        "an astronaut",
        "a scientist",
        "a waiter"
    ]

    return(jobArray[jobVar])
}
console.log()
console.log("You will live in \
" + home() + " and will have " + children() + " kids. You will \
also own " + car() + ".")
console.log("You will make " + salary() + " a year.")
console.log("You will live for " + lifeTIme() + " years.")
console.log()
console.log("Your occupation will be " + job())