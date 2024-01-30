import { chickenFillet, salami, apple } from "./products";
import { caPheSuaDa, coffeeMilk, mangoPie, pieceOfTurkeyHam, tomYum, tunaSandwich } from './recipes';
import { getSum, printStat } from "./utils";

//console.log(mangoPie.getStat());

// console.log('calories = ', tomYum.getCalories());
// //console.log('end')
// console.log(pieceOfTurkeyHam.getStat());
// console.log(caPheSuaDa.getStat());
// console.log(apple.takePiece().getStat());
// console.log(tunaSandwich.takePortion(5).getStat());
// console.log(coffeeMilk.getStat());
// console.log(chickenFillet.take(300).getStat());
// console.log(salami.take(50).getStat());
// console.log(tomYum.makeProduct().take(400).getStat());

const arr = [];
arr.push(caPheSuaDa.takePortion());
arr.push(apple.takePiece());
arr.push(tunaSandwich.takePortion(5));
arr.push(tomYum.makeProduct().take(400));
arr.push(chickenFillet.take(300));
arr.push(salami.take(50));

console.log(printStat(getSum(arr)));