/*
* DESCRIPTION:
Complete the function/method (depending on the language) to return true/True when its argument is an array that has the same nesting structures and same corresponding length of nested arrays as the first array.

For example:

 // should return true
[ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );
[ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );

 // should return false
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );

// should return true
[ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] );

// should return false
[ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );
For your convenience, there is already a function 'isArray(o)' declared and defined that returns true if its argument is an array, false otherwise.
* */

Array.prototype.sameStructureAs = function (other) {
  // Return 'true' if and only if 'other' has the same
  // nesting structure as 'this'.

  // Note: You are given a function isArray(o) that returns
  // whether its argument is an array.
  // function isSimilar(element1, element2) {
  //   return Array.isArray(element1) || Array.isArray(element2)
  //     ? element1.every((item, index) => isSimilar(item, element2[index]))
  //     : element1 === element2;
  // }
  // return isSimilar(this, other);

  return Array.isArray(this) && Array.isArray(other)
    ? this.every((item, index) => item.sameStructureAs(other[index]))
    : this === other;
};

console.log([[[], []]].sameStructureAs([[[], []]]));
