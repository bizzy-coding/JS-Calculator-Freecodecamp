const calculator = document.querySelector(".calculator");
const keys = document.querySelector(".calculator__keys");
const display = document.querySelector(".calculator__display")

keys.addEventListener("click", (e) => {
//   if (e.target.matches("button")) {
//     console.log("itsa button");
//   }

  const key = e.target;
  const action = key.dataset.action;

  if (!action) {
    console.log("number key!");
    if(display.innerText == 0 ) {
        display.innerText = key.innerText;
    } else if (display.innerText >= 1 ) {
        console.log('bigger than 1')
        display.innerText = display.innerText + key.innerText;
    }
    
  }

  if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
  ) {
    console.log('operator key!')
  }

  if (action === 'decimal') {
    console.log('decimal key!')
  }
  
  if (action === 'clear') {
    console.log('clear key!')
  }
  
  if (action === 'calculate') {
    console.log('equal key!')
  }
});
