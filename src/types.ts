import { getNutrition, getNutritionPer100 } from "./utils";

export interface Nutrients {
    calories: number;
    protein: number;
    fat: number;
    carbo: number;
}

export class Portion {
    constructor(p: Product, w: number) {
        this.product = p;
        this.weight = w;
    }

    product: Product;
    weight: number;

    private getNutrients(): Nutrients {
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
        return getNutrition(this);
    }

    public getStat(): string {
        return `${this.product.name}: ${this.getNutrients().protein.toFixed(2)} ${this.getNutrients().fat.toFixed(2)} ${this.getNutrients().carbo.toFixed(2)} ${this.getNutrients().calories.toFixed(0)}`
    }
}

export class Product implements Nutrients {
    constructor(/* n, */ cal: number, p: number, f: number, c: number) {
        //this.name = n;
        this.calories = cal;
        this.protein = p;
        this.fat = f;
        this.carbo = c;
    }
    // name: string;
    calories: number;
    protein: number;
    fat: number;
    carbo: number;
    weight: number;
    pieceWeight: number;
    tspWeight: number;
    name: string;

    public setTsp(weight: number) {
        this.tspWeight = weight;
        return this;
    }

    public setPieceWeight(weight: number) {
        this.pieceWeight = weight;
        return this;
    }

    public setName(name: string) {
        this.name = name;
        return this;
    }

    public take(weight: number) {
        return new Portion(this, weight);
    };

    public takePiece(count: number = 1) {
        if (this.pieceWeight === undefined) {
            throw new Error('piece weight is undefined');
        }
        const weight = count * this.pieceWeight;
        return new Portion(this, weight);
    };

    public takeTsp(count: number) {
        if (this.tspWeight === undefined) {
            throw new Error('teaspoon weight is undefined');
        }
        const weight = count * this.tspWeight;
        return new Portion(this, weight);
    };
}

export class Recipe /* extends Product */ {
    private productsList: Portion[];
    public portions: number;
    public name: string;
    private weight: number;
    constructor(portion?: Portion) {
        //super(0, 0, 0, 0);
        this.productsList = [];
        this.weight = 0;
        this.portions = 1;
        if (portion !== undefined) {
            this.add(portion);
        };
    }

    public setName(name: string) {
        this.name = name;
        return this;
    }

    public setPortions(count: number) {
        this.portions = count;
        return this;
    }

    public add(p: Portion) {
        this.productsList.push(p);
        this.weight += p.weight
        return this;
    }

    public boil(__time?: number) {
        this.weight = this.weight * 0.9;
    }

    public getWeight() {
        return this.weight;
    }

    private getNutrients(): Nutrients {
        let result: Nutrients = {
            calories: 0,
            protein: 0,
            fat: 0,
            carbo: 0
        };
        this.productsList.forEach((portion) => {
            const nutrition = getNutrition(portion);
            result.calories += nutrition.calories;
            result.protein += nutrition.protein;
            result.fat += nutrition.fat;
            result.carbo += nutrition.carbo;
        })
        return result;
    }

    public getCalories() {
        return this.getNutrients().calories;
    }

    public getProtein() {
        return this.getNutrients().protein;
    }

    public getStat(): string {
        return `${this.name}: ${this.getNutrients().protein.toFixed(2)} ${this.getNutrients().fat.toFixed(2)} ${this.getNutrients().carbo.toFixed(2)} ${this.getNutrients().calories.toFixed(0)}`
    }

    public takePortion(count: number = 1) {
        const resultProduct = this.makeProduct();
        return resultProduct.takePiece(count);
    }

    public makeProduct() {
        const nutrients = this.getNutrients();
        const weight = this.getWeight();
        const nutritionPer100 = getNutritionPer100(nutrients, weight);
        const portionWeight = weight / this.portions;
        return new Product(nutritionPer100.calories, nutritionPer100.protein, nutritionPer100.fat, nutritionPer100.carbo).setName(this.name).setPieceWeight(portionWeight);
    }
}