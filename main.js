
 function check(){

   var question1= document.getElementById("quiz").question1.value;
   var question2= document.getElementById("quiz").question2.value;
   var question3= document.getElementById("quiz").question3.value;
   var correct = 0;

      if (question1 == 7){
        correct++;
      }
      if (question2 == "Lightning"){
        correct++;
      }
      if (question3 == "24"){
        correct++;
      }

      if (correct == 0){
        document.getElementById("0_correct").style.display = "block";
      }
      if (correct == 1){
        document.getElementById("1_correct").style.display = "block";
      }if (correct == 2){
        document.getElementById("2_correct").style.display = "block";
      }if (correct == 3){
        document.getElementById("3_correct").style.display = "block";
      }

  document.getElementById("answer_container").style.visibility = "visible";
  document.getElementById("correct_answers").innerHTML= "You got " + correct + " correct";

}
