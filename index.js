question1 = [
  {
    question: "What is the capital of India?",
    m1: "Banglore",
    m2: "Delhi",
    m3: "New Delhi",
    m4: "Hyderabad"
  },
  {
    question: "What is the scientific name of a butterfly?",
    m1: "Formicidae",
    m2: "Rhopalocera",
    m3: "Coleoptera",
    m4: "Apis"
  },
  {
    question: "How hot is the surface of the sun?",
    m1: "69,300 K",
    m2: "1,223 K",
    m3: "12,130 K",
    m4: "5,778 K"
  },
  {
    question: "What is 70 degrees Fahrenheit in Celsius?",
    m1: "21.1111",
    m2: "20",
    m3: "18.8889",
    m4: "158"
  },
  {
    question: "The first woman to climb mount Everest was  ",
    m1: "Marie Jose perec",
    m2: "Florence Griffith Joyner",
    m3: "Junko Tabei",
    m4: "Jackie Joyner Kersee"
  },
  {
    question: "Which among the following states produces 60% Salt of India?",
    m1: "Rajasthan",
    m2: "Odisha",
    m3: "Gujarat",
    m4: "Maharashtra"
  },
  {
    question: "India first took part in the Olympic Games in the year",
    m1: "1920",
    m2: "1928",
    m3: "1972",
    m4: "1974"
  },
  {
    question: "The Acid in gastric juice is",
    m1: "Acetic acid",
    m2: "Nitric acid",
    m3: "Hydrochloric acid",
    m4: "Sulphuric acid"
  },
  {
    question: "Which among the following planets is smaller in size than the Earth?",
    m1: "Neptune",
    m2: "Venus",
    m3: "Saturn",
    m4: "Uranus"
  },
  {
    question: "What is the length of each stump in cricket?",
    m1: "28 inches",
    m2: "32 inches",
    m3: "2 ft",
    m4: "2 ½ ft"
  }
]

question2 = [
  {
    question: "The tree which sends down roots from its branches to the soil is known as:",
    m1: "Oak",
    m2: "Palm",
    m3: "Banyan",
    m4: "Palm"
  },
  {
    question: "Electric bulb filament is made of",
    m1: "Copper",
    m2: "Aluminum",
    m3: "Lead",
    m4: "Tungsten"
  },
  {
    question: "Chlorophyll is a naturally occurring chelate compound in which central metal is",
    m1: "Copper",
    m2: "Magnesium",
    m3: "Iron",
    m4: "Calcium"
  },
  {
    question: "Heavy Water is",
    m1: "Deuterium oxide",
    m2: "PH7",
    m3: "Rain water",
    m4: "Tritium oxide"
  },
  {
    question: "Light year is a unit of",
    m1: "Time",
    m2: "Distance",
    m3: "Light",
    m4: "Intensity of light"
  },
  {
    question: "Light from the Sun reaches us in nearly",
    m1: "2 minutes",
    m2: "4 minutes",
    m3: "8 minutes",
    m4: "16 minutes"
  },
  {
    question: "Who invented the ballpoint pen?",
    m1: "Biro Brothers",
    m2: "Waterman Brothers",
    m3: "Bicc Brothers",
    m4: "Wright Brothers"
  },
  {
    question: "When is the World Population Day observed?",
    m1: "31 May",
    m2: "4 October",
    m3: "10 December",
    m4: "11 July"
  },
  {
    question: "Who was known as Iron man of India?",
    m1: "Govind Ballabh Pant",
    m2: "Jawaharlal Nehru",
    m3: "Subhash Chandra Bose",
    m4: "Sardar Vallabhbhai Patel"
  },
  {
    question: "Which country launched the world's first nationwise 5G mobile network?",
    m1: "Japan",
    m2: "Malaysia",
    m3: "South Korea",
    m4: "China"
  }
]


//-----------------------------------------------------------------------------//
playing = false
appeared_questions = []
score = 0
count = 0
question_set = [question1,question2]
q_set = Math.floor(Math.random()*question_set.length)
choosed_q_set = question_set[q_set]

correct_answers = ["New Delhi","Rhopalocera","5,778 K","21.1111","Junko Tabei","Gujarat","1920","hydrochloric acid","Venus","28 inches","Banyan","Tungsten","Magnesium","Deuterium oxide","Distance","8 minutes","Biro Brothers","11 July","Sardar Vallabhbhai Patel","South Korea"]
document.querySelector(".start").onclick = function(){
  if(playing == true){
    location.reload()
  }else{
    playing = true
    document.querySelector(".question").style.height = "auto"
    document.querySelector(".start").innerHTML = "Reset Game"
    genrandom()
  }
}

//-----------------------------------------------------------------------------//
for(i=1;i<5;i++){
  document.querySelector('.mcq'+i).onclick = function(){
    if(correct_answers.includes(this.innerHTML)){
      document.querySelector(".correct_box").style.display = "block"
      setTimeout(hide_correct,300)
      score = score + 1
    }
    var option = this. getAttribute('class')
    colorOption(option)
    setTimeout(getToOriginal, 300);

    function getToOriginal(){
      document.querySelector("."+option).style.backgroundColor = "white"
      document.querySelector("."+option).style.color = "black"
    }

    document.querySelector("#score").innerHTML = score
    count = count + 1
    if(count == (choosed_q_set.length)){
      gameOver();
    }
    setTimeout(genrandom, 500);
  }
}
//---------------------------------------------------------------------------- //

function genrandom(){

  ran_q = Math.floor(Math.random()*(choosed_q_set.length))
  if(appeared_questions.includes(ran_q)){
    genrandom();
  }else{
    appeared_questions.push(ran_q)
  }
  document.querySelector(".question").innerHTML = choosed_q_set[ran_q].question
  document.querySelector(".mcq1").innerHTML = choosed_q_set[ran_q].m1
  document.querySelector(".mcq2").innerHTML = choosed_q_set[ran_q].m2
  document.querySelector(".mcq3").innerHTML = choosed_q_set[ran_q].m3
  document.querySelector(".mcq4").innerHTML = choosed_q_set[ran_q].m4
}

//----------------------------------------------------------------------//

function gameOver(){
  document.querySelector(".question").innerHTML = ""
  document.querySelector(".mcq1").innerHTML = ""
  document.querySelector(".mcq2").innerHTML = ""
  document.querySelector(".mcq3").innerHTML = ""
  document.querySelector(".mcq4").innerHTML = ""
  document.querySelector(".question").style.height = "100px"
  if(score >= 8 ){
    document.querySelector(".gameOver").style.backgroundColor = "#5FD068"
  }
  else if(score >= 3 && score < 8){
    document.querySelector(".gameOver").style.backgroundColor = "#F24C4C"
  }else{
    document.querySelector(".gameOver").style.backgroundColor = "red"
  }
  document.querySelector(".gameOver").style.display = "block"
  document.querySelector("#score-game-over").innerHTML = score
}

//----------------------------------------------------------------------//


function colorOption(option){
  // console.log(option);
  document.querySelector("."+option).style.backgroundColor = "#413F42"
  document.querySelector("."+option).style.color = "white"
}

function hide_correct(){
  document.querySelector(".correct_box").style.display = "none"
}
