import { Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

function view(){
    document.addEventListener('DOMContentLoaded', function() {
  const calendarEl = document.getElementById('calendar');

  // const name = document.getElementById('input').value;
      const eventList=[]
  const calendar = new Calendar(calendarEl, {
    plugins: [ interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin ],
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    footerToolbar:{
      center:'addEventButton'
    },
    customButtons: {
      addEventButton: {
        text: 'add event...',
        click: function() {
          const title=document.getElementById('title').value;
          const day = document.getElementById("date").value;
          const id=eventList.length+1;

          eventList.push({id,title,day})
          localStorage.setItem("event",JSON.stringify(eventList));
          const date = new Date(day + 'T00:00:00'); // will be in local time

          if (!isNaN(date.valueOf())) { // valid?
            calendar.addEvent({
              title: title,
              start: date,
              allDay: true
            });
            alert('등록 완료');
          } else {
            alert('값을 입력해주세요');
          }
        }
      }
    }
  });

  calendar.render();
});
}

export default view;