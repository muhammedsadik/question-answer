const invalidEntry = "Invalid Entry, Try again.";
const exitSurvey = "You exited the survey.";
const firstNameMsg = "İptal: Exist\n\nEnter Your Name:"
const lastNameMsg = "İptal: Exist\n\nEnter Your Last Name:"

let answer = [];
let idCounter = 1;
let userName = {};

const questions = [
  "What is your favorite color?",
  "What is your favorite season?",
  "Which country would you like to visit?",
  "How do you usually spend your weekends?",
  "What kind of music do you enjoy the most?",
];

function answerValid(item) {
  let ans = prompt(item);

  if (ans === null) {
    return false;
  }

  ans = ans.trim();

  if (!ans) {
    alert(invalidEntry);
    return answerValid(item);
  }

  return ans;
}

function survey(firstName, lastName) {
  let answers = [];

  for (const item of questions) {
    const value = answerValid(item);

    if (value === false) {
      return false;
    }
    answers.push({ question: `${item}`, answer: `${value}` });
  }

  answer = {
    firstName,
    lastName,
    survey: [answers]
  };

  localStorage.survey = JSON.stringify(answer);

}

function nameGenerator(msg) {
  let value = prompt(msg);

  if (value === null) {
    return false
  }

  value = value.trim();

  if (!value) {
    alert(invalidEntry);
    return nameGenerator(msg);
  }

  return value;
}

function mainMenu() {

  const firstName = nameGenerator(firstNameMsg);
  if (firstName === false) {
    alert(exitSurvey);
    return;
  }

  const lastName = nameGenerator(lastNameMsg);
  if (lastName === false) {
    alert(exitSurvey);
    return;
  }

  const result = survey(firstName, lastName);
  if (result === false) {
    alert(exitSurvey);
    return;
  }

}

mainMenu();