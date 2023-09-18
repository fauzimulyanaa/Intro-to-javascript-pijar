const printSquare = (num) => {
  for (let i = 0; i < num; i++) {
    let row = "";
    for (let j = 0; j < num; j++) {
      row += "* ";
    }
    console.log(row);
  }
};

console.log(printSquare(5));
