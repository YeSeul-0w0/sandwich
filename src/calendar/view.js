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
          const startDay = document.getElementById("start").value;
          const endDay = document.getElementById("end").value;
          const id=eventList.length+1;

          eventList.push({id,title,startDay,endDay})
          localStorage.setItem("event",JSON.stringify(eventList));
          const startDate = new Date(startDay + 'T00:00:00');
          const endDate = new Date(endDay + 'T00:00:00');

          if (!isNaN(startDate.valueOf()) && !isNaN(endDate.valueOf())) {
            console.log(startDay,endDay)
            calendar.addEvent({
              title: title,
              start: startDate,
              end:endDate,
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