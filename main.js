let counter = document.getElementById("display");

function appendToDisplay(value) {
  if (counter.innerText === "0") {
    counter.innerText = value;
  } else {
    counter.innerText += value;
  }
}

function clearDisplay() {
  counter.innerText = "0";
}

function calculateResult() {
  try {
    counter.innerText = eval(counter.innerText);
  } catch (error) {
    counter.innerText = "eroo";
  }
}




// libray css 
AOS.init();