let  boneLocation = Math.floor(Math.random() * 15)
let policeLocation = Math.floor(Math.random() * 15)

// Create a function called treasure that returns an alert.//
const treasure = (location) => { 
 // check if the location clicked equates to the random treasure location
    if (location === boneLocation) {
         // change the innerHTML question mark to a treasure
        document.getElementById(location).innerHTML = "🦴"
        alert("You found the bone, you lucky dog!")
             // check if the location clicked equates to the random police location
    } else if (location  === policeLocation) {
        document.getElementById(location).innerHTML ="👮‍♂️"
        alert ("Oh no! You've been caught by the dog catcher!")
    } else {
        document.getElementById(location).innerHTML = "🌳"
    }
}

const instructionsList = (id) => {
    var directions = document.getElementById("instructions")
    return directions.style.display = "block"
    
}