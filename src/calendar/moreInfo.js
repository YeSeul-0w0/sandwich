import {getFormatDate} from "./getFormatDate";

export function moreInfo(info,calendar) {
    const dataInfo = document.getElementById('more_info')
    const flag=info.event.id;

    dataInfo.style.display = "flex";
    dataInfo.style.justifyContent = "space-between"
    dataInfo.style.flexDirection = "column"
    const eventName = info.event.title;
    const eventStart = info.event.start;
    const eventEnd = info.event.end;

    if (eventEnd==null) {
        dataInfo.innerHTML = `<div class='title'>${eventName}</div>
                        <div class='start-day'>${eventStart.getFullYear()}-${eventStart.getMonth()+1}-${eventStart.getDate()}</div>
                        <div class="buttonList">
                            <button id="more_modify">수정</button>
                            <button id="more_del">삭제</button>
                            <button id="more_cancel">취소</button>
                        </div>`
    } else {
        const newDayEnd=new Date(eventEnd)
        newDayEnd.setDate(newDayEnd.getDate()-1); //이벤트 정보 표시시 끝 날짜 하루 빼주는 역할
        dataInfo.innerHTML = `<div class='title'>${eventName}</div>
                        <div class='start-day'>${eventStart.getFullYear()}-${eventStart.getMonth()+1}-${eventStart.getDate()}</div>  
                        <div class='end-day'>${newDayEnd.getFullYear()}-${newDayEnd.getMonth() + 1}-${newDayEnd.getDate()}</div>  
                        <div class="buttonList">
                            <button id="more_modify">수정</button>
                            <button id="more_del">삭제</button>
                            <button id="more_cancel">취소</button>
                        </div>`


    }

    const del=document.getElementById("more_del")
    del.onclick=function (){
        dataInfo.style.display='none'
        calendar.getEventById(flag).remove()
        const prevList = localStorage.getItem('event')

        let array = JSON.parse(prevList);
        let temp=array.filter((e)=>e.id!=flag)
        // filter로 지울 이벤트의 id값을 검색, 해당 id만 없애고 다시 배열 생성

        localStorage.setItem("event", JSON.stringify(temp));

    }

    const cancel = document.getElementById('more_cancel')
    cancel.onclick = function () {
        dataInfo.style.display = "none";
    }

    const modify = document.getElementById('more_modify')
    modify.onclick = function () {
        dataInfo.style.display = "none";
        const pop = document.getElementById('modify')
        pop.style.display="flex"
        pop.style.justifyContent="space-between"
        pop.style.flexDirection="column"

        pop.innerHTML = `
            <input type="text" id="new_title">
            <input type="date" id="new_start">
            <input type="date" id="new_end">
             <div class="buttonList">
             <button id="new_check">확인</button>
             <button id="new_cancel">취소</button>
            </div>
        `
        document.getElementById('new_cancel').onclick=function (){
            pop.style.display="none";
        }

        document.getElementById('new_check').onclick=function (){
            const newTitle=document.getElementById('new_title').value;
            const newStart=document.getElementById('new_start').value;
            const newEnd=document.getElementById('new_end').value;

            let date = new Date(newEnd);
            date.setDate(date.getDate()+1);
            const calEndDay=getFormatDate(date) //날짜 형태 맞춰주는것 2021-09-09 이런식으로


            if(newTitle && newStart && newEnd) {
                const prevList = localStorage.getItem('event')
                let array = JSON.parse(prevList); // 로컬스토리지에서 불러온 이벤트값을 배열로 치환
                let idx=array.findIndex(e=>e.id==flag);

                // console.log("id값은? ",flag)
                // console.log("인덱스",idx)

                array[idx].title = newTitle;
                array[idx].start = newStart;
                array[idx].end = calEndDay;

               calendar.getEventById(flag).remove(); // 수정하기 전 정보가 들어있는 이벤트 삭제
               calendar.addEvent({ // 수정 된 정보가 들어간 이벤트 등록
                   id:flag,
                   title: newTitle,
                   start: newStart,
                   end: calEndDay,
                   allDay: true
               })


                // info.event.setProp("title", newTitle);
                // info.event.setEnd(calEndDay);
                // info.event.setStart(newStart);
                //
                // calendar.refetchEvents();

                localStorage.setItem("event", JSON.stringify(array)); //로컬스토리지에 저장하려면 문자열로 치환해야함


                pop.style.display="none"; //이벤트 등록 끝나면 이벤트 수정 창 사라지게함
            }
            else{
                alert("날짜 및 일정명을 입력해주세요.");
            }
        }
    }
}

