export default function convertToCamelCase(str) {
  // Split the string into an array of words
  let words = str.split(" ");

  // Convert the first word to lowercase
  words[0] = words[0].toLowerCase();

  // Capitalize the first letter of each subsequent word
  for (let i = 1; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  // Join the words back together without spaces
  let convertedString = words.join("");

  return convertedString;
}
