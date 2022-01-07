import React ,  { useState, useCallback }from 'react'
import CalendarP from "../images/calendar.png"
import '@natscale/react-calendar/dist/main.css';
import { Calendar } from '@natscale/react-calendar';
import '../css/calendar.css';
export default function RandevuAl() {

    const [value, setValue] = useState();

    const onChange = useCallback(
      (value) => {
        setValue(value);
      },
      [setValue],
    );
  return (
    <div className="calendar">
            <div className="calendarp">
        <img src={CalendarP} id='calendar-image'>
    
        </img>
        </div>
        <div className="calendar_t">
      <Calendar value={value} onChange={onChange} />
      <button className="calendar_btn">Randevu Al</button>
      </div>
    </div>
  )
}
