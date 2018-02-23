$(document).ready(function() {  
  // debugger;
  var $progressButton = $('#progress-button');
  var $progressBar = $('.user-progress-bar');
  var $progressBarContainerWidth = $('.progress-bar-container').css('width');
  var $progressBarPercentage = parseInt($progressBarContainerWidth)/8;
  var $counter = $('#counter');
  var $plusOne = 1;
   $progressButton.on('click', function() {
    // debugger;
     // Incrementando la barra de progreso
     var $width = $progressBar.css('width');
    //  console.log($progressBar.css('width'));
     $currentWidth= parseInt($width);
    //  console.log($currentWidth);
     var $newWidth = $currentWidth + $progressBarPercentage;
     var $newProgress = $progressBar.css('width', $newWidth + 'px');
     // Incrementando el contador
     var $actualNumberOfQuestionsAnswered = $counter.text();
     console.log($actualNumberOfQuestionsAnswered);
     var $numberOfQuestionsAnswered = parseInt($actualNumberOfQuestionsAnswered);
     if ($numberOfQuestionsAnswered <= 7) {
      var $newNumberOfQuestionsAnswered = $numberOfQuestionsAnswered + $plusOne;
      $counter.text($newNumberOfQuestionsAnswered);
     }
     return $newProgress
   });
});
// /* var questions2 = [
//   {  'groupTwo' : ['Q2.1','Q2.2','Q2.3','Q2.4','Q2.5','Q2.6','Q2.7','Q2.8','Q2.9','Q2.10','Q2.11','Q2.12','Q2.13'],},
//   {'groupThree' : ['Q3.1','Q3.2','Q3.3','Q3.4','Q3.5','Q3.6','Q3.7','Q3.8','Q3.9','Q3.10','Q3.11','Q3.12','Q3.13','Q3.14','Q3.15'],}  
// ]; */
// debugger;
// var questions = {
//   'groupOne': [
//     '¿Sabes si debes pagar a Laboratoria por la formación que recibirías en caso de ser aceptada?',
//     '¿Sabes cuales son los pasos que siguen en el proceso de selección, posteriores a esta entrevista?', 
//     '¿Cuál es tu mayor grado de Educación?'],

//   'groupTwo': [
//     'Si estás estudiando o estudiaste alguna carreara en el pasado, cuéntanos qué y por qué lo elegiste. Si no estudias o estuiaste, cuéntanos por qué no.',
//      '¿Qué papel jugaría Laboratoria en tu vida académica? ¿La ves más como un complemento a tus estudios o un cambio de tu carrera profesional?',
//       '¿Cuáles son tus aspiraciones de carrera profesional y porqué? ¿Cómo llegarás a eso?',
//       'Cuéntanos de una situación difícil o retadora que hayas tenido con un equipo de trabajo (en el estudio o trabajo), cómo reaccionaste tú frente a la situación y si tomaste alguna acción para ayudar a resolver el problema',
//       'Basada en tu experiencia laboral o de estudios actual o pasada ¿Disfrutas más de las tareas que tienes que desempeñar en equipo o sola? ¿Por qué?'],
  
//   'groupThree': [
//     '¿Cómo describirías a tu hogar, brevemente?',
//      'Describe una decisión difícil que te haya tocado enfrentar y cómo lo resolviste. ¿Qué aprendiste de esto? ¿Qué aprendiste de ti misma?',
//       '¿Qué cosas te gustan y cuales no de tu vida actual? Ya sea trabajo, amistades, etc. ',
//       '¿Qué otra cosa te gustaría que sepamos de ti para considerar en tu postulación a Laboratoria?',
//       '¿Qué habilidades esperas aprender estudiando en Laboratoria y cómo contribuirían a tu carrera profesional?',
//       '¿En dónde y en qué rol te ves trabajando apenas te gradues? ',
//       'Si tuvieras una hora extra cada día qué harías con ella',
//       '¿De qué logro estás realmente orgullosa?',
//       '¿Qué superpoder querrías y por qué?']
// }

// console.log(Object.keys(questions).length);
// // recorriendo las propiedades del objeto :
// // determinando la longitus de las propiedades : 
// var propertiesObjectArray = Object.keys(questions);
// var propertiesObjectLength = Object.keys(questions).length;
// for (var i = 0; i < propertiesObjectLength; i++) {
//   debugger;
//   // devuelve el array de cada propiedad : 
//   console.log(questions[propertiesObjectArray[i]]);

// }






// //var  lengthGroupOne = questions.groupOne.length;

// // retornando los arrays del objeto : 


// // FUNCION RANDOM :
// /* function getPosition() {
//   return console.log(Math.trunc(Math.random() * (questions[propertiesObjectArray[1]].length - 0) + 0));
// } */

// // agregando laas preguntas escogidas :

// var chosenQuestions = [];


// function getQuestions() {
//   debugger;
//   // ((questions[propertiesObjectArray[1]].length -1) - 0) + 0;
//   //  questions[propertiesObjectArray[0]][temp]
//    for(var i = 0 ; i <= 3 ; i++ ) { 

//     if (questions[propertiesObjectArray[0]].length === 3) {
//       var index =Math.trunc(Math.random() * ((questions[propertiesObjectArray[0]].length) - 0) + 0);
//       if (questions[propertiesObjectArray[0]][index] !== chosenQuestions[0] && questions[propertiesObjectArray[0]][index] !== chosenQuestions[1] && questions[propertiesObjectArray[0]][index] !== chosenQuestions[2]) {
//         chosenQuestions.push(questions[propertiesObjectArray[0]][index]);
//       }

//       if (chosenQuestions.length !== 3) {
//         getQuestions();
//       };
//     }
//   }  
//  // var index = Math.trunc(Math.random() * ((questions[propertiesObjectArray[0]].length) - 0) + 0);

//   return console.log(chosenQuestions);
//  //return console.log(index)
// }

// getQuestions();

// //     $('button').on('click', function(){
// //     location.reload();
// //   });
