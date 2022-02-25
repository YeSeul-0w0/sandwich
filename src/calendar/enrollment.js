import {loadEvent} from "./loadEvent";

export function enrollment(info,calendar,start,end){
    const inputCss=document.getElementById('enroll_input')
    inputCss.style.display="flex";
    inputCss.style.justifyContent="space-between"

    const confirm=document.getElementById('enroll_check');

    confirm.onclick=function (){
        const eventList=loadEvent();

        const title = document.getElementById('enroll_title').value;

        let standard=0;
        if(eventList.length!=0){
            standard=eventList[eventList.length-1].id
        }
        const id = standard+1;

        // id값 설정 같은 경우, 로컬스토리지에 이벤트 배열이 저장되어있은 경우
        // 해당 배열의 가장 끝 값의 id값을 불러와, 해당 id+1 해줌
        // 이벤트가 아예 없는 경우, 0+1을 해서 1 부터 시작됨

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
