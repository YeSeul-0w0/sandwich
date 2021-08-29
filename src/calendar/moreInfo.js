export function moreInfo(info,calendar){
    const moreInfo = document.getElementById('more_input')
    moreInfo.style.display = "flex";
    moreInfo.style.justifyContent = "space-between"
    moreInfo.style.flexDirection = "column"
    console.log(info.event.end)
    moreInfo.innerHTML += `<div class='title'>${info.event.title}</div>
                        <div class="buttonList">
                            <button id="more_modify">수정</button>
                            <button id="more_cancel">취소</button>
                        </div>`

    const cancel=document.getElementById('more_cancel')
    cancel.onclick=function (){
        moreInfo.style.display="none"
    }
}