export function endPlus(day){
    const days={
        1:31,
        3:31,
        4:30,
        5:31,
        6:30,
        7:31,
        8:31,
        9:30,
        10:31,
        11:30,
        12:31
    }
    const chageDay=day.split('-')

    let year=Number(chageDay[0])
    let month=Number(chageDay[1])
    let date=Number(chageDay[2])+1

    let flagDay=0;

    if (month==2){
        if (year%4==0){
            if(year%100==0){
                if(year%400==0){
                    flagDay=29
                }
                else{
                    flagDay=28
                }
            }
            else{
                flagDay=29
            }
        }
        else{
            flagDay=28
        }
    }

    else{
        flagDay=days[month]
    }

    if(date>flagDay){
        if(month==12){
            year++
            month=1
            date=1
        }
        else{
            month++
            date=1
        }
    }

    const finalM="0"+String(month)
    const finalD="0"+String(date)


    const finalDay=String(year)+'-'+finalM.slice(-2)+'-'+finalD.slice(-2)

    return finalDay

}