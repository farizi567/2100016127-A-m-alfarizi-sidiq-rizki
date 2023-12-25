// capitalize.js (file yang berisi fungsi Capitalize)
function Capitalize(str) {
    if (str.length === 0) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  module.exports = Capitalize;
  