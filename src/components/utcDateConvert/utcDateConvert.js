const utcDateConvert = (utcDate) => { 

    let day = utcDate.substring(8,10);
    let monthNum = utcDate.substring(5,7);
    let year = utcDate.substring(0,4);
   
    let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let threeDigitMonth = month[monthNum -1];

    return day+" "+threeDigitMonth+" "+year;
}

export default utcDateConvert;