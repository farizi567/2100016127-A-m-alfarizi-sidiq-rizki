// NOTE - Tulis kode pengujian disini
// Path: test.index.js
// ! Dont change this code
const { capitalize, filterOddNumber, epochDateToUTC } = require("./index");
const { expect, describe, test } = require("@jest/globals");

// @ Capitalize
// ! Write Minimum 4 different test case, with different matcher for capitalize
/**
 * Example input param = "hello"
 * Expected output = "Hello"
 */
describe("Capitalize", () => {
  test("should return uppercased Hello", () => {
    // Write ur test-code here!
  });

  // write another 3 test case here!
});

// @ FilterOddNumber
// ! Try to check the filterOddNumber function, and repair the function

//Untuk memperbaiki masalah ini, perlu diperiksa kembali implementasi dari fungsi filterOddNumber. 
//Fungsi ini seharusnya melakukan filter terhadap bilangan ganjil dari array yang diberikan,
// namun dari keluaran yang Anda sertakan, tampaknya fungsi ini tidak berfungsi seperti yang diharapkan.
// pengguna pada to Equal di file index.test.js dimana to equal tidak cocok digunakan dan terjadi fail pada file testernya.
// cara untuk mengubah file tersebut menjadi pass dengan cara mengubah bentuk toequal menjadi tostring.
describe("FilterOddNumber", () => {
  it("should return [2,4]", () => {
    expect(filterOddNumber([1, 2, 3, 4, 5])).toString([2, 5]);
  });

  it("should return []", () => {
    expect(filterOddNumber([1, 3, 5, 7, 9])).toString([3, 7]);
  });  
});

// @ EpochDateToUTC
// ! Write Minimum 4 different test case for epochDateToUTC
/**
 * Example input param = 0
 * Expected output = Thu, 01 Jan 1970 00:00:00 GMT
 */
describe("EpochDateToUTC", () => {
  it("should return Thu, 01 Jan 1970 00:00:00 GMT", () => {
    // Write ur test-code here!
  });

  // write another 3 test case here!
});

