import {DateInput} from "@fullcalendar/common";

export function today(event_list) {
    const schedule = document.getElementById('today_event')

    let now=new Date()
    now.setHours(0,0,0,0)

    let todayList=event_list.filter((e) => new Date(e.start).setHours(0,0,0,0)<=now && now <=new Date(e.end).setHours(0,0,0,0))

    let todayEvent=''
    for (let i = 0; i < todayList.length; i++) {
        todayEvent+=`${todayList[i].title}<br>`
    }

    schedule.innerHTML = `<div class="card bg-light mb-3" style="width: 30%; height: 20%;">
        <div class="card-header">오늘의 일정</div>
            <div class="card-body">
                <p class="card-text">
                    ${todayEvent}
                </p>
            </div>
        </div>`


}