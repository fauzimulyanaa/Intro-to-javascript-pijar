// Combine 2 array
const Hobbies = ["Ngoding", "Jogging", "Gaming"];

const newHobbies = ["Mancing", "Renang", "Futsal"];

const combineArray = (arr, arr1) => {
  return [...arr, ...arr1];
};

const combinedArray = combineArray(Hobbies, newHobbies);
console.log(combinedArray);

// combine 2 object

const biodata = {
  fullName: "Fauzi Mulyana",
  age: 23,
  email: "fauzimulyanaa@gmail.com",
};

const alamat = {
  kecamatan: "Cicaheum",
  kota: "Bandung",
  provinsi: "Jawa Barat",
};

const combineObjects = (obj, obj1) => {
  return { ...obj, ...obj1 };
};

const combinedObjects = combineObjects(biodata, alamat);
console.log(combinedObjects);
