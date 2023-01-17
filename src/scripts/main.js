import { createPlan } from "./plan.js"
import { createCorn } from "./seeds/corn.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"
import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
import { Catalog } from "./catalog.js"
/*
In the plan.js module, there is a createPlan() function that is exported. 
In the main.js module, import that function and invoke it. 
    import the createPlan() and invoke, and return the value to a variable called yearlyPlan

Since that function returns a value, you need to store that value in a variable named yearlyPlan.

Remember that to assign what a function returns as a value of a variable, the syntax is...
*/



const yearlyPlan = createPlan()
console.log(yearlyPlan)




/*
const cornSeed = createCorn()
console.log(cornSeed)


const asparagusSeed = createAsparagus ()
console.log(asparagusSeed)


const potatoSeed = createPotato()
console.log(potatoSeed)


const soybeanSeed = createSoybean()
console.log(soybeanSeed)


const sunflowerSeed = createSunflower()
console.log(sunflowerSeed)



const wheatSeed = createWheat()
console.log(wheatSeed)



//const addSunflower = addPlant(sunflowerSeed)
//const addWheat = addPlant(wheatSeed)

//console.log(test)
*/

const seedsPlanted = plantSeeds(yearlyPlan)
const growingPlants = usePlants()
console.log(growingPlants)

const test = harvestPlants(growingPlants)
console.log(test)

const parentHTMLElement = document.querySelector(".container")


parentHTMLElement.innerHTML = Catalog(test)
