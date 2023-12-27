export function reverseArray(arr) {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

export function shortenCA(ca, maxLength) {
  if (ca.length <= maxLength) {
    return ca;
  }
  return ca.slice(0, maxLength - 3) + "...";
}
