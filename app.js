
/*
function getQuestions(amountUserPick){
  fetch(`https://opentdb.com/api.php?amount=${amountUserPick}`)
.then(bob => bob.json())
.then(questionsData => createQuestions(questionsData))
}
function createQuestions(listOfQuestions){
  listOfQuestions.results.forEach(question => {
    console.log(question.question)
  })
}
getQuestions(100);
*/

/*Dropdown menu button for selecting difficutly level*/
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}