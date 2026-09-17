import {Friend, Colleague, EmailContact } from './myTypes'
import { friends, colleagues } from "./01-basics";

function older(f: Friend) : string {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

console.log(older(friends[0]))

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]) { // Inferred retun type
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}


console.log(highestExtension(colleagues.current));

//a function called ‘addColleague’ that adds a colleague to an array, and setting their extensins number to the highest extension, plus 1. 
function addColleague(cs: Colleague[], name: string, department: string, email: string): void {
  const highestExtensionNumber = highestExtension(cs).contact.extension;
  const newColleague: Colleague = {
    name: name,
    department: department,
    contact: {
        email: email,
        extension: highestExtensionNumber + 1
    }
  };
  cs.push(newColleague);
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

function sortColleagues(
  colleagues: Colleague[],
  sorter: (c1: Colleague, c2: Colleague) => number
): EmailContact[] {
  const sorted = colleagues.sort(sorter); // Colleague[] inferred
  const result: EmailContact[] = sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
  return result 
}

function findFriends(friends: Friend[], criterion: (f: Friend) => boolean): Friend[] {
  const result: Friend[] = friends.filter(criterion);
  return result;
}
console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));
console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length));

console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
console.log(findFriends(friends, (friend) => friend.age < 35));
