import "./css/styles.css";


let creature = { water: 5, energy: 5, stamina: 5 }

// const drink = (creature) => {
//     return {
//       ...creature,
//       water: (creature.water || 0) + 1
//     }
//   };

//   const eat = (creature) => {
//     return {
//       ...creature,
//       energy: (creature.energy || 0) + 1
//     }
//   };

//   const sleep = (creature) => {
//     return {
//       ...creature,
//       stamina: (creature.stamina || 0) + 1
//     }
//   };

// refactor to take in any of the three properties water, energy, or stamina and takes a value
// const changeCreatureState = (creature, property, value) => {
//     return {
//         [property]: (creature[property] || 5) + value
//     }
// }

//call the above by using:
changeCreatureState(creture, "energy", 5 )

//refactor to make more abstract not just use on creatures:
// const changeState = (state, prop, value) => {
//     return {
//         ...state,
//         [prop]: (state[prop] || 5) + value
//     }
// }

//refactor to curry the function, each line calles a new function:
const changeState = (prop) => {
    return (value) => {
        return (state) => ({
            ...state,
            [prop] : (state[prop] || 5) + value
        })
    }
}

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

// Below is used to store the state of updated attributes to the state
const storeState = () => {
    let currentState = {};
    return (stateChangeFunction) => {
        const newState = stateChangeFunction(currentState);
        currentState = {...newState};
        return newState;
    }
}

const stateControl = storeState();
