// tests
// ---console.log('your insanity test is passed');
//  alert("loaded your js");
// sift throught the requirements.

// hours open array
const businessHours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

// make the first object
let Seattle = {
  //---identify some properties
  minimumCustomers: 23,

  maximumCustomers: 65,

  averageCookiesSold: 6.3,

  customersPerHour: [],

  cookiesSoldPerHour: [],

  totalDailyCookies: 0,
    // determine how many customers to expect per hour open
// push random customers to customer per hour array
 getCookiesSoldPerHour: function () {
    this.totalDailyCookies=0;
    for (let i = 0; i < this.customersPerHours.length; i++) {
      let totalDailyCookies=Math.floor(this.customersPerHour[index]*this.averageCookiesSold);  
        }
    },
  // determine how many customers to expect per hour open
// push random customers to customer per hour array
  getCustomersPerHour: function () {
    for (let i = 0; i < businessHours.length; i++) {
      this.customersPerHour.push(
        getRandomNumberOfCustomersAtAGivenRange(
          this.minimumCustomers,
          this.maximumCustomers
        )
      );
    }
}
}



// we need a generic function customized to our needs, so we can pass in the data we have
// we need a random number of customers within range of data we were given
function getRandomNumberOfCustomersAtAGivenRange(
  minimumCustomers,
  maxCustomers
) {
  return Math.floor(
    Math.random() * (maxCustomers - minimumCustomers + 1) + minimumCustomers
  );
  
}
// call the methods
Seattle.getCustomersPerHour();

for (let index = 0; index < Seattle.customersPerHour.length; index++) {
    
    document.write(Seattle.customersPerHour[index]);
}

















// // // make the 2nd object
// // let Tokyo={
// //     //---identify some properties
// //   minimumCustomers:3,
// //   maxCustomers:24,
// //   averageCookiesSold:1.2
// //   }
// //   // make the 3rd object
// // let Dubai={
// //     //---identify some properties
// //   minimumCustomers:11,
// //   maxCustomers:38,
// //   averageCookiesSold:3.7
// //   }
// //   // make the 4th object
// // let Paris={
// //   //---identify some properties
// // minimumCustomers:20,
// // maxCustomers:38,
// // averageCookiesSold:3.3
// // }
// // // make the 5th object
// // let Lima={
// //     //---identify some properties
// //   minimumCustomers:2,
// //   maxCustomers:16,
// //   averageCookiesSold:4.6
// //   }
