import { Recipe, Product } from './types';
import * as product from "./products";
import { blueCheese } from './products';

export const mangoPie = new Recipe()
    .add(product.sugar.takeTsp(6))
    .add(product.butter.take(12))
    .add(product.flour.take(60))
    .add(product.eggs.takePiece(4))
    .add(product.milk.take(100))
    .add(product.coconutMilk.take(90))
    .add(product.cream35.take(170))
    .add(product.mango.take(600));

export const tomYum = new Recipe()
    .add(product.water.take(2000))
    .add(product.peeledPrawns.take(500))
    .add(product.coconutMilk.take(500))
    .add(product.champignons.take(250))
    .setName('tom yum');

export const pieceOfTurkeyHam = new Recipe(product.turkeyHam.takePiece(1 / 4)).setName(product.turkeyHam.name);
export const caPheSuaDa = new Recipe().add(product.blackCoffee.take(160)).add(product.condensedMilk.take(30)).setName('vietnamese coffee');
export const coffeeMilk = new Recipe().add(product.blackCoffee.take(160)).add(product.milk.take(100)).setName('coffee with milk');

export const tunaSandwich = new Recipe()
    .add(product.grainBread.takePiece(9))
    .add(product.creamCheese.take(7 * 9))
    .add(product.blueCheese.take(5 * 9))
    .add(product.tunaFilletOil.take(200)).setName('tuna sandwich').setPortions(9);

