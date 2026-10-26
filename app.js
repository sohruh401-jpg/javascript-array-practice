// Tub sonlarni ajratish
// ARRAY
// numbers arrayidan faqat tub sonlarni ajratib olib, ularni yangi array ko‘rinishida qaytaradigan function yozing.

// 💡 Misol: [2, 4, 5, 9, 11] berilsa, natija [2, 5, 11] bo‘ladi. Tub son faqat 1 ga va o‘ziga qoldiqsiz bo‘linadi.

// const numbers = [2, 4, 5, 9, 11];

// function tubSonlar(numbers) {
//   return numbers.filter(function (son) {
//     if (son < 2) {
//       return false;
//     }

//     for (let i = 2; i < son; i++) {
//       if (son % i === 0) {
//         return false;
//       }
//     }

//     return true;
//   });
// }

// console.log(tubSonlar(numbers));
// ============================================================================
// **2**

// ### Imtihondan o‘tgan talabalar

// **FILTER**

// `students` arrayidan bali 60 yoki undan yuqori bo‘lgan talabalarni ajratib, yangi array qaytaradigan `function` yozing.

// **💡 Shart:** `score >= 60`. 60 ball olgan talaba ham natijaga kiritilishi kerak.

// const students = [
//   { id: 1, name: "Ali", score: 85 },
//   { id: 2, name: "Vali", score: 45 },
//   { id: 3, name: "Zarina", score: 97 },
//   { id: 4, name: "Madina", score: 60 },
//   { id: 5, name: "Sardor", score: 55 },
// ];

// function imtihondanOtgan(students) {
//   return students.filter(function (student) {
//     return student.score >= 60;
//   });
// }

// console.log(imtihondanOtgan(students));

// ===================================================================================================================
// 3 masala. ### Sonlar ko‘paytmasi

// **REDUCE / LOOP**

// `numbers` arrayidagi barcha sonlarni bir-biriga ko‘paytirib, yakuniy natijani qaytaradigan `function` yozing.

// const numbers = [2, 3, 4];

// function sonlarKopaytmasi(numbers) {
//   return numbers.reduce(function (sum, son) {
//     return sum * son;
//   }, 1);
// }

// console.log(sonlarKopaytmasi(numbers));

// ===============================================================================================

// 4 masala.
// ### Omborda kam qolgan mahsulotlar

// **FILTER**

// `products` arrayidan ombordagi soni 10 tadan kam bo‘lgan mahsulotlarni tanlab, yangi array qaytaradigan `function` yozing.

// **💡 Shart:** `stock < 10`. Aynan 10 ta mahsulot qolgan bo‘lsa, uni qo‘shmang

// const products = [
//   { id: 1, name: "Laptop", price: 8500000, stock: 12 },
//   { id: 2, name: "Mouse", price: 150000, stock: 25 },
//   { id: 3, name: "Keyboard", price: 350000, stock: 8 },
//   { id: 4, name: "Monitor", price: 2200000, stock: 0 },
//   { id: 5, name: "Headphones", price: 450000, stock: 17 },
//   { id: 6, name: "Phone", price: 5000000, stock: 5 },
// ];

// function kamQolganMahsulotlar(products) {
//   return products.filter(function (product) {
//     return product.stock < 10;
//   });
// }

// console.log(kamQolganMahsulotlar(products));

// ===============================================================================

// 5 masala

// ### ID orqali mahsulotni topish

// **FIND**

// Function bitta `id` qabul qilsin. U `products` arrayidan shu ID ga mos mahsulotni topib qaytarsin.

// **💡 Misol:** `3` yuborilsa, `Keyboard` mahsuloti qaytadi. ID topilmasa, `undefined` qaytishi mumkin.

// const products = [
//     { id: 1, name: "Laptop", price: 8500000, stock: 12 },
//     { id: 2, name: "Mouse", price: 150000, stock: 25 },
//     { id: 3, name: "Keyboard", price: 350000, stock: 8 },
//     { id: 4, name: "Monitor", price: 2200000, stock: 0 },
//     { id: 5, name: "Headphones", price: 450000, stock: 17 }
// ];

// function mahsulotniTop(products, id) {
//     return products.find(function(product) {
//         return product.id === id;
//     });
// }

// console.log(mahsulotniTop(products, 3));

// ==============================================================================================

// 6 masala

// ### Eng yuqori ball olgan talaba

// **FIND MAX**

// `students` arrayidan eng katta `score` qiymatiga ega talabani topib, uning objectini qaytaradigan `function` yozing.

// **💡 Kutilgan natija:** Zarina, chunki uning bali 97 — arraydagi eng yuqori ball.

// const students = [
//   { id: 1, name: "Ali", score: 85 },
//   { id: 2, name: "Vali", score: 45 },
//   { id: 3, name: "Zarina", score: 97 },
//   { id: 4, name: "Madina", score: 60 },
//   { id: 5, name: "Sardor", score: 55 },
// ];

// function engYuqoriBall(students) {
//   return students.reduce(function (max, student) {
//     if (student.score > max.score) {
//       return student;
//     }

//     return max;
//   });
// }

// console.log(engYuqoriBall(students));

// ==========================================================================

// 7 masala

// ### Yangi talaba qo‘shish

// **PUSH**

// Yangi talaba objectini qabul qilib, uni `students` arrayiga qo‘shadigan `function` yozing. Qo‘shilgandan keyin yangilangan arrayni qaytaring.

// **💡 Yangi talaba:** `{ id: 9, name: "Kamola", score: 81 }`. Objectda `id`, `name` va `score` bo‘lishi kerak.

// const students = [
//     { id: 1, name: "Ali", score: 85 },
//     { id: 2, name: "Vali", score: 45 },
//     { id: 3, name: "Zarina", score: 97 },
//     { id: 4, name: "Madina", score: 60 },
//     { id: 5, name: "Sardor", score: 55 }
// ];

// function yangiTalabaQosh(students, newStudent) {
//     students.push(newStudent);

//     return students;
// }

// const yangiTalaba = { id: 9, name: "Kamola", score: 81 };

// console.log(yangiTalabaQosh(students, yangiTalaba));

// ==========================================================================================

// 8 masala
// ### Qimmat mahsulotlarni ajratish

// **FILTER**

// `products` arrayidan narxi 500 000 so‘mdan yuqori bo‘lgan mahsulotlarni tanlab, yangi array qaytaradigan `function` yozing.

// **💡 Shart:** `price > 500000`. Narxi aynan 500 000 so‘m bo‘lgan mahsulot kiritilmaydi.

// const products = [
//     { id: 1, name: "Laptop", price: 8500000, stock: 12 },
//     { id: 2, name: "Mouse", price: 150000, stock: 25 },
//     { id: 3, name: "Keyboard", price: 350000, stock: 8 },
//     { id: 4, name: "Monitor", price: 2200000, stock: 0 },
//     { id: 5, name: "Headphones", price: 450000, stock: 17 }
// ];

// function qimmatMahsulotlar(products) {
//     return products.filter(function(product) {
//         return product.price > 500000;
//     });
// }

// console.log(qimmatMahsulotlar(products));

// =====================================================================================================

// 9 masala
// ### Har bir talabaning balini oshirish

// **MAP**

// Har bir talabaning `score` qiymatiga 10 ball qo‘shib, yangi array qaytaradigan `function` yozing. Asl `students` arrayi o‘zgarmasligi kerak.

// **💡 Misol:** 75 ball 85 ga, 45 ball esa 55 ga aylanadi. Yangi arraydagi har bir talaba objectini alohida yarating.

// const students = [
//   { id: 1, name: "Ali", score: 75 },
//   { id: 2, name: "Vali", score: 45 },
//   { id: 3, name: "Zarina", score: 97 },
//   { id: 4, name: "Madina", score: 60 },
//   { id: 5, name: "Sardor", score: 55 },
// ];

// function ballniOshirish(students) {
//   return students.map(function (student) {
//     return {
//       id: student.id,
//       name: student.name,
//       score: student.score + 10,
//     };
//   });
// }

// const yangiStudents = ballniOshirish(students);

// console.log("Yangi array:", yangiStudents);
// console.log("Asl array:", students);

// ========================================================================================

// 10 masala

// ### Barcha mahsulotlarning umumiy qiymati

// **REDUCE**

// Har bir mahsulot uchun narxini ombordagi soniga ko‘paytiring. Keyin barcha mahsulotlar qiymatini qo‘shib, umumiy summani qaytaradigan `function` yozing.

// **💡 Hisoblash:** har bir mahsulot uchun `price * stock`, so‘ng barcha natijalarni jamlang.

// const products = [
//     { id: 1, name: "Laptop", price: 8500000, stock: 12 },
//     { id: 2, name: "Mouse", price: 150000, stock: 25 },
//     { id: 3, name: "Keyboard", price: 350000, stock: 8 },
//     { id: 4, name: "Monitor", price: 2200000, stock: 0 },
//     { id: 5, name: "Headphones", price: 450000, stock: 17 }
// ];

// function umumiyQiymat(products) {
//     return products.reduce(function(jami, product) {
//         return jami + (product.price * product.stock);
//     }, 0);
// }

// console.log(umumiyQiymat(products));
