import { merge } from "../src/merge";

describe('Merge Testing', () => {
    test('Should return merged array', () => {
        const collection1 = [1, 3, 5];
        const collection2 = [2, 4, 6];
        const expectedMergedArray = [1, 2, 3, 4, 5, 6];
    
        const actualMergedArray = merge(collection1, collection2);
    
        expect(actualMergedArray).toEqual(expectedMergedArray);
    }),

    test('Having empty array', () => {
        const collection1: number[] = [];
        const collection2 = [1, 2, 3];
        const expectedMergedArray = [1, 2, 3];
    
        const actualMergedArray = merge(collection1, collection2);
    
        expect(actualMergedArray).toEqual(expectedMergedArray);
    });
  });