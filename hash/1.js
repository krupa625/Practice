const crypto = require("crypto");

const hash = crypto
  .createHash("sha512")
  .update("Hello World!")
  .digest("base64");
console.log("Hashed:", hash);

// const plaintext = "encrypt me";
// const key = crypto.randomBytes(32).toString("base64");
// console.log("key:", key);

// const { createHmac } = require("node:crypto");

// const secret = "abcdefg";
// const hash = createHmac("sha512", secret)
//   .update("I love cupcakes")
//   .digest("hex");
// console.log(hash);

// Calculate a rolling hash.
// const { createHash } = require("node:crypto");

// const hash = createHash("sha256");

// hash.update("one");
// console.log(hash.copy().digest("hex"));

// hash.update("two");
// console.log(hash.copy().digest("hex"));

// hash.update("three");
// console.log(hash.copy().digest("hex"));

// const { scrypt } = require("node:crypto");

// scrypt("password", "salt", 64, (err, derivedKey) => {
//   if (err) throw err;
//   console.log(derivedKey.toString("hex"));
// });

// scrypt("password", "salt", 64, { N: 1024 }, (err, derivedKey) => {
//   if (err) throw err;
//   console.log(derivedKey.toString("hex"));
// });
// const moment = require("moment");
// const now = moment();
// console.log(now.format("YYYY-MM-DD"));

// const past = moment("2024-01-01");
// console.log(past.fromNow());

// const tomorrow = moment().add(1, "days");
// console.log(tomorrow.format("LL"));

// console.log(moment.locale());
