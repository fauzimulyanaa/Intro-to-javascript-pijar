// return nama pertama

const returnFirstName = (fullName) => {
  const nama = fullName.split(" ");
  return nama[0];
};

// return jam

const returnDay = (clock) => {
  if (clock >= 5 && clock <= 12) {
    return "Pagi";
  } else if (clock >= 13 && clock <= 15) {
    return "Siang";
  } else if (clock >= 16 && clock <= 18) {
    return "Sore";
  } else if ((clock >= 19 && clock <= 24) || (clock >= 0 && clock <= 4)) {
    return "Malam";
  } else {
    return "Masukan Waktu Yang Benar!";
  }
};

const greeting = (clock, functionReturnDay, fullName, functionReturnFirstName) => {
  const hari = functionReturnDay(clock);
  const nama = functionReturnFirstName(fullName);

  return `Selamat ${hari}, ${nama}`;
};

console.log(greeting(6, returnDay, "Fauzi Mulyana", returnFirstName));
