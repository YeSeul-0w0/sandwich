export function moreInfo(info,calendar){
    const dataInfo = document.getElementById('more_input')

    dataInfo.style.display = "flex";
    dataInfo.style.justifyContent = "space-between"
    dataInfo.style.flexDirection = "column"
    const eventName=info.event.title;
    const eventStart=info.event.start;
    const eventEnd=info.event.end;

    if (eventEnd==null){
        dataInfo.innerHTML = `<div class='title'>${eventName}</div>
                        <div class='start-day'>${eventStart.getFullYear()}-${eventStart.getMonth()}-${eventStart.getDate()}</div>  
                        <div class="buttonList">
                            <button id="more_modify">수정</button>
                            <button id="more_cancel">취소</button>
                        </div>`
    }
    else{
        dataInfo.innerHTML = `<div class='title'>${eventName}</div>
                        <div class='start-day'>${eventStart.getFullYear()}-${eventStart.getMonth()}-${eventStart.getDate()}</div>  
                        <div class='end-day'>${eventEnd.getFullYear()}-${eventEnd.getMonth()}-${eventEnd.getDate()-1}</div>  
                        <div class="buttonList">
                            <button id="more_modify">수정</button>
                            <button id="more_cancel">취소</button>
                        </div>`
    }


    const cancel=document.getElementById('more_cancel')
    cancel.onclick=function (){
        dataInfo.style.display="none";
    }
}

