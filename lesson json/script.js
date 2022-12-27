"use strict";

const persone = {
  name: "Alex",
  tel: "+355968568",
  parents: {
    mom: "Olga",
    dad: "Taras",
  },
};
const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = "Anna";
console.log(persone);
console.log(clone);
console.log(JSON.stringify(persone));
console.log(JSON.parse(JSON.stringify(persone)));
