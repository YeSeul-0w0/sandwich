import {loadEvent} from "./loadEvent";

export function enrollment(info,calendar,start,end){
    const inputCss=document.getElementById('enroll_input')
    inputCss.style.display="flex";
    inputCss.style.justifyContent="space-between"
    inputCss.style.flexDirection="column"

    const confirm=document.getElementById('enroll_check');

    confirm.onclick=function (){
        const eventList=loadEvent();

        const title = document.getElementById('enroll_title').value;

        let standard=0;
        if(eventList.length!=0){
            standard=eventList[eventList.length-1].id
        }
        const id = standard+1;

        eventList.push({id, title, start, end})
        localStorage.setItem("event", JSON.stringify(eventList));

        if (title && start && end) {
            calendar.addEvent({
                title: title,
                start: start,
                end: end,
                allDay: true
            });
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
