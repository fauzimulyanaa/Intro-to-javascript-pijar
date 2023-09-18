let biodata = {};

const storedObjects = (key, value) => {
  const newObj = { ...biodata, [key]: value };

  return newObj;
};

biodata = storedObjects("nama", "Fauzi");

biodata = storedObjects("alamat", "Cicaheum");
biodata = storedObjects("age", 23);

console.log(biodata);
