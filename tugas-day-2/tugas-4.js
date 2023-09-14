const checkPassingGrade = (grade) => {
  if (grade >= 75) {
    return "Selamat, anda lolos";
  } else {
    return "Anda tidak lolos";
  }
};

const gradeCheckMassage = checkPassingGrade(95);

console.log(gradeCheckMassage);
