const moment = require("moment-timezone");

/**douts : lines :23, */

/**********************witout moment.local() */

// var date = moment.utc().format("YYYY-MM-DD HH:mm:ss");

// var localTime = moment.utc(date).toDate();

// localTime = moment(localTime).format("YYYY-MM-DD HH:mm:ss");

// console.log("moment: " + localTime);
// console.log("time", date);

/********************************* UTC to local time conversion moment.local()*/

// var date = moment.utc().format("YYYY-MM-DD HH:mm:ss");

// console.log(date);

// var stillUtc = moment.utc(date).toDate();// converts a string representation of a date into a valid date object or value
// var local = moment(stillUtc).local().format("YYYY-MM-DD HH:mm:ss");

// console.log(local);

/******************* */

// let utcDatetime = "2021-05-31 10:20:00";
// let localDatetime = moment(utcDatetime + "+00:00")
//   .local()
//   .format("YYYY-MM-DD HH:mm:ss");
// console.log(localDatetime); //UTC+5.30 hrs india

/****************moment.tz+5.30 */

// var date = moment.utc().format("YYYY-MM-DD HH:mm:ss");
// const guess = moment.utc(date).tz(moment.tz.guess());
// const correctTimezone = guess.format();
// console.log(correctTimezone);

/*****************different time */
// var date = moment.utc().format("YYYY-MM-DD HH:mm:ss");
// let currentTimeZone = new Intl.DateTimeFormat().resolvedOptions().timeZone; // For example: Australia/Sydney
// let dateTime = new Date(date).toLocaleDateString("UK", {
//   timeZone: currentTimeZone,
//   hour12: true,
// });

// let time = new Date(date).toLocaleTimeString("UK", {
//   timeZone: currentTimeZone,
//   hour12: true,
// });
// console.log(time);
// console.log(dateTime);

/*******************moment tz for different continents country time */

// const Time = moment().tz("Africa/Bissau").format("YYYY-MM-DD HH:mm:ss:SSS");
// console.log("Captured local time:", Time);
// console.log(moment.tz.names());

/*************** */

// const time = moment();
// console.log(time.format("YYYY-MM-DD"));
// console.log(time.fromNow());
// console.log(time.format("LL"));
// console.log(time.format("LT"));
// console.log(time.format("LLL"));
// console.log(time.format("LLLL"));

// const date1 = moment("2024-03-10");
// const date2 = moment("2024-03-02");
// console.log(date1.isBefore(date2));

/******************************* Birth date current year*/

// function calculateAge(dob) {
//   const birthdate = moment(dob);
//   const now = moment();
//   const years = now.diff(birthdate, "years");
//   birthdate.add(years, "years");
//   const months = now.diff(birthdate, "months");
//   birthdate.add(months, "months");
//   const days = now.diff(birthdate, "days");
//   return `${years} years, ${months} months, ${days} days`;
// }

// console.log(calculateAge("2004-07-15"));

/****************current day range calclate */

// function formatDateRange(start, end) {
//   const startMoment = moment(start);
//   const endMoment = moment(end);

//   if (
//     startMoment.month() === endMoment.month() &&
//     startMoment.year() === endMoment.year()
//   ) {
//     return `${startMoment.format("MMMM Do")} - ${endMoment.format("Do, YYYY")}`;
//   }
//   return `${startMoment.format("MMMM Do, YYYY")} - ${endMoment.format(
//     "MMMM Do, YYYY"
//   )}`;
// }

// console.log(formatDateRange("2024-03-01", "2024-03-15"));

const time = moment();
console.log(time.format("YYYY-MM-DD"));
console.log(time.format("yyyy-mm-dd"));
