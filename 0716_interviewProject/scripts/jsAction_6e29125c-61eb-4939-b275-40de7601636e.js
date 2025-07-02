// Get today's date
var today = new Date();

// Increment by one day
today.setDate(today.getDate() + 1);

// Format the new date as YYYY-MM-DD
var year = today.getFullYear();
var month = ('0' + (today.getMonth() + 1)).slice(-2); // Month is zero-based
var day = ('0' + today.getDate()).slice(-2);

var formattedDate = year + '-' + month + '-' + day;

// Store the date in a NeoLoad variable
vars.put("nextDay", formattedDate);