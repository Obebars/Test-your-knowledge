function check(){

   var question1= document.getElementById("quiz").question1.value;
   var question2= document.getElementById("quiz").question2.value;
   var question3= document.getElementById("quiz").question3.value;
   var correct = 0;

      if (question1 == 7){
        correct++;
      }else{
        document.getElementById("quiz").question1.style.color = "red";
        document.getElementById("quiz").question1.value = 7;
      }
      if (question2 == "Lightning"){
        correct++;
      }else{
        document.getElementById("quiz").question2.value= "Lightning";
      }
      if (question3 == "24"){
        correct++;
      }else{
        document.getElementById("quiz").question3.value= 24;
      }

      if (correct == 0){
        document.getElementById("0_correct").style.display = "block";
        document.getElementById("1_correct").style.display = "none";
        document.getElementById("2_correct").style.display = "none";
        document.getElementById("3_correct").style.display = "none";
      }
      if (correct == 1){
        document.getElementById("1_correct").style.display = "block";
        document.getElementById("0_correct").style.display = "none";
        document.getElementById("2_correct").style.display = "none";
        document.getElementById("3_correct").style.display = "none";
      }if (correct == 2){
        document.getElementById("2_correct").style.display = "block";
        document.getElementById("0_correct").style.display = "none";
        document.getElementById("1_correct").style.display = "none";
        document.getElementById("3_correct").style.display = "none";
      }if (correct == 3){
        document.getElementById("3_correct").style.display = "block";
        document.getElementById("0_correct").style.display = "none";
        document.getElementById("1_correct").style.display = "none";
        document.getElementById("2_correct").style.display = "none";
      }

  document.getElementById("answer_container").style.visibility = "visible";
  document.getElementById("correct_answers").innerHTML= "You got " + correct + " correct";

}
