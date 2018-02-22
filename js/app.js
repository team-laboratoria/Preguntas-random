// $(document).ready(function() {
//   debugger;
//   var array = ['a', 'b', 'c'];
//   var array2 = [];
 
//     for (var i = 0; i < array.length;i++) {
//       debugger;
//       var random = Math.trunc(Math.random()* (array.length-0)+0);
//       if(array[random] !== array2[i] && array[random] !== array2[i+1] && array2[random] !== array[i+2]) {
//       array2.push(array[random]);
//       getPosition();
//       }
//     };

//   function getPosition() {
//     console.log(array2);
//       for (var i = 0; i < array2.length;i++) {
//         debugger;
//         // if( array2[i] === undefined) {
//         //   console.log(array[random]);
//         // }
        
//         if(array2.length <= 3 && array2[i] !== array2[i+1] && array2[i] !== array2[i+2]) {
//          console.log(array[random]);
//         } else {
//           number = i; 
//           array2.indexOf(number);
//           array2.slice(array2[i], 1);
//           getPosition();
//         }
//       }
//   }
//     $('button').on('click', function(){
//     location.reload();
//   });
//   // var random = parseInt(Math.random()*10);
//   // console.log(random);
//   // if(random < array.length) {
//   //   console.log(array[random]);
//   // } else {
//   //   console.log('Opps!');
//   // }
// });