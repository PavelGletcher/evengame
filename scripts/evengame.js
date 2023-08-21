//Рандомные числа
let randomNumberOne = Math.round(Math.random() * 100);
let randomNumberTwo = Math.round(Math.random() * 100);
let randomNumberThree = Math.round(Math.random() * 100);
//Присвоение переменных к каждому рандомному числу
let isEvenOne; let isEvenTwo; let isEvenThree;
//Сверка рандомных чисел ==> перевод в False/true
if (randomNumberOne % 2 == 0) { isEvenOne = true; } else { isEvenOne = false; };
if (randomNumberTwo % 2 == 0) { isEvenTwo = true; } else { isEvenTwo = false; };
if (randomNumberThree % 2 == 0) { isEvenThree = true; } else { isEvenThree = false; };
// Создание наполняемых переменных
let userAnswerOne; // ответ в первом раунде;
let userAnswerTwo; // ответ во втором раунде;
let userAnswerThree; // ответ в третьем раунде;
// Первый раунд
function roundOne (){
  document.querySelector('.even--game--items__randomitems').innerHTML = randomNumberOne;
  userAnswerOne = document.querySelector('.answer');
  userAnswerOne.addEventListener('keydown', function (e) {
    if (e.keyCode == 13) {
      userAnswerOne = this.value;
      isUserAnswer();
      if (userAnswerOne == isEvenOne) {
        document.querySelector('.even--game--items__is').innerHTML = "1/3 верно!";
        roundTwo ();
      } else { document.querySelector('.even--game--items__is').innerHTML = "✖  Ответ неверный!  ✖ <br> Попробуйте еще раз";};
    };
  }); 
};
roundOne ();
function roundTwo (){
  document.querySelector('.even--game--items__randomitems').innerHTML = randomNumberTwo;
  userAnswerTwo = document.querySelector('.answer');
  userAnswerTwo.addEventListener('keydown', function (e) {
    if (e.keyCode == 13) {
      userAnswerTwo = this.value;
      isUserAnswer();
      if (userAnswerTwo == isEvenTwo) {
        document.querySelector('.even--game--items__is').innerHTML = "2/3 верно!";
        document.querySelector('.even--game--items__randomitems').innerHTML = randomNumberThree;
        roundThree ();
      } else { document.querySelector('.even--game--items__is').innerHTML = "✖  Ответ неверный!  ✖ <br> Попробуйте еще раз";};
    };
  });  
};
function roundThree (){
  document.querySelector('.even--game--items__randomitems').innerHTML = randomNumberThree;
  userAnswerThree = document.querySelector('.answer');
  userAnswerThree.addEventListener('keydown', function (e) {
    if (e.keyCode == 13) {
      userAnswerThree = this.value;
      isUserAnswer();
      if (userAnswerThree == isEvenThree) {
        document.querySelector('.even--game--items__is').innerHTML = "ВЫ ПОБЕДИЛИ!! Давайте еще раз :)";
        document.querySelector('.even--game--items__randomitems').innerHTML = "- - - - -";
      } else { document.querySelector('.even--game--items__is').innerHTML = "✖  Ответ неверный!  ✖ <br> Попробуйте еще раз";};
    };
  });  
};
//Возможные ответы
function isUserAnswer (){
  if (userAnswerOne == 'Да') { userAnswerOne = true; };
  if (userAnswerOne == 'да') { userAnswerOne = true; };
  if (userAnswerOne == 'Yes') { userAnswerOne = true; };
  if (userAnswerOne == 'yes') { userAnswerOne = true; };
  if (userAnswerOne == 'lf') { userAnswerOne = true; };
  if (userAnswerOne == 'Lf') { userAnswerOne = true; };
  if (userAnswerOne == 'Нет') { userAnswerOne = false; };
  if (userAnswerOne == 'нет') { userAnswerOne = false; };
  if (userAnswerOne == 'No') { userAnswerOne = false; };
  if (userAnswerOne == 'no') { userAnswerOne = false; };
  if (userAnswerOne == 'ytn') { userAnswerOne = false; };
  if (userAnswerOne == 'Ytn') { userAnswerOne = false; };
  
  if (userAnswerTwo == 'Да') { userAnswerTwo = true; };
  if (userAnswerTwo == 'да') { userAnswerTwo = true; };
  if (userAnswerTwo == 'Yes') { userAnswerTwo = true; };
  if (userAnswerTwo == 'yes') { userAnswerTwo = true; };
  if (userAnswerTwo == 'lf') { userAnswerTwo = true; };
  if (userAnswerTwo == 'Lf') { userAnswerTwo = true; };
  if (userAnswerTwo == 'Нет') { userAnswerTwo = false; };
  if (userAnswerTwo == 'нет') { userAnswerTwo = false; };
  if (userAnswerTwo == 'No') { userAnswerTwo = false; };
  if (userAnswerTwo == 'no') { userAnswerTwo = false; };
  if (userAnswerTwo == 'ytn') { userAnswerTwo = false; };
  if (userAnswerTwo == 'Ytn') { userAnswerTwo = false; };

  if (userAnswerThree == 'Да') { userAnswerThree = true; };
  if (userAnswerThree == 'да') { userAnswerThree = true; };
  if (userAnswerThree == 'Yes') { userAnswerThree = true; };
  if (userAnswerThree == 'yes') { userAnswerThree = true; };
  if (userAnswerThree == 'lf') { userAnswerThree = true; };
  if (userAnswerThree == 'Lf') { userAnswerThree = true; };
  if (userAnswerThree == 'Нет') { userAnswerThree = false; };
  if (userAnswerThree == 'нет') { userAnswerThree = false; };
  if (userAnswerThree == 'No') { userAnswerThree = false; };
  if (userAnswerThree == 'no') { userAnswerThree = false; };
  if (userAnswerThree == 'ytn') { userAnswerThree = false; };
  if (userAnswerThree == 'Ytn') { userAnswerThree = false; };
};











