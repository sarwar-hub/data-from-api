const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
      {
        name: {
          common: "John",
          fullName: ["John", "Doe"]
        },
        age: 32,
        isMale: false,
        address: {
          street: "13/A St Joseph",
          house: 10,
        },
      },
      {
        name: {
          common: "Humayoun",
          fullName: ["Humayoun", "Kabir"]
        },
        age: 33,
        isMale: false,
        address: {
          street: "13/A St Lucia",
          house: 11,
        },
      },
    ]
  };





// person count
const personCount = document.getElementById('person-count');
personCount.innerText = person.found;



// person name
const name1 = document.getElementById('person-1');
name1.innerText = person.result[0].name.common;
const name2 = document.getElementById('person-2');
name2.innerText = person.result[1].name.common;




// age
const age1 = document.getElementById('age-1');
age1.innerText = person.result[0].age;
const age2 = document.getElementById('age-2');
age2.innerText = person.result[1].age;


// street
const street1 = document.getElementById('street-1');
street1.innerText = person.result[0].address.street;
const street2 = document.getElementById('street-2');
street2.innerText = person.result[1].address.street;


// house
const house1 = document.getElementById('house-1');
house1.innerText = person.result[0].address.house;
const house2 = document.getElementById('house-2');
house2.innerText = person.result[1].address.house;
