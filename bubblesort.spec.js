describe('Bubble Sort', function(){
	var array = [1, 4, 2, 3]
	bubbleSort(array);
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles 5 values', function() {
  	expect( bubbleSort([5,4,14,6,9])).toEqual([4,5,6,9,14]);
  });
  it('updates on itself instead of create a new array', function() {
  	expect(array).toEqual([1, 2, 3, 4]);
  });
});

