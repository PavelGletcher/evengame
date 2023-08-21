let randomNumberOneOneRound = Math.round(Math.random() * 100);
let randomNumberTwoOneRound = Math.round(Math.random() * 100);
let userAnswerOne; let numSumOne = randomNumberOneOneRound + randomNumberTwoOneRound; let isOne;

let randomNumberOneTwoRound = Math.round(Math.random() * 100);
let randomNumberTwoTwoRound = Math.round(Math.random() * 100);
let userAnswerTwo; let numSumTwo = randomNumberOneTwoRound + randomNumberTwoTwoRound; let isTwo;

let randomNumberOneThreeRound = Math.round(Math.random() * 100);
let randomNumberTwoThreeRound = Math.round(Math.random() * 100);
let userAnswerThree; let numSumThree = randomNumberOneThreeRound + randomNumberTwoThreeRound; let isThree;

function comparison() {
  if (userAnswerOne == numSumOne) { isOne = true } else { isOne = false };
  if (userAnswerTwo == numSumTwo) { isTwo = true } else { isTwo = false };
  if (userAnswerThree == numSumThree) { isThree = true } else { isThree = false };
}

console.log('Число 1: ' + numSumOne);
console.log('Число 2: ' + numSumTwo);
console.log('Число 3: ' + numSumThree);

function roundOne() {
  document.querySelector('.numone').innerHTML = randomNumberOneOneRound;
  document.querySelector('.numtwo').innerHTML = randomNumberTwoOneRound;
  userAnswerOne = document.querySelector('.answer');
  userAnswerOne.addEventListener('keydown', function (e) {
    if (e.keyCode == 13) {
      userAnswerOne = this.value; console.log('Ввел число: ' + userAnswerOne);
      comparison();
      if (isOne == true) {
        document.querySelector('.question--comment').innerHTML = 'Верно! 1/3';
        roundTwo();
      } else {document.querySelector('.question--comment').innerHTML = 'Ошибка! Ответ: ' + numSumOne + ' Попробуйте еще раз.';};
    };
  });
};
roundOne();

function roundTwo() {
  document.querySelector('.numone').innerHTML = randomNumberOneTwoRound;
  document.querySelector('.numtwo').innerHTML = randomNumberTwoTwoRound;
  userAnswerTwo = document.querySelector('.answer');
  userAnswerTwo.addEventListener('keydown', function (e) {
    if (e.keyCode == 13) {
      userAnswerTwo = this.value; console.log('Ввел число: ' + userAnswerTwo);
      comparison();
      if (isTwo == true) {
        document.querySelector('.question--comment').innerHTML = 'Верно! 2/3';
        roundThree();
      } else {document.querySelector('.question--comment').innerHTML = 'Ошибка! Ответ: ' + numSumTwo + ' Попробуйте еще раз.';};
    };
  });
};

function roundThree() {
  document.querySelector('.numone').innerHTML = randomNumberOneThreeRound;
  document.querySelector('.numtwo').innerHTML = randomNumberTwoThreeRound;
  userAnswerThree = document.querySelector('.answer');
  userAnswerThree.addEventListener('keydown', function (e) {
    if (e.keyCode == 13) {
      userAnswerThree = this.value; console.log('Ввел число: ' + userAnswerThree);
      comparison();
      if (isThree == true) {
        document.querySelector('.numtwo').innerHTML = "- - - - -";
        document.querySelector('.numone').innerHTML = "- - - - -";
        document.querySelector('.question--comment').innerHTML = 'Победа! Давайте еще раз :)';
        //setTimeout(() => window.location.href = "sumhome.html", 3000);
      } else {document.querySelector('.question--comment').innerHTML = 'Ошибка! Ответ: ' + numSumThree + ' Попробуйте еще раз.';};
    };
  });
};