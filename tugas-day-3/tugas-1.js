const printOddNumber = (num) => {
  for (let i = 0; i < num; i++) {
    if (i % 2 === 1) {
      console.log(` angka ganjil : ${i}`);
    }
  }
};

printOddNumber(60);
