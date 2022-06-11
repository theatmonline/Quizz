
let questions = [
    {
        id: 1,
        question: "Which is greater than 4?",
        answer: "5",
        options: [
            

            "5" ,
            "-7",
            "-3",
            "1"
            
            
        ]
    },
    {
        id: 2,
        question: "Which is the smallest?",
        answer: "-1",
        options: [
            "-1/2",
            "3",
            "2",
            "None of these"
        ]
    },
    {
        id: 3,
        question: "Combine terms: 12a + 26b -4b – 16a",
        answer: "-4a + 22b",
        options: [
            "22b + 4a",
            "5",
            "4a + 22b",
            "-4a + 22b"
        ]
    },
    {
        id: 4,
        question: "Simplify: (4 – 5) – (13 – 18 + 2)",
        answer: "2",
        options: [
            "2",
            "4",
            "7",
            "-2"
        ]
    },
    {
        id: 5,
        question: "What is |-26|?",
        answer: "26",
        options: [
            "-26",
            "26",
            "-6",
            "-2"
        ]
    },
    {
        id: 6,
        question: "Multiply: (x – 4)(x + 5)",
        answer: " x2 + 5x - 20",
        options: [
            "x2 - 4x - 20",
            "x2 - x - 20,",
            "x2 + 5x - 20",
            "x2 + x - 20"
        ]
    },
    {
        id: 7,
        question: "What was the first political party in Nigeria?",
        answer: "Nigerian National Democratic Party (NNDP)",
        options: [
            "People's Democratic Party (PDP)",
            "All Progressives Congress (APC)",
            "Nigerian National Democratic Party (NNDP)",
            "New Nigeria People's Party"
        ]
    },
    {
        id: 8,
        question: "What is the name of the developer of this Quiz application?",
        answer: "Taye Matthew Abdulahi",
        options: [
            "Kehinde Alabi",
            "Boluwatife Oluwagbemiga",
            "Oluwadamilola Agbeyomi",
            "Taye Matthew Abdulahi"
        ]
    },
    {
        id: 9,
        question: "Who is the current Nigerian Deputy Senate president?",
        answer: "Obarisi Ovie Omo-Agege",
        options: [
            "Ahmed Lawan",
            "Teslim Folarin",
            "Smart Adeyemi",
            "Obarisi Ovie Omo-Agege"
        ]
    },
    {
        id: 10,
        question: "When did Nigerian Golden eaglets win the world under-17 FIFA world cup",
        answer: "1985, 1993, 2007, 2013",
        options: [
            "1985, 1993, 2007, 2014",
            "1985, 1993, 2007, 2013",
            "1986, 1993, 2007, 2013",
            "1985, 1993, 2008, 2013"
        ]
    },
    
];

let question_count = 0;
let points = 0;
window.onload = function(){
    show(question_count);
};

function show(count){
    let question = document.getElementById("questions");
    let[first, second, third, fourth] = questions[count].options;

    question.innerHTML = `<h2>Q${count + 1}. ${questions[count].question}</h2> 
    <ul class= "option_group">
    <li class="option">${first}</li> 
    <li class="option">${second}</li>
    <li class="option">${third}</li
    ><li class="option">${fourth}</li>
    </ul>`;
    toggleActive();
     
}

function toggleActive(){
    let option = document.querySelectorAll("li.option");
    for(let i=0; i < option.length; i++){
        option[i].onclick = function(){
            for(let i=0; i < option.length; i++){
                if(option[i].classList.contains("active")){
                    option[i].classList.remove("active");
                };
            };
            option[i].classList.add("active");
        }
    }
}

function next(){

    if(question_count == questions.length -1){
        location.href = "final.html";
    }
    console.log(question_count);


let user_answer = document.querySelector("li.option.active").innerHTML;

if (user_answer == questions[question_count].answer){
    points +=10;
    sessionStorage.setItem("points",points);
}
console.log(points);


question_count+=1;
show(question_count);
}