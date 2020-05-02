function computeExamPass(arr){
    let hoPassed = arr.map( examPassed => {
        if( examPassed.grade > 5){
            return `${examPassed.name} ${examPassed.surname} has passed the exam`;
        }
        return `${examPassed.name} ${examPassed.surname} has not passed the exam`;
    });
    return hoPassed;
   }
   console.log(computeExamPass([
    {
    name: "Angelina",
    surname: 'Jolie',
    grade: 7
    },
    {
    name: "Eric",
    surname: 'Jones',
    grade: 3
    },
   ]));
   