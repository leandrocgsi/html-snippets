# JavaScript Samples

DD/MM/YYYY format
If you work with this format, then you can split the date in order to get day, month and year separately and then use it in another constructor - Date(year, month, day):

```javascript
var dateString = "23/10/2015"; // Oct 23

var dateParts = dateString.split("/");

var dateObject = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]); // month is 0-based

document.body.innerHTML = dateObject.toString();
```
