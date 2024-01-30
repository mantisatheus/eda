import { Nutrients, Portion } from "./types";

export const getNutrition = (p: Portion): Nutrients => {
    const w100g = p.weight / 100;
    return {
        calories: p.product.calories * w100g,
        protein: p.product.protein * w100g,
        fat: p.product.fat * w100g,
        carbo: p.product.carbo * w100g
    };
}

export const getNutritionPer100 = (n: Nutrients, weight: number) => {
    const c = weight / 100;
    return {
        calories: n.calories / c,
        protein: n.protein / c,
        fat: n.fat / c,
        carbo: n.carbo / c
    };
}

export const getSum = (arr: Portion[]): Nutrients => {
    let result: Nutrients = {
        calories: 0,
        protein: 0,
        fat: 0,
        carbo: 0
    };
    arr.forEach((portion) => {
        const nutrition = getNutrition(portion);
        console.log(portion.getStat());
        result.calories += nutrition.calories;
        result.protein += nutrition.protein;
        result.fat += nutrition.fat;
        result.carbo += nutrition.carbo;

    })
    // console.log(result);
    console.log('---------');
    return result;
}

export const printStat = (n: Nutrients): string => {
    return `total: ${n.protein.toFixed(2)} ${n.fat.toFixed(2)} ${n.carbo.toFixed(2)} ${n.calories.toFixed(0)}`
}