class Answer{

  answer:string;
  value:number;

}


class Question{

  question:string;
  answers:Answer[];

}

export class Quiz{

  quiz:Question[];
  maxPuntuation:number;

  private evaluateAnswer(numberQuestion:number, answer:number[],evaluateMethod?:any):number{



  }

  evaluateQuiz(answers:number[][]):number{

    let question:number = 0;
    let evaluation:number=0;

    for(let answer of answers){
      let answerNumber:number=0;
      for (let marked of answer){
        if(marked==1){
            quiz[question].answers[2]
        }
        answerNumber = answerNumber +1;
      }
      question = question+1;
    }

  }

}