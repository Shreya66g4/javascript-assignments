function calculateSum(num) {
    if (num <= 0) {
      return 0;
    }
    
    return (num * (num+1))/2;
  }

console.log(calculateSum(4));