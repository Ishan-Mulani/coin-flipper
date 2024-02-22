function choice(arr) {
  console.log({ arr, len: arr.length });
  const randomNum = Math.floor(Math.random() * arr.length);
  return arr[randomNum];
}

export { choice };
