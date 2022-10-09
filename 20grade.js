/* 20. Write a code which can give grades to students according to theirs scores:
    - 80-100, A
    - 70-89, B
    - 60-69, C
    - 50-59, D
    - 0-49, F
    */

    let grade = 77;

    if (grade >= 80 && grade <= 100) {
      console.log(`A`);
    } else if (grade >= 70 && grade <= 89) {
      console.log(`B`);
    } else if (grade >= 60 && grade <= 69) {
      console.log(`C`);
    } else if (grade >= 50 && grade <= 59) {
      console.log(`D`);
    } else if (grade >= 0 && grade <= 49) {
      console.log(`F`);
    } else {
      console.log(`Invalid input`);
    }
    