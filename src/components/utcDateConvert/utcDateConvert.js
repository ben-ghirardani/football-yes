const utcDateConvert = (utcDate) => { 


    let day = utcDate.substring(8,10);
    let monthNum = utcDate.substring(5,7);
    let year = utcDate.substring(0,4);
   
    let threeDigitMonth = null;

    // change the below to an arraf of months, index = monthNum - 1
    // is there a performance difference between an array and this way?
    if (monthNum === "01") {
        threeDigitMonth = "Jan"
    } else if (monthNum === "02") {
        threeDigitMonth = "Feb"
    } else if (monthNum === "03") {
        threeDigitMonth = "Mar"
    } else if (monthNum === "04") {
        threeDigitMonth = "Apr"
    } else if (monthNum === "05") {
        threeDigitMonth = "May"
    } else if (monthNum === "06") {
        threeDigitMonth = "Jun"
    } else if (monthNum === "07") {
        threeDigitMonth = "Jul"
    } else if (monthNum === "08") {
        threeDigitMonth = "Aug"
    } else if (monthNum === "09") {
        threeDigitMonth = "Sep"
    } else if (monthNum === "10") {
        threeDigitMonth = "Oct"
    } else if (monthNum === "11") {
        threeDigitMonth = "Nov"
    } else if (monthNum === "12") {
        threeDigitMonth = "Dec"
    }

    return day+" "+threeDigitMonth+" "+year;
}

export default utcDateConvert;