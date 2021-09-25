import {DateInput} from "@fullcalendar/common";

export function today(event_list, calendar) {
    const schedule = document.getElementById('today_event')

    console.log(event_list);
    console.log(calendar.getEvents().start)

    schedule.innerHTML = `<div class="card bg-light mb-3" style="width: 30%; height: 20%;">
        <div class="card-header">오늘의 일정</div>
            <div class="card-body">
                <p class="card-text">일정목록</p>
            </div>
        </div>`
}