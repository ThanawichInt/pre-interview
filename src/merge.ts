export function merge(collection1: number[], collection2: number[]): number[] {
    const mergedArray: number[] = [];
    let i = 0; // Index for collection1
    let j = 0; // Index for collection2
  
    while (i < collection1.length && j < collection2.length) {
      if (collection1[i] <= collection2[j]) {
        mergedArray.push(collection1[i]);
        i++;
      } else {
        mergedArray.push(collection2[j]);
        j++;
      }
    }
  
    // Add remaining elements from either array
    if (i < collection1.length) {
      mergedArray.push(...collection1.slice(i));
    } else if (j < collection2.length) {
      mergedArray.push(...collection2.slice(j));
    }
  
    return mergedArray;
  }

const array1 = [1, 2, 3];
const array2 = [4, 5, 6, 7];
const mergedArray = merge(array1, array2);

console.log(mergedArray); 