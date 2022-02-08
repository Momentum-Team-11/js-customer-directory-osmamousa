console.log(customers)
const custom = customers[0];
const personDiv = document.getElementById('People');
let srcURL = custom.picture.medium
console.log("src is ", srcURL)
personDiv.innerHTML += `<img class= "person-img" src=${custom.picture.medium} />`
console.log(personDiv.innerHTML)
// Peoples name
let firstName = custom.name.first
let lastName = custom.name.last
const h2EL = document.createElement("h2")
const h2Text = document.createTextNode(firstName + " " + lastName)
h2EL.appendChild(h2Text)
personDiv.appendChild(h2EL)
// email adress
let email = custom.email
const h4EL = document.createElement("h4")
const h4Text = document.createTextNode(email)
h4EL.appendChild(h4Text)
personDiv.appendChild(h4EL)
//adress
let streetNumber = custom.location.street.number
let streetName = custom.location.street.name
let cityName = custom.location.city
const h6El = document.createElement("h6")
const h6Text = document.createTextNode (streetNumber + streetName + cityName )
h6El.appendChild(h6Text)
personDiv.appendChild(h6El)