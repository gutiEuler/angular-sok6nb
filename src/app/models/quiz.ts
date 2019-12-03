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

  private evaluateAnswer(question:number, answer:number[],evaluateMethod?:any):number{

    let ordinalOption:number= 0;
    for(let optionMarked of answer){



    }


  }

  evaluateQuiz(answers:number[][]):number{

    let question:number = 0;
    let evaluation:number=0;

    for(let answer of answers){
      evaluation=evaluation + this.evaluateAnswer(question, answer); 
      question = question+1;
    }

    return evaluation;
  }

}