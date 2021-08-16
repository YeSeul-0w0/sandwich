import {Calendar} from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import {enrollment} from "./enrollment.js";

function view() {
    document.addEventListener('DOMContentLoaded', function () {
        const calendarEl = document.getElementById('calendar');

        const eventList = []
        const prevList=localStorage.getItem('event')
        if (prevList){
            let arry=JSON.parse(prevList)
            for (let i=0; i<arry.length; i++){
                eventList.push(arry[i])
            }
        }

        const calendar = new Calendar(calendarEl, {
            selectable: true,
            plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
            },

            dateClick:function (info){
                const startDay = info.dateStr;
                const endDay=info.dateStr;
                enrollment(info,eventList,calendar,startDay,endDay)
            },

            select:function (info){
                const startDay = info.startStr;
                const endDay=info.endStr;
                enrollment(info,eventList,calendar,startDay,endDay)
            },

            
            customButtons: {
                addEventButton: {
                    text: 'add event...',
                    click: function () {
                    }
                }
            },
            locale: 'ko',

        });
        calendar.setOption('locale', 'kr');
        calendar.render();

    });
}

export default view;