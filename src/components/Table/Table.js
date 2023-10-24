import React from "react";
import "./Table.css";
import { GetWeekDays } from "../../helpers/getWeekDays";
import { GetDayHours } from "../../helpers/getDayHours";

function Table() {
  const days = GetWeekDays();
  const hours = GetDayHours();
  const schedule = [
    {
      time: "06:00:00",
      Lunes: "Sin clase",
      Martes: "Sin clase",
      Miércoles: "Sin clase",
      Jueves: "Sin clase",
      Viernes: "Sin clase",
      Sábado: "Sin clase",
      Domingo: "Sin clase",
    },
    {
      time: "07:00:00",
      Lunes: "Lengua Materna",
      Martes: "Sin clase",
      Miércoles: "Sin clase",
      Jueves: "Sin clase",
      Viernes: "Sin clase",
      Sábado: "Sin clase",
      Domingo: "Sin clase",
    },
    {
      time: "08:00:00",
      Lunes: "Lengua Materna",
      Martes: "Sin clase",
      Miércoles: "Sin clase",
      Jueves: "Sin clase",
      Viernes: "Sin clase",
      Sábado: "Sin clase",
      Domingo: "Sin clase",
    },
    {
      time: "09:00:00",
      Lunes: "Sin clase",
      Martes: "Sin clase",
      Miércoles: "Sin clase",
      Jueves: "Sin clase",
      Viernes: "Sin clase",
      Sábado: "Sin clase",
      Domingo: "Sin clase",
    },
    {
      time: "10:00:00",
      Lunes: "Sin clase",
      Martes: "Sin clase",
      Miércoles: "Sin clase",
      Jueves: "Sin clase",
      Viernes: "Sin clase",
      Sábado: "Sin clase",
      Domingo: "Sin clase",
    },
    {
      time: "11:00:00",
      Lunes: "Sin clase",
      Martes: "Sin clase",
      Miércoles: "Sin clase",
      Jueves: "Sin clase",
      Viernes: "Sin clase",
      Sábado: "Sin clase",
      Domingo: "Sin clase",
    },
    {
      time: "12:00:00",
      Lunes: "Sin clase",
      Martes: "Sin clase",
      Miércoles: "Sin clase",
      Jueves: "Sin clase",
      Viernes: "Sin clase",
      Sábado: "Sin clase",
      Domingo: "Sin clase",
    },
    {
      time: "13:00:00",
      Lunes: "Sin clase",
      Martes: "Sin clase",
      Miércoles: "Sin clase",
      Jueves: "Sin clase",
      Viernes: "Sin clase",
      Sábado: "Sin clase",
      Domingo: "Sin clase",
    },
    {
      time: "14:00:00",
      Lunes: "Sin clase",
      Martes: "Sin clase",
      Miércoles: "Sin clase",
      Jueves: "Sin clase",
      Viernes: "Sin clase",
      Sábado: "Sin clase",
      Domingo: "Sin clase",
    },
    {
      time: "15:00:00",
      Lunes: "Sin clase",
      Martes: "Sin clase",
      Miércoles: "Sin clase",
      Jueves: "Sin clase",
      Viernes: "Sin clase",
      Sábado: "Sin clase",
      Domingo: "Sin clase",
    },
    {
      time: "16:00:00",
      Lunes: "Sin clase",
      Martes: "Sin clase",
      Miércoles: "Sin clase",
      Jueves: "Sin clase",
      Viernes: "Sin clase",
      Sábado: "Sin clase",
      Domingo: "Sin clase",
    },
    {
      time: "17:00:00",
      Lunes: "Sin clase",
      Martes: "Sin clase",
      Miércoles: "Sin clase",
      Jueves: "Sin clase",
      Viernes: "Sin clase",
      Sábado: "Sin clase",
      Domingo: "Sin clase",
    },
    {
      time: "18:00:00",
      Lunes: "Sin clase",
      Martes: "Sin clase",
      Miércoles: "Sin clase",
      Jueves: "Sin clase",
      Viernes: "Sin clase",
      Sábado: "Sin clase",
      Domingo: "Sin clase",
    },
    {
      time: "19:00:00",
      Lunes: "Sin clase",
      Martes: "Sin clase",
      Miércoles: "Sin clase",
      Jueves: "Sin clase",
      Viernes: "Sin clase",
      Sábado: "Sin clase",
      Domingo: "Sin clase",
    },
  ];
  const getSubjectForHourAndDay = (hour, day) => {
    const found = schedule.find(
      (item) => item.time === hour && item[day] !== "Sin clase"
    );
    return found ? found[day] : "Sin clase";
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th className="sticky-column">Horas</th>
            {days.map((day, index) => (
              <th key={index}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {hours.map((hour, index) => (
            <tr key={index}>
              <td className="sticky-column">{hour}</td>
              {days.map((day) => (
                <td key={day}>{getSubjectForHourAndDay(hour, day)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
