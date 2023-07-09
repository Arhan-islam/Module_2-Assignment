/*---Write a function named getAddressCity that takes in an object representing a person's address.
The address object has properties 'street', 'city', and 'country'. 
The function should return the value of the 'city' property if it exists,
or the string "Unknown" if it doesn't exist, using optional chaining.----*/

function getAddressCity (obj){
    return obj && obj?.city ? obj.city : `unknown` ;
}
const personAddress = {
 street : `g`,
 city: `rajshahi`,
 country:`Bangladesh`,
}
const personNewAddress = {
    street : `g`,
    country:`Bangladesh`,
   }
   console.log (getAddressCity(personAddress));
   console.log(getAddressCity(personNewAddress));