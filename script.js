function secondHighest(arr) {
  if (arr.length < 2) return -Infinity;

  let max = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (num > max) {
      second = max;
      max = num;
    } else if (num > second && num < max) {
      second = num;
    }
  }

  // If second remains -Infinity, that means there's no valid second highest
  return second;
}
