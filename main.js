function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
  }
multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);
document.querySelector("html").addEventListener("click", function () {
    alert("别戳我，我怕疼。");
  });
//匿名函数function() or () =>
let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/hhhhh.png") {
    myImage.setAttribute("src", "images/屏幕截图(14).png");
  } else {
    myImage.setAttribute("src", "images/hhhhh.png");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    let myName = prompt("请输入你的名字。");
    localStorage.setItem("name", myName);
    myHeading.textContent = " HELLO," +myName;
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = " HELLO," + storedName;
  }
  function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = "Mozilla 酷毙了，" + myName;
    }
  }  
   myButton.onclick = function () {
    setUserName();
  }
  
  
  