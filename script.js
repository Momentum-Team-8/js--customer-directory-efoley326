
let outputContainer = document.getElementById("output")

for (let i = 0; i < customers.length; i++) {
    generateDOM(customers, i)
}

function generateDOM(array,index) {
    let customerCard = document.createElement("div")
    customerCard.className = "card"
    let person = array[index]

    let lastName = person.name.last === undefined ? "" : person.name.last
    let firstName = person.name.first === undefined ? "" : person.name.first


    let fullName = document.createElement("h2")
    fullName.innerText = firstName + " " + lastName

    let image = document.createElement("img")
    image.src = person.picture === null ? 'https://randomuser.me/api/portraits/thumb/women/62.jpg' : person.picture

    
    let dob = document.createElement("p")
    dob.innerText = moment(person.dob).format("MM DD, YYYY")

    let location = document.createElement("p")
    let state = function nameToAbbr("") ;
    location.innerHTML = person.location.street.number + " " + person.location.street.name + " " + person.location.city + " " + person.location.state + " " + person.location.postcode

    let email = document.createElement("p")
    email.innerText = moment(person.email)

    let registerDate = document.createElement("p")
    email.innerText = moment(person.registered.date)
    
    
    customerCard.appendChild(image)
     customerCard.appendChild(email)
     customerCard.appendChild(fullName)
     customerCard.appendChild(location)
     customerCard.appendChild(dob)
     customerCard.appendChild(registerDate)
    outputContainer.appendChild(customerCard)

    document.getElementById("outputContainer").innerHTML = "customerProfiles";
    console.log (customerProfiles)
}




generateDOM(costumers);