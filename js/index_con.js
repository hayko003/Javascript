function myFn(a, b) {
  let c;
  a = a + 1;
  c = a + b;
  return c;
}

console.log.myFn();

const personOne = {
  name:"Bob",
  age: 21,
}

function increasePersonAge(person) {
  const updatedPerson = Object.assign({}, person)
  updatedPerson.age += 1
  return updatedPerson
}

const updatedPersonOne = increasePersonAge(PersonOne)
console.log(personOne.age)
