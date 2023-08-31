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
eat(25)(creature)
drink(50)(creature)
sleep(100)(creature)

