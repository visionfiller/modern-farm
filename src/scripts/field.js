/*
Define a variable in this module whose initial value is an empty array. 
This array will store all of the plants that are growing in the field.
 Do not export the array.
    set a variable whose value is an empty array




In the module, define and export a function named addPlant.


The addPlant function must accept a seed object as input. 
    parameter of function is an object (seed)

The function will add the seed to the field (How do you add something to an array?
    Do you remember the method for it?).


    push the object to the array (array.push)

Define and export a function named usePlants that returns a copy of the array of plants.
    returns a copy of the array of plants 

Be aware that when planting corn, an array of objects will be provided instead
 of a single object like all the other type of seeds. 
 Investigate the Array.isArray method to check if corn got passed in, or one of the others.
*/




const plantsInField = []
export const addPlant = (seed) => {
     if (Array.isArray(seed)) {
        for (const soloSeed of seed) {
            plantsInField.push(soloSeed)
        }
     }
     else {
        plantsInField.push(seed)
     }
   
    return plantsInField
}

export const usePlants = () => {
    const plantAdded = addPlant()
    return plantAdded
}

