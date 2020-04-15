// Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
// in a string to their corresponding HTML entities.

function convertHTML(str) {
    return str.replace(/[&<>"']/g,
        (match)=>{
switch (match) {
    case "&": return "&amp;"
    case "<": return "&lt;"
    case ">": return "&gt;"
    case '"': return "&quot;"
    case "'": return "&apos;"
}
    })
}
  console.log(convertHTML("Hamburgers < Pizza < Tacos"));
  