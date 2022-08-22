  const quizData = [
{
  question: "Who is Arantis jr",
  a: "stupid guy",
  b: "cool guy",
  c: "inteligent boy",
  d: "girls choice",
  correct : "b"
},
{
  question: "my best food",
  a: "rice",
  b: "eru",
  c: "patatoes",
  d: "chicken",
  correct: "d",
} ,
{
  question: "my best sport",
  a: "football",
  b: "handball",
  c: "volleyball",
  d: "basketball",
  correct : "a",
},
{
  question: "my mentor",
  a : "einstien",
  b: "newton",
  c: "pascal",
  d: "pathogorias",
  correct : "a",
},
{
  question: "best color",
  a: "blue",
  b: "white",
  c: "red",
  d: "yelow",
  correct: "b",
},
  ];
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  const answerElem = document.querySelectorAll(".answerElem");
  const Submitbuttn = document.getElementById("submit");
  const questionEl = document.getElementById("questionEl");
  currentQuiz = 0;
  loadQuiz();
  function loadQuiz() {

    const currentQuizData =  quizData[currentQuiz]
    a_text.innerHTML =  currentQuizData.a;
    b_text.innerHTML =  currentQuizData.b;
    c_text.innerHTML =  currentQuizData.c;
    d_text.innerHTML =  currentQuizData.d;
    questionEl.innerHTML =  currentQuizData.question;
  }
    function getselected(){
      answerElem.forEach((ans) =>
       )

    }



  Submitbuttn.addEventListener("click" ,() =>
  {
    currentQuiz++;
    loadQuiz()
  }
  )