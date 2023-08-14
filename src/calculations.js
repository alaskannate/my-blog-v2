

// Takes the inputs of a and b (the two shortest sides of a triangle).
// Outputs the Hypotenuse, or the longest side of the triangle. 
export default function calculateHypotenuse(a, b){
    const cSquared = (a * a) + (b * b);
    const c = Math.sqrt(cSquared);
    return c
};

console.log(calculateHypotenuse(3, 5))


// Temp and unit of mesurement must pair, for exsample...
// convertTemperature(100, C) would convert to what 100C would equial in F, ie. 212F. 
export function convertTemperature(temp, scale){
        if (scale == 'c' || scale == 'C') {
            return ((temp * 1.8) + 32)
        }
        else if (scale == 'f' || scale == 'F') {
            return ((temp - 32) * .555555)
        } 
        else {
            console.log("Unit of measurement, or 'scale' must be writen as either C or F.")
        }};
        
console.log(convertTemperature(100, 'c'))