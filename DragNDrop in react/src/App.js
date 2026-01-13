import logo from './logo.svg';
import './App.css';

import FullCalendar from '@fullcalendar/react'
import { dayGridPlugin } from '@fullcalendar/daygrid'
import { timeGridPlugin } from "@fullcalendar/timegrid";
import { interactionPlugin } from '@fullcalendar/interaction'

function App() {
  return (
    <div className="demo-app-calendar">
     <FullCalendar 
      // defaultView="dayGridMonth" 
      // plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      // editable={true}
      defaultView="timeGridWeek"
      header={{
        left: "prev,next today",
        center: "title",
        right: "timeGridWeek,timeGridDay,listWeek"
      }}
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      ref={this.calendarComponentRef}
      // eventDrop={this.handleEventDrop}
      // eventClick={this.handleEventClick}
      // events={this.formatEvents()}
      events={[
        { title: 'event 1', date: '2021-08-04', color:'red' },
        { title: 'event 2', date: '2021-08-04', color:'red'},
        { title: 'event 1', date: '2021-08-05', color:'green' },
        { title: 'event 2', date: '2021-08-05', color:'green'}
      ]}
    />
    </div>
  )

}

export default App;
