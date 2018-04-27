const isRemainder = (result, parentArr, childArr) => {
  return result.some((existingArr) =>
    JSON.stringify([...existingArr, ...childArr].sort()) === JSON.stringify(parentArr.sort())
  )
};

const combinationUtil = (arr, result, getting, start, end, index, r) => {
  if (index === r) {
    if (!isRemainder(result, arr, getting)) {
      result.push(getting.slice(0));
    }
    return;
  }

  for (let i = start; i <= end && end- i + 1 >= r-index; i++ ) {
    getting[index] = arr[i];
    combinationUtil(arr, result, getting, i + 1, end, index + 1, r);
  }
};

export default (arr) => {
  const n = arr.length;
  const r = (n - n % 2) / 2;

  let result = [];
  let getting = [];
  combinationUtil(arr, result, getting, 0, n - 1, 0 ,r)
  return result;
};
