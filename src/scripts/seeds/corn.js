/*In each module define and export a function for creating a seed. 

Define the functions with the following syntax. 

If the plant is Asparagus, the function should be named createAsparagus. 
    declare a function named createAsparagus

Same thing for all the others. Use arrow functions. Do not use the function keyword.
Each of these functions should return an object with the following properties. 
    using arrow functions, return an object with properties of type, height, output

Look at the table below the instructions to see what the values for each object are.
type
height
output

The one exception is corn. The createCorn function should return an array with two identical objects in it.
 Each with the proper keys and values.
    createCorn should return an array
 */

// create an object in a function by having no parameter, and return an object
export const createCorn = () => {
            const seedCorn =  [
        {   
            type: "Corn",
            height: 180,
            output: 6
        }
        , 
        {
            type: "Corn",
            height: 180,
            output: 6
        }
      ]
return seedCorn
}

