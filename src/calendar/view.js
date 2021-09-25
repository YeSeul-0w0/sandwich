import {Calendar} from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import {enrollment} from "./enrollment.js";
import {moreInfo} from "./moreInfo";
import {loadEvent} from "./loadEvent";
import {today} from "./today";

function view() {

    document.addEventListener('DOMContentLoaded', function () {

        const calendarEl = document.getElementById('calendar');

        const list=loadEvent();




        const calendar = new Calendar(calendarEl, {
            events: list,
            eventColor: '#b6b8c3',
            selectable: true,
            aspectRatio: 1.3,
            plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
            headerToolbar: {
                left: 'today',
                center: 'title',
                right: 'prev,next'
            },

            eventClick: function (info) {
                moreInfo(info,calendar)
            },

            dateClick: function (info) {
                const startDay = info.dateStr;
                const endDay = info.dateStr;
                enrollment(info, calendar, startDay, endDay)
            },

            select: function (info) {
                const startDay = info.startStr;
                const endDay = info.endStr;
                enrollment(info, calendar, startDay, endDay)
            },
            locale: 'ko',
            progressiveEventRendering: true,

            themeSystem: 'bootstrap'
        });

        today(list,calendar);

        calendar.setOption('locale', 'kr');
        calendar.render();


    });
}

export default view;