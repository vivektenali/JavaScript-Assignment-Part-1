//22. Write a program which tells the number of days in a month.

let month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let m = 1;
  let year = 2022;
  //new Date(year, month, date, hour, minute, second, millisecond):
  console.log(
    `The number of days in ${month[m]} ${year} is ${new Date(
      year,
      m + 1,
      0
    ).getDate()}`
  );
  