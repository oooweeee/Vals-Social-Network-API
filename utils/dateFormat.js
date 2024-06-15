const formatDate = (date) => { // Function to format the date
  const newDate = new Date(date).toString() // Converting the date to a string
  return newDate; // Returning the formatted date
}
module.exports = formatDate; // Exporting the formatDate function for use in other parts of the application.