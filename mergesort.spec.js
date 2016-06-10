describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([5,6,3,2,9,8,0,4])).toEqual([[5,6,3,2],[9,8,0,4]]) 
  });
  it('is able to split an odd numbered array into two halves', function() {
    expect(split([5,6,3,2,9,8,0])).toEqual([[5,6,3,2],[9,8,0]]) 
  });
  it('is able to split a two element array into two halves', function() {
    expect(split([5,7])).toEqual([[5],[7]]) 
  });
  it('is able to split a one element array into two halves', function() {
    expect(split([5])).toEqual([[5],[]]) 
  });
});

describe('Merge Sort', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([1,3,5,7], [2,4,6,8])).toEqual([1,2,3,4,5,6,7,8]);
  });
  it('is able to merge two uneven sorted arrays into one sorted array', function(){
    expect(merge([1,3,5,7], [2,4,8])).toEqual([1,2,3,4,5,7,8]);
  });
});