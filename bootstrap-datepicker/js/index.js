var date = new Date();
var dayms = (9 * 24 * 60 * 60 * 1000);
var result = new Date(date.getTime() + dayms);  

$('#date').datepicker({ 
    startDate: (result)
});

/**
var date = new Date();
date.setDate(date.getDate()-1);

$('#date').datepicker({ 
    startDate: date
});
**/