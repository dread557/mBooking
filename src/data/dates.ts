// Get the current date
const currentDate = new Date();

// Array to store the generated dates
const datesArray: Date[] = [];

// Loop to generate the next 7 days
for (let i = 0; i < 7; i++) {
  // Create a new Date object for each day by adding 'i' days to the current date
  const nextDate = new Date(currentDate);
  nextDate.setDate(currentDate.getDate() + i);

  // Push the generated date into the array
  datesArray.push(nextDate);
}
export default datesArray;
