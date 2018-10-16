// using this file is optional
// you can also load the code snippets in using your browser's console
const main = document.getElementById('main');

main.addEventListener('click',function(event) {
  alert('I was clicked!');
});

const input = document.querySelector('input');

input.addEventListener('keydown',function(e) {
  console.log(e.which);
});

input.addEventListener('keydown', function(e) {
  if (e.which === 71) {
    return e.preventDefault();
  } else {
    console.log(e.which);
  }
});


// Bubbling
let divs = document.querySelectorAll('div');

function bubble(e) {
  console.log(this.firstChild.nodeValue.trim() + 'bubbled');
}

for (let i=0;i<divs.length;i++) {
  divs[i].addEventListener('click',bubble);
}

// Capturing


function capture(e) {
  console.log(this.firsChild.nodeValue.trim() + 'captured');
}

for (let i=0;i<divs.length;i++) {
  divs[i].addEventListener('click',capture,true);
}


// Stop Propagation

function bubble(e) {
  e.stopPropagation();
  
  console.log(this.firstChild.nodeValue.trim() + 'bubbled');
}

for (let i=0;i<divs.length;i++) {
  divs[i].addEventListener('click',bubble);
}


