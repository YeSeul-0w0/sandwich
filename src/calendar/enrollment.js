export function enrollment(info,eventList,calendar,start,end){
    const inputCss=document.getElementById('enroll_input')
    inputCss.style.display="flex";
    inputCss.style.justifyContent="space-between"
    inputCss.style.flexDirection="column"

    const confirm=document.getElementById('enroll_check');
    confirm.onclick=function (){
        const title = document.getElementById('enroll_title').value;
        const id = eventList.length;
        eventList.push({id, title, start, end})
        localStorage.setItem("event", JSON.stringify(eventList));
        const startDate = new Date(start + 'T00:00:00');
        const endDate = new Date(end + 'T00:00:00');
        if (title && !isNaN(startDate.valueOf()) && !isNaN(endDate.valueOf())) {
            calendar.addEvent({
                title: title,
                start: startDate,
                end: endDate,
                allDay: true
            });
            // alert('등록 완료');
            inputCss.style.display="none";
            document.getElementById('enroll_title').value=""
        } else {
            alert('값을 입력해주세요');
        }

    }
    const revoke=document.getElementById('enroll_cancel');
    revoke.onclick=function (){
        inputCss.style.display="none"
        document.getElementById('enroll_title').value=""
    }

}
