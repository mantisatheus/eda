/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Portion: () => (/* binding */ Portion),
/* harmony export */   Product: () => (/* binding */ Product),
/* harmony export */   Recipe: () => (/* binding */ Recipe)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

var Portion = /** @class */ (function () {
    function Portion(p, w) {
        this.product = p;
        this.weight = w;
    }
    Portion.prototype.getNutrients = function () {
        // let result: Nutrients = {
        //     calories: 0,
        //     protein: 0,
        //     fat: 0,
        //     carbo: 0
        // };
        // this.productsList.forEach((portion) => {
        // const nutrition = getNutrition(portion);
        // result.calories += nutrition.calories;
        // result.protein += nutrition.protein;
        // result.fat += nutrition.fat;
        // result.carbo += nutrition.carbo;
        //  })
        return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getNutrition)(this);
    };
    Portion.prototype.getStat = function () {
        return "".concat(this.product.name, ": ").concat(this.getNutrients().protein.toFixed(2), " ").concat(this.getNutrients().fat.toFixed(2), " ").concat(this.getNutrients().carbo.toFixed(2), " ").concat(this.getNutrients().calories.toFixed(0));
    };
    return Portion;
}());

var Product = /** @class */ (function () {
    function Product(/* n, */ cal, p, f, c) {
        //this.name = n;
        this.calories = cal;
        this.protein = p;
        this.fat = f;
        this.carbo = c;
    }
    Product.prototype.setTsp = function (weight) {
        this.tspWeight = weight;
        return this;
    };
    Product.prototype.setPieceWeight = function (weight) {
        this.pieceWeight = weight;
        return this;
    };
    Product.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Product.prototype.take = function (weight) {
        return new Portion(this, weight);
    };
    ;
    Product.prototype.takePiece = function (count) {
        if (count === void 0) { count = 1; }
        if (this.pieceWeight === undefined) {
            throw new Error('piece weight is undefined');
        }
        var weight = count * this.pieceWeight;
        return new Portion(this, weight);
    };
    ;
    Product.prototype.takeTsp = function (count) {
        if (this.tspWeight === undefined) {
            throw new Error('teaspoon weight is undefined');
        }
        var weight = count * this.tspWeight;
        return new Portion(this, weight);
    };
    ;
    return Product;
}());

var Recipe /* extends Product */ = /** @class */ (function () {
    function Recipe(portion) {
        //super(0, 0, 0, 0);
        this.productsList = [];
        this.weight = 0;
        this.portions = 1;
        if (portion !== undefined) {
            this.add(portion);
        }
        ;
    }
    Recipe.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Recipe.prototype.setPortions = function (count) {
        this.portions = count;
        return this;
    };
    Recipe.prototype.add = function (p) {
        this.productsList.push(p);
        this.weight += p.weight;
        return this;
    };
    Recipe.prototype.boil = function (__time) {
        this.weight = this.weight * 0.9;
    };
    Recipe.prototype.getWeight = function () {
        return this.weight;
    };
    Recipe.prototype.getNutrients = function () {
        var result = {
            calories: 0,
            protein: 0,
            fat: 0,
            carbo: 0
        };
        this.productsList.forEach(function (portion) {
            var nutrition = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getNutrition)(portion);
            result.calories += nutrition.calories;
            result.protein += nutrition.protein;
            result.fat += nutrition.fat;
            result.carbo += nutrition.carbo;
        });
        return result;
    };
    Recipe.prototype.getCalories = function () {
        return this.getNutrients().calories;
    };
    Recipe.prototype.getProtein = function () {
        return this.getNutrients().protein;
    };
    Recipe.prototype.getStat = function () {
        return "".concat(this.name, ": ").concat(this.getNutrients().protein.toFixed(2), " ").concat(this.getNutrients().fat.toFixed(2), " ").concat(this.getNutrients().carbo.toFixed(2), " ").concat(this.getNutrients().calories.toFixed(0));
    };
    Recipe.prototype.takePortion = function (count) {
        if (count === void 0) { count = 1; }
        var resultProduct = this.makeProduct();
        return resultProduct.takePiece(count);
    };
    Recipe.prototype.makeProduct = function () {
        var nutrients = this.getNutrients();
        var weight = this.getWeight();
        var nutritionPer100 = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getNutritionPer100)(nutrients, weight);
        var portionWeight = weight / this.portions;
        return new Product(nutritionPer100.calories, nutritionPer100.protein, nutritionPer100.fat, nutritionPer100.carbo).setName(this.name).setPieceWeight(portionWeight);
    };
    return Recipe;
}());



/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getNutrition: () => (/* binding */ getNutrition),
/* harmony export */   getNutritionPer100: () => (/* binding */ getNutritionPer100),
/* harmony export */   getSum: () => (/* binding */ getSum),
/* harmony export */   printStat: () => (/* binding */ printStat)
/* harmony export */ });
var getNutrition = function (p) {
    var w100g = p.weight / 100;
    return {
        calories: p.product.calories * w100g,
        protein: p.product.protein * w100g,
        fat: p.product.fat * w100g,
        carbo: p.product.carbo * w100g
    };
};
var getNutritionPer100 = function (n, weight) {
    var c = weight / 100;
    return {
        calories: n.calories / c,
        protein: n.protein / c,
        fat: n.fat / c,
        carbo: n.carbo / c
    };
};
var getSum = function (arr) {
    var result = {
        calories: 0,
        protein: 0,
        fat: 0,
        carbo: 0
    };
    arr.forEach(function (portion) {
        var nutrition = getNutrition(portion);
        console.log(portion.getStat());
        result.calories += nutrition.calories;
        result.protein += nutrition.protein;
        result.fat += nutrition.fat;
        result.carbo += nutrition.carbo;
    });
    // console.log(result);
    console.log('---------');
    return result;
};
var printStat = function (n) {
    return "total: ".concat(n.protein.toFixed(2), " ").concat(n.fat.toFixed(2), " ").concat(n.carbo.toFixed(2), " ").concat(n.calories.toFixed(0));
};


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   apple: () => (/* binding */ apple),
/* harmony export */   blackCoffee: () => (/* binding */ blackCoffee),
/* harmony export */   blueCheese: () => (/* binding */ blueCheese),
/* harmony export */   butter: () => (/* binding */ butter),
/* harmony export */   champignons: () => (/* binding */ champignons),
/* harmony export */   chickenFillet: () => (/* binding */ chickenFillet),
/* harmony export */   coconutMilk: () => (/* binding */ coconutMilk),
/* harmony export */   condensedMilk: () => (/* binding */ condensedMilk),
/* harmony export */   cream35: () => (/* binding */ cream35),
/* harmony export */   creamCheese: () => (/* binding */ creamCheese),
/* harmony export */   eggs: () => (/* binding */ eggs),
/* harmony export */   flour: () => (/* binding */ flour),
/* harmony export */   grainBread: () => (/* binding */ grainBread),
/* harmony export */   mango: () => (/* binding */ mango),
/* harmony export */   milk: () => (/* binding */ milk),
/* harmony export */   peeledPrawns: () => (/* binding */ peeledPrawns),
/* harmony export */   salami: () => (/* binding */ salami),
/* harmony export */   sugar: () => (/* binding */ sugar),
/* harmony export */   tunaFilletOil: () => (/* binding */ tunaFilletOil),
/* harmony export */   turkeyHam: () => (/* binding */ turkeyHam),
/* harmony export */   water: () => (/* binding */ water)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

var water = new _types__WEBPACK_IMPORTED_MODULE_0__.Product(0, 0, 0, 0);
var chickenFillet = new _types__WEBPACK_IMPORTED_MODULE_0__.Product(113, 23.6, 1.9, 0.4).setName('chicken fillet');
var peeledPrawns = new _types__WEBPACK_IMPORTED_MODULE_0__.Product(89, 15.21, 2.1, 0);
var sugar = new _types__WEBPACK_IMPORTED_MODULE_0__.Product(398, 0, 0, 99.7).setTsp(7);
var butter = new _types__WEBPACK_IMPORTED_MODULE_0__.Product(748, 0.5, 82.5, 0.8);
var flour = new _types__WEBPACK_IMPORTED_MODULE_0__.Product(342, 9.2, 1.2, 74.9);
var eggs = new _types__WEBPACK_IMPORTED_MODULE_0__.Product(157, 12.7, 10.9, 0.7).setPieceWeight(70);
var milk = new _types__WEBPACK_IMPORTED_MODULE_0__.Product(64, 3.2, 3.6, 4.8);
var coconutMilk = new _types__WEBPACK_IMPORTED_MODULE_0__.Product(185, 1.6, 19, 2.0);
var cream35 = new _types__WEBPACK_IMPORTED_MODULE_0__.Product(337, 2.5, 35, 3);
var mango = new _types__WEBPACK_IMPORTED_MODULE_0__.Product(67, 0.5, 0.3, 11.5);
var turkeyHam = new _types__WEBPACK_IMPORTED_MODULE_0__.Product(80, 12, 2, 4).setPieceWeight(120).setName('turkey ham');
var blackCoffee = new _types__WEBPACK_IMPORTED_MODULE_0__.Product(0.4, 0.1, 0, 0);
var condensedMilk = new _types__WEBPACK_IMPORTED_MODULE_0__.Product(330, 8, 8.5, 56);
var apple = new _types__WEBPACK_IMPORTED_MODULE_0__.Product(47, 0.4, 0.4, 9.8).setPieceWeight(250).setName('apple');
var grainBread = new _types__WEBPACK_IMPORTED_MODULE_0__.Product(249.8, 10.81, 8.6, 40.64).setPieceWeight(25).setName('bread "fitness"');
var tunaFilletOil = new _types__WEBPACK_IMPORTED_MODULE_0__.Product(166, 28, 6, 0).setName('tuna fillet in oil');
var creamCheese = new _types__WEBPACK_IMPORTED_MODULE_0__.Product(256, 7.5, 24, 2.5).setName('cream cheese'); //7*9
var blueCheese = new _types__WEBPACK_IMPORTED_MODULE_0__.Product(354, 21, 30, 0).setName('blue cheese'); //5*9
var salami = new _types__WEBPACK_IMPORTED_MODULE_0__.Product(450, 22, 38, 5).setName('salami');
var champignons = new _types__WEBPACK_IMPORTED_MODULE_0__.Product(27, 4.3, 1, 0.1).setName('champignons');


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   apple: () => (/* binding */ apple),
/* harmony export */   caPheSuaDa: () => (/* binding */ caPheSuaDa),
/* harmony export */   coffeeMilk: () => (/* binding */ coffeeMilk),
/* harmony export */   mangoPie: () => (/* binding */ mangoPie),
/* harmony export */   pieceOfTurkeyHam: () => (/* binding */ pieceOfTurkeyHam),
/* harmony export */   tomYum: () => (/* binding */ tomYum),
/* harmony export */   tunaSandwich: () => (/* binding */ tunaSandwich)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


var mangoPie = new _types__WEBPACK_IMPORTED_MODULE_0__.Recipe()
    .add(_products__WEBPACK_IMPORTED_MODULE_1__.sugar.takeTsp(6))
    .add(_products__WEBPACK_IMPORTED_MODULE_1__.butter.take(12))
    .add(_products__WEBPACK_IMPORTED_MODULE_1__.flour.take(60))
    .add(_products__WEBPACK_IMPORTED_MODULE_1__.eggs.takePiece(4))
    .add(_products__WEBPACK_IMPORTED_MODULE_1__.milk.take(100))
    .add(_products__WEBPACK_IMPORTED_MODULE_1__.coconutMilk.take(90))
    .add(_products__WEBPACK_IMPORTED_MODULE_1__.cream35.take(170))
    .add(_products__WEBPACK_IMPORTED_MODULE_1__.mango.take(600));
var tomYum = new _types__WEBPACK_IMPORTED_MODULE_0__.Recipe()
    .add(_products__WEBPACK_IMPORTED_MODULE_1__.water.take(2000))
    .add(_products__WEBPACK_IMPORTED_MODULE_1__.peeledPrawns.take(500))
    .add(_products__WEBPACK_IMPORTED_MODULE_1__.coconutMilk.take(500))
    .add(_products__WEBPACK_IMPORTED_MODULE_1__.champignons.take(250))
    .setName('tom yum');
var pieceOfTurkeyHam = new _types__WEBPACK_IMPORTED_MODULE_0__.Recipe(_products__WEBPACK_IMPORTED_MODULE_1__.turkeyHam.takePiece(1 / 4)).setName(_products__WEBPACK_IMPORTED_MODULE_1__.turkeyHam.name);
var caPheSuaDa = new _types__WEBPACK_IMPORTED_MODULE_0__.Recipe().add(_products__WEBPACK_IMPORTED_MODULE_1__.blackCoffee.take(160)).add(_products__WEBPACK_IMPORTED_MODULE_1__.condensedMilk.take(30)).setName('vietnamese coffee');
var coffeeMilk = new _types__WEBPACK_IMPORTED_MODULE_0__.Recipe().add(_products__WEBPACK_IMPORTED_MODULE_1__.blackCoffee.take(160)).add(_products__WEBPACK_IMPORTED_MODULE_1__.milk.take(100)).setName('coffee with milk');
var apple = new _types__WEBPACK_IMPORTED_MODULE_0__.Recipe(_products__WEBPACK_IMPORTED_MODULE_1__.apple.takePiece()).setName(_products__WEBPACK_IMPORTED_MODULE_1__.apple.name);
var tunaSandwich = new _types__WEBPACK_IMPORTED_MODULE_0__.Recipe()
    .add(_products__WEBPACK_IMPORTED_MODULE_1__.grainBread.takePiece(9))
    .add(_products__WEBPACK_IMPORTED_MODULE_1__.creamCheese.take(7 * 9))
    .add(_products__WEBPACK_IMPORTED_MODULE_1__.blueCheese.take(5 * 9))
    .add(_products__WEBPACK_IMPORTED_MODULE_1__.tunaFilletOil.take(200)).setName('tuna sandwich').setPortions(9);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _recipes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);



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
var arr = [];
arr.push(_recipes__WEBPACK_IMPORTED_MODULE_1__.caPheSuaDa.takePortion());
arr.push(_products__WEBPACK_IMPORTED_MODULE_0__.apple.takePiece());
arr.push(_recipes__WEBPACK_IMPORTED_MODULE_1__.tunaSandwich.takePortion(5));
arr.push(_recipes__WEBPACK_IMPORTED_MODULE_1__.tomYum.makeProduct().take(400));
arr.push(_products__WEBPACK_IMPORTED_MODULE_0__.chickenFillet.take(300));
arr.push(_products__WEBPACK_IMPORTED_MODULE_0__.salami.take(50));
console.log((0,_utils__WEBPACK_IMPORTED_MODULE_2__.printStat)((0,_utils__WEBPACK_IMPORTED_MODULE_2__.getSum)(arr)));

})();

/******/ })()
;