

function getQuestions() {
  fetch("https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple")
.then(bob => bob.json())
.then(questionsData => createQuestions(questionsData))
}
function createQuestions(listOfQuestions){
  listOfQuestions.results.forEach(question => {
    console.log(question.question)
  })
}
getQuestions();


/* Function to retrieve the questions, formats them and passes them to the DOM 
*/
  const fetchedQuestions = fetchData(`https://opentdb.com/api.php?amount=10&category=${categoryId}&type=multiple`);
    fetchedQuestions.then((data) => {
        questions = data.results.map(fetchedQuestion => {
            const formattedQuestion = {
                question : fetchedQuestion.question,
            };

            formattedQuestion.answer = Math.floor(Math.random() * 3 ) + 1;
            const answerChoices = [ ... fetchedQuestion.incorrect_answers];
            answerChoices.splice(formattedQuestion.answer -1, 0, fetchedQuestion.correct_answer);

            answerChoices.forEach((choice, index) => {
                formattedQuestion['choice' + (index + 1)] = choice;
            });

            return formattedQuestion;
        });

        startGame();
        }).catch(err => {
            errorMessageRef.innerHTML = `Oops it looks like you shouldn't get any smarter. Please refresh the page to try again.`;
            console.error(err);
        });


/**
 * Sets question counter and score to 0 
 * Defines the questions and get new question
*/

const startGame = () => {
    questionCounter = 0;
    score = 0;
    scoreRef.innerText = score;
    availableQuestions = [... questions];
    getNewQuestion();
    loaderRef.classList.add('hide');
    gameRef.classList.remove('hide');
};
       


/* ==========================Dropdown menu button for selecting difficutly level =================================*/
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

/* ========================== End Dropdown menu button for selecting difficutly level =================================*/