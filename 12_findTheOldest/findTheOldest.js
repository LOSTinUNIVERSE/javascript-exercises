const people = [
  {
    name: "Carly",
    yearOfBirth: 1066,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

let now = new Date()
let year = now.getFullYear()
let sorted = {}
  
  const findTheOldest = function(people) {
    for(let item of people){
      if ('yearOfDeath' in item == false){
         item.yearOfDeath = year 
      };
    }
    people.sort((a,b)=>{
      const lastGuy = a.yearOfDeath - a.yearOfBirth
      const nextGuy = b.yearOfDeath - b.yearOfBirth
      return lastGuy > nextGuy ? -1 : 1
    })
      sorted = people
      return sorted[0]
  }
  console.log(findTheOldest(people))



// Do not edit below this line
module.exports = findTheOldest;
