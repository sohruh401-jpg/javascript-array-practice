// BOSHLANG'ICH MA'LUMOTLAR

// const products = [
//   { id: 1, name: "iPhone 15", price: 800, discount: 10, stock: 5 },
//   { id: 2, name: "Samsung S24", price: 950, discount: 15, stock: 12 },
//   { id: 3, name: "Redmi Note 13", price: 250, discount: 5, stock: 0 },
//   { id: 4, name: "MacBook Air", price: 1200, discount: 20, stock: 3 },
//   { id: 5, name: "iPad Pro", price: 1000, discount: 10, stock: 8 },
//   { id: 6, name: "AirPods Pro", price: 250, discount: 0, stock: 20 },
// ];

// const students = [
//   { id: 1, name: "Ali", age: 18, score: 85 },
//   { id: 2, name: "Vali", age: 17, score: 52 },
//   { id: 3, name: "Madina", age: 19, score: 95 },
//   { id: 4, name: "Sardor", age: 18, score: 67 },
//   { id: 5, name: "Aziza", age: 17, score: 43 },
//   { id: 6, name: "Jasur", age: 20, score: 76 },
// ];

// ==========================================
// 1-MASALA: QIMMAT MAHSULOTLAR
// METOD: filter()
// Narxi 800 dollardan yuqori mahsulotlarni ajratish.

// function qimmatMahsulotlar(products) {
//   return products.filter(function (product) {
//     return product.price > 800;
//   });
// }

// console.log("1-MASALA: QIMMAT MAHSULOTLAR");
// console.log(qimmatMahsulotlar(products));

// ==========================================
// 2-MASALA: TALABALAR RO'YXATI
// METOD: forEach()
// Har bir talabaning ismi va ballini chiqarish.

// function talabalarRoyxati(students) {
//   students.forEach(function (student) {
//     console.log(student.name + " — " + student.score + " ball");
//   });
// }

// console.log("2-MASALA: TALABALAR RO'YXATI");
// talabalarRoyxati(students);

// ==========================================
// 3-MASALA: CHEGIRMALI NARXLAR
// METOD: map()
// Har bir mahsulotning chegirmadan keyingi narxini hisoblash.

// function chegirmaliNarxlar(products) {
//   return products.map(function (product) {
//     return {
//       name: product.name,
//       price: product.price,
//       discount: product.discount,
//       finalPrice: product.price - (product.price * product.discount) / 100,
//     };
//   });
// }

// console.log("3-MASALA: CHEGIRMALI NARXLAR");
// console.log(chegirmaliNarxlar(products));

// ==========================================
// 4-MASALA: TALABANI ID ORQALI TOPISH
// METOD: find()
// ID qiymati 4 ga teng talabani topish.

// function talabaniTop(students) {
//   return students.find(function (student) {
//     return student.id === 4;
//   });
// }

// const topilganTalaba = talabaniTop(students);

// console.log("4-MASALA: TALABANI ID ORQALI TOPISH");

// if (topilganTalaba) {
//   console.log("Ismi:", topilganTalaba.name);
//   console.log("Ball:", topilganTalaba.score);
// } else {
//   console.log("Talaba topilmadi");
// }

// ==========================================
// 5-MASALA: OMBORDA MAHSULOT BORMI?
// METOD: some()
// Stock qiymati 0 bo'lgan mahsulot bormi?

// function omborniTekshirish(products) {
//   return products.some(function (product) {
//     return product.stock === 0;
//   });
// }

// const omborNatijasi = omborniTekshirish(products);

// console.log("5-MASALA: OMBORNI TEKSHIRISH");

// if (omborNatijasi) {
//   console.log("Omborda tugagan mahsulot bor");
// } else {
//   console.log("Barcha mahsulotlar mavjud");
// }

// ==========================================
// 6-MASALA: BARCHA TALABALAR IMTIHONDAN O'TGANMI?
// METOD: every()
// Barcha talabalar 60 yoki undan yuqori ball olganmi?

// function imtihonniTekshirish(students) {
//   return students.every(function (student) {
//     return student.score >= 60;
//   });
// }

// const imtihonNatijasi = imtihonniTekshirish(students);

// console.log("6-MASALA: IMTIHON NATIJASI");

// if (imtihonNatijasi) {
//   console.log("Barcha talabalar imtihondan o'tgan");
// } else {
//   console.log("Hamma talabalar imtihondan o'tmagan");
// }

// ==========================================
// 7-MASALA: MAHSULOTLARNI NARX BO'YICHA SARALASH
// METOD: sort(
// Mahsulotlarni eng arzondan eng qimmatga saralash.
// slice() asl products arrayini saqlab qolish uchun ishlatilgan.

// function mahsulotlarniSaralash(products) {
//   return products.slice().sort(function (a, b) {
//     return a.price - b.price;
//   });
// }

// const saralanganMahsulotlar = mahsulotlarniSaralash(products);

// console.log("7-MASALA: SARALANGAN MAHSULOTLAR");

// saralanganMahsulotlar.forEach(function (product) {
//   console.log(product.name + " — $" + product.price);
// });

// ==========================================
// 8-MASALA: YUQORI BALL OLGAN TALABALAR
// METODLAR: filter(), sort(), map()
// 70 va undan yuqori ball olganlarni ajratish,
// kamayish tartibida saralash va yangi array yaratish.

// function yuqoriBallOlganlar(students) {
//   return students
//     .filter(function (student) {
//       return student.score >= 70;
//     })
//     .sort(function (a, b) {
//       return b.score - a.score;
//     })
//     .map(function (student) {
//       return {
//         name: student.name,
//         score: student.score,
//       };
//     });
// }

// console.log("8-MASALA: YUQORI BALL OLGAN TALABALAR");
// console.log(yuqoriBallOlganlar(students));

// ==========================================
// 9-MASALA: CHEGIRMALI MAHSULOTLARNI TEKSHIRISH
// METODLAR: filter(), map(), some()
// Chegirmasi 10% yoki undan yuqori mahsulotlarni ajratish,
// yangi narxlarini hisoblash va 800 dollardan yuqori
// mahsulot borligini tekshirish.

// function chegirmaliMahsulotlarniTekshirish(products) {
//   const chegirmaliMahsulotlar = products
//     .filter(function (product) {
//       return product.discount >= 10;
//     })
//     .map(function (product) {
//       return {
//         name: product.name,
//         finalPrice: product.price - (product.price * product.discount) / 100,
//       };
//     });

//   const natija = chegirmaliMahsulotlar.some(function (product) {
//     return product.finalPrice > 800;
//   });

//   console.log("Chegirmali mahsulotlar:");
//   console.log(chegirmaliMahsulotlar);

//   console.log("800 dollardan yuqori mahsulot bormi?", natija);
// }

// console.log("9-MASALA: CHEGIRMALI MAHSULOTLARNI TEKSHIRISH");
// chegirmaliMahsulotlarniTekshirish(products);

// ==========================================
// 10-MASALA: TALABALAR NATIJASI BO'YICHA TAHLIL
// METODLAR: filter(), sort(), map(), find(),
// some(), every(), forEach()
// 1. 60 yoki undan yuqori ball olganlarni ajratish.
// 2. Ballari bo'yicha kamayish tartibida saralash.
// 3. Faqat ism va ballni yangi arrayga o'tkazish.
// 4. 90 dan yuqori ball olgan birinchi talabani topish.
// 5. Kamida bitta talaba 90 dan yuqori ball olganini tekshirish.
// 6. Barcha talabalar 40 yoki undan yuqori ball olganini tekshirish.
// 7. Har bir talabaning ismi va ballini chiqarish.

// function talabalarniTahlilQilish(students) {
//   const otganlar = students.filter(function (student) {
//     return student.score >= 60;
//   });

//   otganlar.sort(function (a, b) {
//     return b.score - a.score;
//   });

//   const natijalar = otganlar.map(function (student) {
//     return {
//       name: student.name,
//       score: student.score,
//     };
//   });

//   const yuqoriBall = students.find(function (student) {
//     return student.score > 90;
//   });

//   const kimdirYuqoriBall = students.some(function (student) {
//     return student.score > 90;
//   });

//   const hammasi40 = students.every(function (student) {
//     return student.score >= 40;
//   });

//   console.log("Barcha talabalar:");

//   students.forEach(function (student) {
//     console.log(student.name + " — " + student.score + " ball");
//   });

//   console.log("Imtihondan o'tganlar:", natijalar);
//   console.log("90 dan yuqori ball olgan birinchi talaba:", yuqoriBall);
//   console.log("90 dan yuqori ball olgan talaba bormi?", kimdirYuqoriBall);
//   console.log("Barcha talabalar 40+ ball olganmi?", hammasi40);
// }

// console.log("10-MASALA: TALABALAR TAHLILI");
// talabalarniTahlilQilish(students);
