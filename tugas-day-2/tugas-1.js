const biodata = {
  namaLengkap: "Fauzi Mulyana",
  email: "fauzi.mulyanaa9@gmail.com",
  nomerHandphone: "081284657873",
  umur: 23,
  tempatTanggalLahir: "Sumedang, 22 Januari 2000",
  alamat: "Jl. Sulaksana, No 38 Kecamatan Cicaheum Kota Bandung",
  kodePos: 40282,
  programmingExperience: ["HTML", "CSS", "Bootstrap", "TailwindCss"],
  riwayatPendidikan: [
    {
      namaSekolah: "SDN KETIB SUMEDANG",
      tingkatSekolah: "SD",
      tahunMulai: 2006,
      tahunBerakhir: 2012,
      jurusan: null,
      isRekomendation: false,
      lokasi: "Kabupaten Sumedang, Jawa Barat",
      pengajarFavorite: ["Pa Bambang", "Bu Tuti"],
      materiFavorit: [
        {
          nama: "penjas",
          date: 2007,
          pengajar: "Pa Bambang",
          alasan: ["Menyenangkan", "Sehat"],
          isHard: false,
        },
        {
          nama: "Seni Budaya",
          date: 2008,
          pengajar: undefined,
          alasan: ["Menyenangkan", "Seru"],
          isHard: false,
        },
        {
          nama: "Matematika",
          date: 2007,
          pengajar: undefined,
          alasan: ["Seru", "Menyenangkan"],
          isHard: false,
        },
      ],
    },
    {
      namaSekolah: "SMPN 4 SUMEDANG",
      tingkatSekolah: "Sekolah Mengengah Pertama",
      tahunMulai: 20012,
      tahunBerakhir: 2015,
      jurusan: null,
      isRekomendation: true,
      lokasi: "Kabupaten Sumedang, Jawa Barat",
      pengajarFavorite: ["Pa Rahman", "Pa Danang"],
      materiFavorite: [
        {
          nama: "penjas",
          date: 2002,
          pengajar: "Pa Danang",
          alasan: ["Menyenangkan", "Sehat"],
          isHard: false,
        },
        {
          nama: "agama",
          date: 2012,
          pengajar: undefined,
          alasan: ["Menyenangkan", "Seru"],
          isHard: false,
        },
        {
          nama: "Matematika",
          date: 2013,
          pengajar: undefined,
          alasan: ["Seru", "Menyenangkan"],
          isHard: false,
        },
      ],
    },
    {
      namaSekolah: "SMAN 3 SUMEDANG",
      tingkatSekolah: "Sekolah Menengah Atas",
      tahunMulai: 2015,
      tahunBerakhir: 2017,
      jurusan: "IPS",
      isRekomendation: true,
      lokasi: "Kabupaten Sumedang, Jawa Barat",
      pengajarFavorite: ["Pa Sudrajat", "Bu Susi"],
      materiFavorite: [
        {
          nama: "Geografi",
          date: 2016,
          pengajar: "Pa Sudrajat",
          alasan: ["Menyenangkan", "Sehat"],
          isHard: false,
        },
        {
          nama: "Seni Budaya",
          date: 2016,
          pengajar: undefined,
          alasan: ["Menyenangkan", "Seru"],
          isHard: false,
        },
        {
          nama: "Ekonomi",
          date: 2016,
          pengajar: undefined,
          alasan: ["Seru", "Menyenangkan"],
          isHard: false,
        },
      ],
    },
    {
      namaSekolah: "Universitas Sebelas April Sumedang",
      tingkatSekolah: "Universitas",
      tahunMulai: 2019,
      tahunBerakhir: 2022,
      jurusan: "Teknik Informatika",
      isRekomendation: false,
      lokasi: "Kabupaten Sumedang, Jawa Barat",
      pengajarFavorite: ["Pa Fidi", "Bu Reny"],
      materiFavorite: [
        {
          nama: "OOP",
          date: 2019,
          pengajar: undefined,
          alasan: ["Menyenangkan", "Sehat"],
          isHard: false,
        },
        {
          nama: "Algoritma",
          date: 2019,
          pengajar: undefined,
          alasan: ["Menyenangkan", "Seru"],
          isHard: false,
        },
        {
          nama: "Database",
          date: 2019,
          pengajar: undefined,
          alasan: ["Seru", "Menyenangkan"],
          isHard: false,
        },
      ],
    },
  ],
  golonganDarah: "O",
  hobi: ["Futsal", "Jogging", "Game"],
  makananFavorit: [
    {
      nama: "Seblak",
      asal: "Bandung",
    },
    {
      nama: "Soto Madura",
      asal: "Madura",
    },
    {
      nama: "Ketroprak",
      asal: "Jakarta",
    },
  ],
};

function myBiodata(biodataObj) {
  console.log(`Nama Lengkap : ${biodata.namaLengkap}`);
  console.log(`Pernah menempuh pendidikan di ${biodata.riwayatPendidikan.length} tempat`);
}

myBiodata(biodata);
