function toggleDiv(buttonId, divId) {
  const button = document.getElementById(buttonId);
  const myDiv = document.getElementById(divId);

  // Toggle the display property
  if (myDiv.style.display === "none" || myDiv.style.display === "") {
    hideAllDivs();

    myDiv.style.display = "block";

    button.innerHTML = '<img src="./assets/images/icon-minus.svg" alt="Show Div">';
  } else {
    myDiv.style.display = "none";

    button.innerHTML = '<img src="./assets/images/icon-plus.svg" alt="Hide Div">';
  }
}

function hideAllDivs() {
  // Hide all divs with class 'hiddenDiv'
  const allDivs = document.getElementsByClassName("hiddenDiv");
  for (var i = 0; i < allDivs.length; i++) {
    allDivs[i].style.display = "none";
  }
}