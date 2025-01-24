const enableBtn = document.getElementById("bt");
const divContainer = document.getElementById("divContainer");
const btn = document.getElementById("btn");


// 1. Function to Calculate the Area of a Rectangle
function calculateRectangleArea(length, width) {
  let area = length * width;
  return area;
}

// Testing the area calculation function
console.log("Area of rectangle: " + calculateRectangleArea(5, 10));

// 2. Function to Demonstrate Scope (Local vs Global)
let globalVariable = "Global variable";

function demonstrateScope() {
  let localVariable = "I am a local variable"; 
  console.log(globalVariable); 
  console.log(localVariable);  
}

demonstrateScope();

// 3. Function to Toggle CSS Class for Animation (Hide/Show Modal or Element)
function toggleAnimation() {
  let element = document.getElementById("btn");
  
  element.classList.toggle("hidden");
}

document.getElementById("btn").addEventListener("click", toggleAnimation);

divContainer.animate(
  [{
    transform: "translateX(0)",
    backgroundColor: "green"

  },
  {
    transform: "translateX(100px)",
  }
  ],
  {
    duration: 2000,
    fill: "forwards"
  }
);
bt.addEventListener("click", () => {
  const myP = document.getElementById("myP"); 
  myP.style.backgroundColor = "yellow"; 
});
btn.addEventListener("click", () => {
  const body = document.querySelector("body"); 
  body.style.backgroundImage = "url(images/shelf.webp)"; 
  body.style.backgroundAttachment = "fixed";
  body.style.backgroundRepeat = "nore-repeat";
  body.style.backgroundSize = "cover";
  body.style.backgroundPosition = "center";
});
