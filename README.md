# react-jalali-picker

A React component library for selecting dates, featuring both a DatePicker and a RangePicker that support Jalali and Gregorian calendars.

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

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div>
      <DatePicker value={selectedDate} onChange={setSelectedDate} />
    </div>
  );
};

export default App;
```

## DatePicker Props Table

| Prop       | Type          | Required       | Default Value | Description |
| ---------- | ------------- | -------------- | ------------- | ----------- | ------------------------------------------------------- |
| `value`    | `Dayjs        | null`          | YES           | `null`      | The currently selected date.                            |
| `onChange` | `(date: Dayjs | null) => void` | YES           | -           | Callback function that is called when the date changes. |

## RangePicker Usage

```jsx
import React, { useState } from "react";
import { RangePicker } from "react-jalali-picker";

const App = () => {
  const [selectedRange, setSelectedRange] = useState(null);

  return (
    <div>
      <RangePicker value={selectedRange} onChange={setSelectedRange} />
    </div>
  );
};

export default App;
```

## RangePicker Props Table

| Prop       | Type              | Required | Default Value | Description                                             |
| ---------- | ----------------- | -------- | ------------- | ------------------------------------------------------- |
| `value`    | `Dayjs            | YES      | -             | The currently selected date.                            |
| `onChange` | `(range) => void` | YES      | -             | Callback function that is called when the date changes. |

## Author

- [Behzad Bakhshayesh](https://github.com/behzadbakhshayesh)