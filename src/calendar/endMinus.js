export function endMinus(day){

    let year=Number(day.getFullYear())
    let month=Number(day.getMonth())+1
    let date=Number(day.getDate())-1

    console.log(date)

    if (date==0){
        month--;
        if(month==0){
            year--;
            month=12;
            date=31;
        }
    }



    const finalDay=String(year)+'-'+month+'-'+date

    return finalDay
}