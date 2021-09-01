import {Calendar} from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import {enrollment} from "./enrollment.js";
import {moreInfo} from "./moreInfo";
import {loadEvent} from "./loadEvent";

function view() {
    document.addEventListener('DOMContentLoaded', function () {

        const calendarEl = document.getElementById('calendar');

        const list=loadEvent();

        const calendar = new Calendar(calendarEl, {
            events: list,
            selectable: true,
            plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
            },

            eventClick: function (info) {
                const flag=info.event.id;
                moreInfo(info,flag,calendar)
            },

            dateClick: function (info) {
                const startDay = info.dateStr;
                const endDay = info.dateStr;
                enrollment(info, list, calendar, startDay, endDay)
            },

            select: function (info) {
                const startDay = info.startStr;
                const endDay = info.endStr;
                enrollment(info, list, calendar, startDay, endDay)
            },

            locale: 'ko',

        });
        calendar.setOption('locale', 'kr');
        calendar.render();


    });
}

export default view;