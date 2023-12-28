export default function capitalizeFirst(str) {
  let string = [];

  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      string.push(str[0].toUpperCase());
    } else {
      string.push(str[i]);
    }
  }

  string = string.join("");
  return string;
}
