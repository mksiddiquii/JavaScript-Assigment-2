let array1=[1,2,3,4,5,6]
function searchArray(arr, value) {
    if (arr.length === 0) {
      return false;
    }
    
    if (arr[0] === value) {
      return true;
    }
    
    return searchArray(arr.slice(1), value);
  }
  console.log(searchArray(array1,8));