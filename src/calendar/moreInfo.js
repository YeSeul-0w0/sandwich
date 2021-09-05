export function moreInfo(info, flag,calendar) {
    const dataInfo = document.getElementById('more_info')

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
                            <button id="more_cancel">취소</button>
                        </div>`
    } else {
        const setDate=new Date(eventEnd)
        setDate.setTime(setDate.getTime() - 1000*60*60*24);

        dataInfo.innerHTML = `<div class='title'>${eventName}</div>
                        <div class='start-day'>${eventStart.getFullYear()}-${eventStart.getMonth()+1}-${eventStart.getDate()}</div>  
                        <div class='end-day'>${setDate.getFullYear()}-${setDate.getMonth() + 1}-${setDate.getDate()}</div>  
                        <div class="buttonList">
                            <button id="more_modify">수정</button>
                            <button id="more_cancel">취소</button>
                        </div>`
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

            let calEndDay=0;
            let date = new Date(newEnd);
            let temp = date.getTime();
            date.setTime(temp + 1000 * 60 * 60 * 24);
            calEndDay = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

            if (newStart==newEnd){
                calEndDay=newStart
            }
            else{
                calEndDay=endPlus(newEnd)
            }


            if(newTitle && newStart && newEnd) {
                const prevList = localStorage.getItem('event')

                let array = JSON.parse(prevList);
                array[flag].title = newTitle;
                array[flag].start = newStart;
                array[flag].end = calEndDay;


                localStorage.setItem("event", JSON.stringify(array));

            }
        }
    }
}

