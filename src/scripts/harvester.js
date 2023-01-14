/*
Create a scripts/harvester.js module.

In this module, define and export a harvestPlants function.

The harvestPlants function must accept the plants array as input.
    param is the output of the plants array that was created using usePlants()
The function will return an array of seed objects.
    declare an empty array
    return an array of seed objects into the empty array
Iterate the array of growing plants. 

On each plant, get the value of the output property.
Add that many of the plant objects to the array that the function returns. 
For example, if the current plant is a peanut object with an output of 2...
*/


/*
iterate plant array
retrieve output value
put into new array(outputArray)
*/


export const harvestPlants = (arrayObj) => {
    let seedObjectArray = []

    for (const seedObject of arrayObj) {
        seedObjectArray.push(seedObject)
        const outputArray = []
        outputArray.push(seedObject.output)
        for (let i = 0; i < outputArray.length; i++) {
            outputArray.push(seedObject)
        }
        seedObjectArray.push(outputArray)
    }

    return seedObjectArray
}

