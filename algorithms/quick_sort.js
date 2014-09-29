/**
 * http://en.wikipedia.org/wiki/Quicksort
 *
 * Trying to rewrite the psuedocode to javascript
 */

function quicksort(A, i, k) {
  if (i < k) {
    var p = partition(A, i, k);
    quicksort(A, i, p - 1);
    quicksort(A, p + 1, k);
  }
}

function partition(array, left, right) {
  var pivotValue = choosePivot(array, left, right);
  var pivotIndex = array[pivotIndex];
  var storeIndex = left;

  swap(array[pivotIndex], array[right]);

  // wrong
  for (var i = 0; i < right; i++) {
    if (array[i] < pivotValue) {
      swap(array[i], array[storeIndex]);
      storeIndex = storeIndex + 1;
    }
  }

  swap(array[storeIndex], array[right]);
  return storeIndex;
}
