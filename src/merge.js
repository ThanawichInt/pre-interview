"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = void 0;
function merge(collection1, collection2) {
    var mergedArray = [];
    var i = 0; // Index for collection1
    var j = 0; // Index for collection2
    while (i < collection1.length && j < collection2.length) {
        if (collection1[i] <= collection2[j]) {
            mergedArray.push(collection1[i]);
            i++;
        }
        else {
            mergedArray.push(collection2[j]);
            j++;
        }
    }
    // Add remaining elements from either array
    if (i < collection1.length) {
        mergedArray.push.apply(mergedArray, collection1.slice(i));
    }
    else if (j < collection2.length) {
        mergedArray.push.apply(mergedArray, collection2.slice(j));
    }
    return mergedArray;
}
exports.merge = merge;
var array1 = [1, 2, 3];
var array2 = [4, 5, 6, 7];
var mergedArray = merge(array1, array2);
console.log(mergedArray);
