let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "image/OIP.jfif") {
    myImage.setAttribute("src", "image/OIP1.jpg");
  } else {
    myImage.setAttribute("src", "image/OIP.jfif");
  }
};

let mybutton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("请输入你的名字");
    localStorage.setItem("name", myName);
    myHeading.textContent = "web酷毙了 " + myName;

}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "web酷毙了 " + storedName;
} 

mybutton.onclick = function () {
    setUserName();

};