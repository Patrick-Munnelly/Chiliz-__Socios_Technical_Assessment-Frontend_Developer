/*
 * Your program must print string with the number of years and months and the total number of days between the dates.
 * Dates are provided in dd.mm.yyyy format.
 * You are not allowed to plug in JS libraries such as moment.js or date-fns directly into the code. All code need to be written in this file.
 *
 * Result must be shown as a string in years, months and total days. If years or months are 0, then it should not be displayed in the output.
 *
 * Example:
 * Input: ['01.01.2000', '01.01.2016']
 * Output:
 * '16 years, total 5844 days'
 *
 * Example 2:
 * Input: ['01.11.2015', '01.02.2017']
 *
 * Output:
 * '1 year, 3 months, total 458 days'
 */
const dates = [
  ["01.01.2000", "01.01.2016"],
  ["01.01.2016", "01.08.2016"],
  ["01.11.2015", "01.02.2017"],
  ["17.12.2016", "16.01.2017"],
  ["01.01.2016", "01.01.2016"],
  ["28.02.2015", "13.04.2018"],
  ["28.01.2015", "28.02.2015"],
  ["17.03.2022", "17.03.2023"],
  ["17.02.2024", "17.02.2025"],
];

// Receive string of dates one after each other
function outputDate(dates) {
  // Split the string dates up to make the DAte objects
  const dateStartArray = dates[0].split(".");
  const dateEndArray = dates[1].split(".");

  //   create the date objects
  const dateStart = new Date(
    ` ${dateStartArray[2]}-
    ${dateStartArray[1]}-
    ${dateStartArray[0]}`
  );
  const dateEnd = new Date(
    `${dateEndArray[2]}-${dateEndArray[1]}-${dateEndArray[0]}`
  );

  //   get the JSON object that contains the difference of the months and years
  //  between the two dates
  const totalSplitDate = dateDifferenceByMonthYear(dateStart, dateEnd);

  //   get the total amount of days between the two dates here
  const totalDays = days(dateStart, dateEnd);
  //   this creates the string of the total amount days on the index.html page
  const totalDaysString = `total ${totalDays} days`;

  //   this creates the string of the total amount years between the dates on the index.html page
  //   and if there are no years between the dates this section is an empty string
  const yearsDifferenceString = `${
    totalSplitDate["years_passed"] > 0
      ? `${totalSplitDate["years_passed"]} ${
          totalSplitDate["years_passed"] > 1 ? `years` : `year`
        },`
      : ``
  }`;

  //   this creates the string of the total amount months between the dates on the index.html page
  //   and if there are no months between the dates this section is an empty string
  const MonthsDifferenceString = `${
    totalSplitDate["months_passed"] > 0
      ? `${totalSplitDate["months_passed"]} ${
          totalSplitDate["months_passed"] > 1 ? `months` : `month`
        },`
      : ``
  }`;
  //   this creates the full string that will be displayed in the index.html page
  //    and returns it
  const isSpaceBetweenMonthAndYearNeeded =
    yearsDifferenceString !== "" && MonthsDifferenceString !== "";
  return `${yearsDifferenceString}${
    isSpaceBetweenMonthAndYearNeeded ? " " : ""
  }${MonthsDifferenceString} ${totalDaysString}`.trim();
}

// this is used to get the total amount of days between the two dates
// inputs: (Date, Date)
// response: Number
const days = (startDate, endDate) => {
  const msInDay = 24 * 60 * 60 * 1000;

  return Math.round(Math.abs(endDate - startDate) / msInDay);
};

// this is used to get the year(s) and month(s) between the two dates
// inputs: (Date, Date)
// response: {
//     months_passed: Number,
//     years_passed: Number,
// }
const dateDifferenceByMonthYear = (date1_time_stamp, date2_time_stamp) => {
  calc = new Date(date2_time_stamp - date1_time_stamp);

  const months_passed = Number(Math.ceil(calc.getMonth() + 1) - 1);
  const years_passed = Number(Math.ceil(calc.getFullYear()) - 1970);

  return {
    months_passed: months_passed,
    years_passed: years_passed,
  };
};
