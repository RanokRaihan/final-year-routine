export const getDay = (date) => {
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = new Date(date).getDay();

  return weekDays[day];
};

export const getRemainingTime = (date) => {
  const currentTime = new Date().getTime();
  const targetTime = new Date(date).getTime();
  const remainingTime = targetTime - currentTime;
  if (remainingTime <= 0) {
    return 0;
  }
  let seconds = Math.floor(remainingTime / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  seconds %= 60;
  minutes %= 60;
  hours %= 24;

  const timeObject = {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
  return `${days} Days ${hours}h ${minutes}m ${seconds}s`;
};

export const getFullDate = (date) => {
  // Create a new Date object
  var currentDate = new Date(date);

  // Define the month names
  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get the day, month, and year from the current date
  var day = currentDate.getDate();
  var monthIndex = currentDate.getMonth();
  var year = currentDate.getFullYear();

  // Format the date string
  return day + " " + monthNames[monthIndex] + ", " + year;
};
