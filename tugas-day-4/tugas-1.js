let biodata = {};

const storedObjects = (key, value) => {
  let newObj = { ...biodata, [key]: value };

  return (biodata = newObj);
};

storedObjects("nama", "Fauzi");
console.log(biodata);
storedObjects("kota", "Bandung");
console.log(biodata);
storedObjects("age", 23);

console.log(biodata);
