// Below is used to store the state of updated attributes to the state
const storeState = () => {
    let currentState = {};
    return (stateChangeFunction = state => state) => {
        const newState = stateChangeFunction(currentState);
        currentState = {...newState};
        return newState;
    }
}

const stateControl = storeState();

//refactor to curry the function, each line calles a new function:
const changeState = (prop) => {
    return (value) => {
        return (state) => ({
            ...state,
            [prop] : (state[prop] || 5) + value
        })
    }
}


let creature = { water: 5, energy: 5, stamina: 5 }



//call the above by using:
changeCreatureState(creture, "energy", 5 )



//smaller more specific functions to change state:
const eat = changeState("energy");
const drink = changeState("water");
const sleep = changeState("stamina");

//can access the above functions like so:
eat(5)(creature)
drink(5)(creature)
sleep(5)(creature)

//Add more specific types of updating states based on type of intake (food, sleep, drink)
const greenFood = changeState("energy")(10)
const yellowFood = changeState("energy")(5)
const redFood = changeState("energy")(-5)

const greenDrink = changeState("water")(10)
const yellowDrink = changeState("water")(5)
const redDrink = changeState("water")(-5)

const greenSleep = changeState("stamina")(10)
const yellowSleep = changeState("stamina")(5)
const redSleep = changeState("stamina")(-5)

