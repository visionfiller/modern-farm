/*
Create a scripts/tractor.js module.
In this module, define and export a plantSeeds function.



The function must accept the year's planting plan as input (i.e. it must define a parameter).

parameter is the plan from the function of plan.js

The plan is an array. It contains 3 arrays representing the rows in the field to be plants.


Figure out how to iterate both the parent array and the child arrays.
// Example growing plan. Actual plan is bigger.
[
    ["Potato", "Soybean", "Soybean", "Corn"],
    ["Wheat", "Corn", "Wheat", "Asparagus"],
    ["Asparagus", "Wheat", "Soybean", "Corn"]
]

    iterate the plan array to instance each vegatable to be planted
    isolate the plant and use that object to determine which seed gets planted
    create a new seed for each plant in the array, and push that seed into addPlant

As you iterate the row of food types to be planted, 
invoke the corresponding factory function 
(e.g. if the food type is "Asparagus", invoke the createAsparagus function to get an asparagus seed).
Take that seed and add it to the array of plants in the field module.
   plantsInField() .push(seed)
*/

import { addPlant } from "./field.js"
import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createPotato } from "./seeds/potato.js"
import { createCorn } from "./seeds/corn.js"
import { createSoybean } from "./seeds/soybean.js"
import { createWheat } from "./seeds/wheat.js"



export const plantSeeds = (array) => {
    for (const row of array) {
        for (const plant of row) {
            if (plant === "Asparagus" ){
                    const asparagusSeed = createAsparagus()
                    addPlant(asparagusSeed) }

            else if (plant === "Corn") {
                    const cornSeed = createCorn()
                    for (const corn of cornSeed) {
                        addPlant(corn)
                    }
                    }
            
            else if (plant === "Potato") {
                const potatoSeed = createPotato()
                addPlant(potatoSeed)
            }
            else if (plant === "Soybean") {
                const soybeanSeed = createSoybean()
                addPlant(soybeanSeed)
            }
            else if (plant === "Sunflower") {
                const sunflowerSeed = createSunflower()
                addPlant(sunflowerSeed)
            }
            else if (plant === "Wheat") {
                const wheatSeed = createWheat()
                addPlant(wheatSeed)
            }
            
        }
        
    }
    
}
    
            
