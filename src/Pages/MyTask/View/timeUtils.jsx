// timeUtils.js
export const calculateTimeInHours = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Calculate time difference in milliseconds
  let timeDiff = end - start;

  // Adjust for the time range (9 AM to 6 AM)
  const startHour = 9;
  const endHour = 18; // 6 PM in 24-hour format

  const startOfDay = new Date(start);
  startOfDay.setHours(startHour, 0, 0, 0);

  const endOfDay = new Date(start);
  endOfDay.setHours(endHour, 0, 0, 0);

  // Adjust the time difference if it exceeds the specified time range
  if (start < startOfDay) {
    timeDiff -= startOfDay - start;
  }
  if (end > endOfDay) {
    timeDiff -= end - endOfDay;
  }

  // Convert milliseconds to hours
  const hours = timeDiff / (1000 * 60 * 60);
  return hours;
};
