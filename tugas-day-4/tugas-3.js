// return nama pertama

const returnFirstName = (fullName) => {
  const nama = fullName.split(" ");
  return nama[0];
};

const hasil = returnFirstName("Fauzi Mulyana");
console.log(hasil);

// return jam

const returnDay = (clock) => {
  for (let i = 0; i <= clock; i++) {
    if (clock >= 5 && clock <= 12) {
      return "Pagi";
    } else if (clock >= 13 && clock <= 15) {
      return "Siang";
    } else if (clock >= 16 && clock <= 18) {
      return "Sore";
    } else {
      return "Malam";
    }
  }
};

console.log(returnDay(16));
