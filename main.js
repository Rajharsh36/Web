const getvalue=()=>{
  
  let text=document.getElementById ("text")
console.log(text.value)
let output=document.getElementsByClassName("output")


const fonts = [
  "Arial", "Verdana", "Tahoma", "Trebuchet MS", "Times New Roman", "Georgia", "Garamond", "Courier New", "Brush Script MT"
  // Add more styles as needed
];
const fontFamilies = [
  'Roboto, sans-serif',
  'Pacifico, cursive',
  'Cinzel, serif',
  'Lobster, cursive',
  'Playfair Display, serif',
  'Raleway, sans-serif',
  'Amatic SC, cursive',
  'Merriweather, serif',
  'Poppins, sans-serif'
];

// You can use these fonts in your JavaScript or CSS styles
let s=""
for (let n=0;n<output.length;n++){
  output[n].innerText=text.value
  
}
for (let i=0;i<fontFamilies.length;i++){
//output.style.fontFamily=fonts[i]

  output[i].style.fontFamily=fontFamilies[i]
}
console.log(s)

}