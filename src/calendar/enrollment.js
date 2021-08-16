export function enrollment(info,eventList,calendar,startDay,endDay){
    console.log("오니?")
    const inputCss=document.getElementById('input')
    inputCss.style.display="flex";
    inputCss.style.justifyContent="space-between"
    inputCss.style.flexDirection="column"

    const confirm=document.getElementById('check');
    confirm.onclick=function (){
        const title = document.getElementById('title').value;

        const id = eventList.length + 1;
        eventList.push({id, title, startDay, endDay})
        localStorage.setItem("event", JSON.stringify(eventList));
        const startDate = new Date(startDay + 'T00:00:00');
        const endDate = new Date(endDay + 'T00:00:00');
        if (!isNaN(startDate.valueOf()) && !isNaN(endDate.valueOf())) {
            console.log(startDay, endDay)
            calendar.addEvent({
                title: title,
                start: startDate,
                end: endDate,
                allDay: true
            });
            alert('등록 완료');
            inputCss.style.display="none";
            document.getElementById('title').value=""
        } else {
            alert('값을 입력해주세요');
        }

    }
    const revoke=document.getElementById('cancel');
    revoke.onclick=function (){
        inputCss.style.display="none"
        document.getElementById('title').value=""
    }

}
