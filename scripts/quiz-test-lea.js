const questions = [
  {
    id: 1100,
    question: "Hvor mange planeter er det i solsystemet?",
    options: [
      {
        id: 1101,
        option: "4 planeter",
        right: false,
      },
      {
        id: 1102,
        option: "6 planeter",
        right: false,
      },
      {
        id: 1103,
        option: "8 planeter",
        right: true,
      },
    ],
  },
  {
    id: 1200,
    question: "Hvilken planet kan mennesker bo på?",
    options: [
      {
        id: 1201,
        option: "Jorden",
        right: true,
      },
      {
        id: 1202,
        option: "Neptun",
        right: false,
      },
      {
        id: 1203,
        option: "Mars",
        right: false,
      },
    ],
  },
  {
    id: 1300,
    question: "Hvilken plasering har Mars i solsystmet?",
    options: [
      {
        id: 1301,
        option: "Plasering 3",
        right: false,
      },
      {
        id: 1302,
        option: "Plasering 4",
        right: true,
      },
      {
        id: 1303,
        option: "Plasering 5",
        right: false,
      },
    ],
  },
]

const printQuiz = document.querySelector(".print-quiz")

let quizHtmlContetn = ""

questions.forEach((question) => {
  let optionContent = ""
  question.options.forEach((option) => {
    optionContent += `
<button id="${option.id}" onclick="clickedBtn(this.id)">${option.option}</button>

`
  })

  quizHtmlContetn += `
    <article>
    <p>${question.question}</p>
    <div>
${optionContent}
    </div>
    </article>
    `
})

printQuiz.innerHTML = quizHtmlContetn

const clickedBtn = (id) => {
  console.log(id)
}
