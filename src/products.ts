import { Product } from "./types";

export const water = new Product(0, 0, 0, 0);
export const chickenFillet = new Product(113, 23.6, 1.9, 0.4).setName('chicken fillet');
export const peeledPrawns = new Product(89, 15.21, 2.1, 0);

export const sugar = new Product(398, 0, 0, 99.7).setTsp(7);
export const butter = new Product(748, 0.5, 82.5, 0.8);
export const flour = new Product(342, 9.2, 1.2, 74.9);
export const eggs = new Product(157, 12.7, 10.9, 0.7).setPieceWeight(70);
export const milk = new Product(64, 3.2, 3.6, 4.8);
export const coconutMilk = new Product(185, 1.6, 19, 2.0);
export const cream35 = new Product(337, 2.5, 35, 3);
export const mango = new Product(67, 0.5, 0.3, 11.5);
export const turkeyHam = new Product(80, 12, 2, 4).setPieceWeight(120).setName('turkey ham');

export const blackCoffee = new Product(0.4, 0.1, 0, 0);
export const condensedMilk = new Product(330, 8, 8.5, 56);
export const apple = new Product(47, 0.4, 0.4, 9.8).setPieceWeight(250).setName('apple')

export const grainBread = new Product(249.8, 10.81, 8.6, 40.64).setPieceWeight(25).setName('bread "fitness"');
export const tunaFilletOil = new Product(166, 28, 6, 0).setName('tuna fillet in oil');
export const creamCheese = new Product(256, 7.5, 24, 2.5).setName('cream cheese');//7*9
export const blueCheese = new Product(354, 21, 30, 0).setName('blue cheese');//5*9
export const salami = new Product(450, 22, 38, 5).setName('salami');
export const champignons = new Product(27, 4.3, 1, 0.1).setName('champignons');
