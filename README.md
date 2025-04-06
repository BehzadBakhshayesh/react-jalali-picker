# React Jalali (Date or Range) Picker

A React component library for selecting dates, featuring both a DatePicker and a RangePicker that support Jalali and Gregorian calendars.

## 🚀 Live Demo
[![Open in GitHub Pages](https://img.shields.io/badge/Live%20Demo-%F0%9F%9A%80-blue?style=for-the-badge)](https://behzadbakhshayesh.github.io/react-jalali-picker-doc/)

![React Jalali Picker](https://private-user-images.githubusercontent.com/78230424/430742350-87ceb866-7d2a-468b-b99a-461772d56341.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDM5NzYzOTAsIm5iZiI6MTc0Mzk3NjA5MCwicGF0aCI6Ii83ODIzMDQyNC80MzA3NDIzNTAtODdjZWI4NjYtN2QyYS00NjhiLWI5OWEtNDYxNzcyZDU2MzQxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA0MDYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNDA2VDIxNDgxMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTJkM2FhNDFhMGU5YmEwYWQ4MzM5YWI3MDZmOTg1YTFiNmQ3NzIzYzk1ODNhYWQ5YTZkMDZhYzMzYjZhNDhhMTEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.wVvnkU4fv6N7MYi3X3nc7tv5VaFPPDTcmj0rNSz4T8U)


## Installation

To install the `react-jalali-picker` package, use npm or yarn:

```bash
npm install react-jalali-picker
# or
yarn add react-jalali-picker
```

## DatePicker Usage

```jsx
import React, { useState } from "react";
import { DatePicker } from "react-jalali-picker";
import "react-jalali-picker/dist/styles.css";

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div>
      <DatePicker value={selectedDate} onChange={(date)=>setSelectedDate(date)} />
    </div>
  );
};

export default App;
```

## DatePicker Props

| Prop name    | Type                                                            | Required | Default Value | Description                                                     |
| ------------ | --------------------------------------------------------------- | -------- | ------------- | --------------------------------------------------------------- |
| value        | `Dayjs \| null`                                                 | Yes      | `null`        | The currently selected date range as a Dayjs object.            |
| onChange     | `(range: { start: Dayjs \| null; end: Dayjs \| null }) => void` | Yes      | `undefined`   | Callback function called when the date range is updated.        |
| locale       | `"fa"`  or `"en"`                                               | No       | `"fa"`        | Sets the locale for displaying dates; defaults to Persian (fa). |
| calendarType | `"jalali"` or  `"gregory"`                                      | No       | `"jalali"`    | Determines which calendar system to use for date selection.     |
| direction    | `"rtl"`  or `"ltr"`                                             | No       | `"rtl"`       | Specifies the text direction; defaults to right-to-left (rtl).  |


## RangePicker Usage

```jsx
import React, { useState } from "react";
import { RangePicker  } from "react-jalali-picker";
import "react-jalali-picker/dist/styles.css";

const App = () => {
    const [dateRange, setDateRange] = useState({
    start: null,
    end: null,
  });

  return (
    <div>
      <RangePicker value={dateRange} onChange={(range)=>setDateRange(range)} />
    </div>
  );
};

export default App;
```

## RangePicker Props

| Prop         | Type                                                             | Required | Default Value | Description                                                     |
| ------------ | ---------------------------------------------------------------- | -------- | ------------- | --------------------------------------------------------------- |
| value        | `{ start: Dayjs \| null; end: Dayjs \| null; }`                  | Yes      | `null`        | The currently selected date range.                              |
| onChange     | `(range: { start: Dayjs \| null; end: Dayjs \| null; }) => void` | Yes      | `undefined`   | Callback function that is called when the date range changes.   |
| locale       | `"fa"`  or `"en"`                                                | No       | `"fa"`        | Sets the locale for displaying dates; defaults to Persian (fa). |
| calendarType | `"jalali"` or  `"gregory"`                                       | No       | `"jalali"`    | Determines which calendar system to use for date selection.     |
| direction    | `"rtl"`  or `"ltr"`                                              | No       | `"rtl"`       | Specifies the text direction; defaults to right-to-left (rtl).  |


## Author

- [Behzad Bakhshayesh](https://github.com/behzadbakhshayesh)