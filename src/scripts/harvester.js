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
/*
export const outputArray = (arrayObj) => {
    const seedOutputArray = []
    for(const seedObject of arrayObj) {
        let seedOutput = seedObject.output
        for (let i = 0; i < seedOutput; i++) {
            let i = 0;
            seedOutputArray.push(seedObject) //pushes the object however many of the object outputs
        }


    }
    return seedOutputArray
}

*/

export const harvestPlants = (arrayObj) => {
    let seedObjectArray = []
    

    for (const seedObject of arrayObj) {
        if (seedObject.type === "Corn") {
            seedObject.output = seedObject.output/2
        }
        
       // seedObjectArray.push(seedObject)
        
        const seedOutput = seedObject.output
        for (let i = 0; i < seedOutput; i++) {
            let i = 0;
            
            seedObjectArray.push(seedObject)
            }

        }
       
    
    return seedObjectArray
}
/*
        //for (const output in seedObject) {
            let seedOutput = seedObject.output
            //identifies the output per object
            //seedObjectArray.push(seedOutput)
            //this pushes the output of each object into the array for however many properties 
            //there are

            //this pushes the object the amount of outputs
         
            for (let i = 0; i < seedOutput; i++) {
                let i = 0;
                seedObjectArray.push(seedObject) //pushes the object however many of the object outputs
            }
               
               //for (const outputObject of outputArray) {
                   // seedObjectArray.push(outputObject)
                    
           // }
            //  for (const outputObject of outputArray)  {
            // outputArray.push(outputObject)   
            
*/
















/* }
 seedObjectArray.push(seedObject)
 const outputArray = []
 outputArray.push(seedObject)

const outputFunction = () => {
 for (let i = 0; i < seedObject.output; i++) {
} }



     outputArray.forEach(seedObject =>
         seedObjectArray.push(seedObject)

 
 
}

return seedObjectArray
}
*/
