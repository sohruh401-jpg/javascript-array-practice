const users = [
  {
    id: 1,
    name: "Ali",
    lastName: "Valiyev",
    age: 22,
    job: "Frontend Developer",
    email: "ali@gmail.com",
    password: "ali123",
  },
  {
    id: 2,
    name: "Vali",
    lastName: "Karimov",
    age: 25,
    job: "Backend Developer",
    email: "vali@gmail.com",
    password: "vali123",
  },
  {
    id: 3,
    name: "Sardor",
    lastName: "Toshmatov",
    age: 19,
    job: "Student",
    email: "sardor@gmail.com",
    password: "sardor123",
  },
  {
    id: 4,
    name: "Madina",
    lastName: "Aliyeva",
    age: 24,
    job: "UI/UX Designer",
    email: "madina@gmail.com",
    password: "madina123",
  },
  {
    id: 5,
    name: "Aziz",
    lastName: "Rasulov",
    age: 28,
    job: "Fullstack Developer",
    email: "aziz@gmail.com",
    password: "aziz123",
  },
  {
    id: 6,
    name: "Malika",
    lastName: "Sobirova",
    age: 21,
    job: "Graphic Designer",
    email: "malika@gmail.com",
    password: "malika123",
  },
  {
    id: 7,
    name: "Jasur",
    lastName: "Ergashev",
    age: 30,
    job: "Project Manager",
    email: "jasur@gmail.com",
    password: "jasur123",
  },
  {
    id: 8,
    name: "Shahnoza",
    lastName: "Qodirova",
    age: 23,
    job: "QA Engineer",
    email: "shahnoza@gmail.com",
    password: "shahnoza123",
  },
  {
    id: 9,
    name: "Bekzod",
    lastName: "Ismoilov",
    age: 18,
    job: "Student",
    email: "bekzod@gmail.com",
    password: "bekzod123",
  },
  {
    id: 10,
    name: "Dilnoza",
    lastName: "Hamidova",
    age: 26,
    job: "Python Developer",
    email: "dilnoza@gmail.com",
    password: "dilnoza123",
  },
];

function addUser(arr, name, lastname, age, job, email, password) {
  let newUser = {
    id: arr.length === 0 ? 1 : users.at(-1).id + 1,
    name: name,
    lastName: lastname,
    age: age,
    job: job,
    email: email,
    password: password,
  };

  arr.push(newUser);

  return newUser;
}

console.log(
  addUser(
    users,
    "john doe",
    "macgregor",
    34,
    "boxer",
    "johndoe@gmail.com",
    "1234",
  ),
);
console.log(users);

// 100-masala. HTML element yaratish

// function elementYaratish(str) {
//   let [tag, son] = str.split("*");
//   let natija = "";

//   for (let i = 0; i < Number(son); i++) {
//     natija += `<${tag}></${tag}>\n`;
//   }

//   return natija;
// }

// console.log(elementYaratish("div*2"));
// console.log(elementYaratish("p*1"));
// console.log(elementYaratish("li*3"));

// ======================================================================

// 101 - masala;
// .Funksiya butun son qabul qilsa, 1dan ushbu butun
// songacha bo’lgan sonlar yig’indisini qaytarsin.

// function yigindi(n) {
//     let sum = 0;

//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }

//     return sum;
// }

// console.log(yigindi(3));
// console.log(yigindi(10));
// console.log(yigindi(7));

// ======================================================================

// 102 - masala;
// .Funskiya son va object qabul qiladi. Objectni ichida min va
// max degan propertilar mavjud. Agar ushbu son min va maxni
// oralig’ida bo’lsa funksiya true qaytarsin, aks holda false

// function oraliqdami(son, obj) {
//     return son >= obj.min && son <= obj.max;
// }

// console.log(oraliqdami(4, { min: 0, max: 5 }));
// console.log(oraliqdami(4, { min: 4, max: 5 }));
// console.log(oraliqdami(4, { min: 6, max: 10 }));
// console.log(oraliqdami(5, { min: 5, max: 5 }));

// =====================================================================

// 103 - masala;Funksiya son qabul qiladi, agar ushbu sonni kvadratga
// ko’tarsak, ushbu natijaning oxirigi qiymati sonning o’ziga teng
// bo’lsa funksiya true qaytarsin, aks holda false.

// function kvadratTekshirish(son) {
//     let kvadrat = son ** 2;

//     return String(kvadrat).endsWith(String(son));
// }

// console.log(kvadratTekshirish(1));
// console.log(kvadratTekshirish(3));
// console.log(kvadratTekshirish(6));
// console.log(kvadratTekshirish(95));

// =====================================================================
// 104-masala
// Funksiya massiv qabul qiladi. Funksiya massivning elementlariga o’sha elementning indexini qo’shgan holda yangi
// massiv qaytarsin.
// function indexQoshish(arr) {
//     return arr.map(function(element, index) {
//         return element + index;
//     });
// }

// console.log(indexQoshish([0, 0, 0, 0, 0]));

// console.log(indexQoshish([1, 2, 3, 4, 5]));

// console.log(indexQoshish([5, 4, 3, 2, 1]));

// =====================================================================

// 105 - masala;
// .Funksiya ichimliklar massivini qabul qiladi. Funksiya
// ichida shakari yo’q ichimlilarinigina qaytarishi kerak. Ichida
// shakari bor ichimliklar ro’yxati:
// cola fanta
// function shakarsizIchimliklar(arr) {
//     return arr.filter(function(ichimlik) {
//         return ichimlik !== "cola" && ichimlik !== "fanta";
//     });
// }

// console.log(shakarsizIchimliklar(["fanta", "cola", "water"]));

// console.log(shakarsizIchimliklar(["fanta", "cola"]));

// console.log(shakarsizIchimliklar(["lemonade", "beer", "water"]));

// 106 - masala;
// .Funksiya son qabul qilsa, Funksiya ushbu sonda nechta
// raqam borligini qaytarsin
// function raqamlarSoni(son) {
//     return String(Math.abs(son)).length;
// }

// console.log(raqamlarSoni(123));
// console.log(raqamlarSoni(56));
// console.log(raqamlarSoni(7154));
// console.log(raqamlarSoni(61217311514));
// console.log(raqamlarSoni(0));

// ====================================================================

// 107 - masala;
// .Funksiya son qabu qilsa, ushbu funksiya sonning raqamlari
// o’rni istalgancha almashtirib eng katta hosil bo’lishi mumkin
// bo’lgan sonni qaytarsin.
// function engKattaSon(son) {
//     return Number(
//         String(son)
//             .split("")
//             .sort()
//             .reverse()
//             .join("")
//     );
// }

// console.log(engKattaSon(123));
// console.log(engKattaSon("001"));
// console.log(engKattaSon(999));
// console.log(engKattaSon(784));

// ====================================================================
// 108 - masala;
// .Funksiya 2ta sonlar oralig’ini qabul qiladi. Funksiya ushbu
// oraliqdan bironta random son qaytarsin.

// function randomSon(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(randomSon(5, 9));
// console.log(randomSon(5, 9));
// console.log(randomSon(5, 9));

// ===================================================================

// 109 - masala;
// Funksiya son qabul qiladi. Ushbu funksiya ushbu son narissistik son bo’lsa true qaytarsin, aks holda false. Narissistik son
// degani sonning har bir raqamini sonning uzunligi miqdorida
// darajaga ko’tarib qo’shib chiqilganda o’ziga teng bo’lgan son
// function narsissistikSon(son) {
//     let raqamlar = String(son).split("");
//     let daraja = raqamlar.length;

//     let yigindi = raqamlar.reduce(function(sum, raqam) {
//         return sum + Number(raqam) ** daraja;
//     }, 0);

//     return yigindi === son;
// }

// console.log(narsissistikSon(153));
// console.log(narsissistikSon(370));
// console.log(narsissistikSon(1652));

// ===================================================================

// 110 - masala;
// .Funksiya string qabul qiladi.Funksiya ushbu stringda
// nechta katta harf ishtirok etganin qaytarsin.
// function kattaHarflarSoni(str) {
//     return str.split("").filter(function(harf) {
//         return harf === harf.toUpperCase() &&
//                harf !== harf.toLowerCase();
//     }).length;
// }

// console.log(kattaHarflarSoni("fvLzpxmgXSDrobbgMVrc"));
// console.log(kattaHarflarSoni("JMZWCneOTFLWYwBWxyFw"));
// console.log(kattaHarflarSoni("mqeytbbjwqemcdrdsyvq"));

