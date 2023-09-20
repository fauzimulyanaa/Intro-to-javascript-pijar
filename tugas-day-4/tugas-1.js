let biodata = {};

const storedObjects = (key, value) => {
  biodata = { ...biodata, [key]: value };
};
storedObjects("nama", "Fauzi");
storedObjects("age", "23");

console.log(biodata);
