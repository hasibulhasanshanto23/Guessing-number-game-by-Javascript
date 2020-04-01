document.getElementById("gameform").addEventListener("submit", function (e) {

  document.getElementById("loading").style.display = "block";
  document.getElementById("message").style.display = 'none';

  setTimeout(guessing, 2000);


  e.preventDefault();

});


function guessing() {

  var x = Math.floor(Math.random() * 10) + 1;
  console.log(x);


  const user = document.getElementById("username");
  const guess = document.getElementById("guessnumber");



  if (x == guess.value) {
    document.getElementById("congo").innerHTML = "Win!"
    document.getElementById("name").innerHTML = user.value;
    //document.getElementById("thenum").innerHTML = "The Number Was"
    //document.getElementById("answer").innerHTML= x;



    document.getElementById("loading").style.display = "none";
    document.getElementById("message").style.display = 'block';
    document.getElementById("invalidmsg").style.display='none';
    document.getElementById("but").style.display="none"
    document.getElementById("congo").style.display="block"
    document.getElementById("name").style.display="inline"
    document.getElementById("sorry").style.display="none"
    document.getElementById("sorryname").style.display="none"
    document.getElementById("thenum").style.display="block";
    document.getElementById("answer").innerHTML=x;
    



  }

   else if (guess.value >= 10 || 0>=guess.value) {
    document.getElementById("invalidmsg").innerHTML = "Number must be less than 10 and positive";

    document.getElementById("loading").style.display = "none";
    document.getElementById("message").style.display = 'block';
    document.getElementById("congo").style.display="none";
    document.getElementById("thenum").style.display='none';
    document.getElementById("but").style.display="none"
    document.getElementById("sorry").style.display="none";
    document.getElementById("invalidmsg").style.display="block";
    document.getElementById("sorryname").style.display="none";
    document.getElementById("name").style.display="none";

  }

  else if(x!=guess.value){

    document.getElementById("sorry").innerHTML="Sorry! Wrong Guess"
    document.getElementById("sorryname").innerHTML = user.value;
    document.getElementById("modal").innerHTML=x;


    document.getElementById("loading").style.display = "none";
    document.getElementById("message").style.display = 'block';
    document.getElementById("congo").style.display="none";
    document.getElementById("thenum").style.display='none';
    document.getElementById("invalidmsg").style.display="none";
    document.getElementById("but").style.display="block"
    document.getElementById("sorry").style.display="block"
    document.getElementById("sorryname").style.display="inline";
    



  }

}
