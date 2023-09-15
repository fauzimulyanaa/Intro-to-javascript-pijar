const printPijacCamp = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("PijarCamp");
    } else if (i % 3 === 0) {
      console.log("Pijar");
    } else if (i % 5 === 0) {
      console.log("Camp");
    } else {
      console.log(`${i}`);
    }
  }
};

printPijacCamp(30);
