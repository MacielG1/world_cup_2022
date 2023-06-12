export default function convertToTitleCase(str) {
  //
  // Insert a space before each uppercase letter that follows a lowercase letter
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  // Convert each word to title case
  return str.replace(/\b\w+/g, function (s) {
    return s.charAt(0).toUpperCase() + s.substr(1).toLowerCase();
  });
}
