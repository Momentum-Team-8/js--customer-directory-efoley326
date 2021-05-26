let customerprofiles = output
let person = customers.slice(0);

for (let i = 0; i < person.length; i++) {
    generateDOM(person, i)
}

function nameToAbbr (stateName) {
    const idx = usStates.findIndex(function (state) {
      return state.name === stateName.toUpperCase()
    })
  
    if (idx === -1) {
      return null
    }
  
    return usStates[idx].abbreviation
  }

function generateDOM(array,index) {
    let customerCard = document.createElement("div")
    customerCard.className = "card"
    let name = customers.name

    let lastName = (name.last)
    let firstName = (name.first)


    let fullName = document.createElement("h2")
    fullName.innerText = firstName + " " + lastName

    let image = document.createElement("img")
    image.src = person.picture === null ? 'https://randomuser.me/api/portraits/thumb/women/62.jpg' : person.picture
    
    let dob = document.createElement("p")
    dob.innerText = moment(person.dob).format("MM, DD, YYYY")

    let location = document.createElement("p")
    location.innerHTML = person.location.street.number + " " + person.location.street.name + " " + person.location.city

    State = document.createElement("p")
    State.innerHTML = person.location.city + " " + nameToAbbr(person.location.state) + " " + person.location.postcode 
    
    let email = document.createElement("p")
    email.innerText = moment(person.email)

    let registerDate = document.createElement("p")
    email.innerText = moment(person.registered.date)
    
    
     customerCard.appendChild(image)
     customerCard.appendChild(email)
     customerCard.appendChild(fullName)
     customerCard.appendChild(location)
     customerCard.appendChild(State)
     customerCard.appendChild(dob)
     customerCard.appendChild(registerDate)
    output.appendChild(customerCard)

    document.getElementById("output").innerHTML = output
    console.log (output)
    
}



(generateDOM(""));