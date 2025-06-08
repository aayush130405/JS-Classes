document.addEventListener('DOMContentLoaded',()=>{
    //grabbing elements
    const questionContainer=document.getElementById("question-container")
    const questionText=document.getElementById("question-text")
    const questionChoice=document.getElementById("choices-list")
    const nextButton=document.getElementById("next-btn")
    const resultContainer=document.getElementById("result-container")
    const Score=document.getElementById("score")
    const restartButton=document.getElementById("restart-btn")
    const startButton=document.getElementById("start-btn")

    const questions=[
        {
            question:"What is the capital of France?",
            choices:["Paris","Tokyo","London","Berlin"],
            answer:"Paris",
        },
        {
            question:"What is the capital of India?",
            choices:["Paris","Tokyo","Delhi","Chicago"],
            answer:"Delhi",
        },
        {
            question:"Which planet is known as red planet?",
            choices:["Jupiter","Mars","Earth","Venus"],
            answer:"Mars",
        },
    ]
    
    let currentQuestionIndex=0
    let score=0

    //when we press the start quiz btn
    startButton.addEventListener('click',()=>{
        startButton.classList.add("hidden")
        resultContainer.classList.add("hidden")
        questionContainer.classList.remove("hidden")
        showQuestion()
    })

    nextButton.addEventListener('click',()=>{
        currentQuestionIndex++
        if(currentQuestionIndex<questions.length){
            showQuestion()
            selectAnswer(choice)
        }else{
            resultContainer.classList.remove('hidden')
            nextButton.classList.add('hidden')
            questionContainer.classList.add('hidden')
            Score.textContent=`${score} out of 3`
        }
    })

    restartButton.addEventListener('click',()=>{
        currentQuestionIndex=0
        score=0
        resultContainer.classList.add('hidden')
        questionContainer.classList.remove('hidden')
        nextButton.classList.add('hidden')
        showQuestion()
    })

    function showQuestion(){
        const q=questions[currentQuestionIndex]
        questionText.textContent=q.question
        questionChoice.textContent=""
        q.choices.forEach(c=>{
            let choice=document.createElement('li')
            choice.textContent=c
            choice.addEventListener('click',()=>selectAnswer(choice))
            questionChoice.appendChild(choice)
        })
    }

    function selectAnswer(choice){       //function responsiable for checking if answer is correct and shwoing next button
        const correctAnswer=questions[currentQuestionIndex].answer
        if(choice.textContent==correctAnswer){
            score++
        }
        nextButton.classList.remove("hidden")
    }
})