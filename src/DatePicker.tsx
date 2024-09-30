


import React, { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import jalaliday from "jalaliday";
import calendar from "dayjs/plugin/calendar";
import localeData from "dayjs/plugin/localeData";
import clsx from "clsx";

dayjs.extend(localeData);
dayjs.extend(calendar);
dayjs.extend(jalaliday);
dayjs["calendar"]?.("jalali");
dayjs.locale("fa");

const locale = "fa";

interface PropsType {
  value: Dayjs | null;
  onChange: (date: Dayjs | null) => void;
}

 const DatePicker: React.FC<PropsType> = ({
  value: selectedDate,
  onChange,
}) => {
  const [currentMonth, setCurrentMonth] = useState<Dayjs>(
    dayjs().locale(locale)
  );
  const getWeekdays: string[] = (() => {
    dayjs.locale(locale);
    const localeData = dayjs().localeData();
    const weekdaysMin = localeData.weekdaysMin();
    const firstDayOfWeek = localeData.firstDayOfWeek();
    const orderedWeekdays: string[] = [];

    for (let i = 0; i < 7; i++) {
      orderedWeekdays.push(weekdaysMin[(i + firstDayOfWeek) % 7]);
    }
    return orderedWeekdays;
  })();

  const handleDayClick = (day: number, month: Dayjs) => {
    const selectedDate = month.date(day);
    onChange(selectedDate);
  };

  const renderDays = (month: Dayjs) => {
    const daysInMonth = month.daysInMonth();
    const firstDayOfMonth =
      locale === "fa"
        ? (month.startOf("month").day() + 1) % 7
        : month.startOf("month").day();

    const prevMonth = month.subtract(1, "month");
    const nextMonth = month.add(1, "month");

    const daysInPrevMonth = prevMonth.daysInMonth();
    const daysArray: JSX.Element[] = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      const day = daysInPrevMonth - firstDayOfMonth + i + 1;
      daysArray.push(
        <div key={`prev-${prevMonth}-${day}`} className="day disabled-day">
          {day}
        </div>
      );
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = month.date(day);
      const isSelected = selectedDate && date.isSame(selectedDate, "day");

      daysArray.push(
        <div
          key={day}
          className={clsx("day", { isSelected })}
          onClick={handleDayClick.bind(null, day, month)}
        >
          {day}
        </div>
      );
    }

    const totalCells = firstDayOfMonth + daysInMonth;
    const emptyCellsAfter = 42 - totalCells;

    for (let i = 1; i <= emptyCellsAfter; i++) {
      daysArray.push(
        <div key={`next-${nextMonth}-${i}`} className="day disabled-day">
          {i}
        </div>
      );
    }

    return daysArray;
  };

  const headerBtns = (next: boolean, unit: "month" | "year") => {
    if (next) {
      setCurrentMonth(currentMonth.add(1, unit));
    } else {
      setCurrentMonth(currentMonth.subtract(1, unit));
    }
  };

  return (
    <>
      <div className="custom-date-picker-wrapper">
        <div className="current-month">
          <div className="calendar-header">
            <div className="prv-btns">
              <button onClick={headerBtns.bind(null, false, "year")}>‹‹</button>
              <button onClick={headerBtns.bind(null, false, "month")}>‹</button>
            </div>
            <div className="month-year-header">
              {currentMonth.format("MMMM YYYY")}
            </div>
            <div className="next-btns">
              <button onClick={headerBtns.bind(null, true, "month")}>›</button>
              <button onClick={headerBtns.bind(null, true, "year")}>››</button>
            </div>
          </div>
          <div className="calendar-grid">
            {getWeekdays.map((day) => (
              <div key={day} className="day-name">
                {day}
              </div>
            ))}
            {renderDays(currentMonth)}
          </div>
        </div>
      </div>
    </>
  );
};

export default DatePicker