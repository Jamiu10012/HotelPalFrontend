import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import Badge from "@mui/material/Badge";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
// import CloseIcon from "@mui/icons-material/Close";
import { IoCloseSharp } from "react-icons/io5";
import format from "date-fns/format";

const startDate = new Date("2024-01-27");
const endDate = new Date("2024-02-02");
const Bdates = [];

// Iterate through the range of dates and push each date to the dates array
for (
  let currentDate = startDate;
  currentDate <= endDate;
  currentDate.setDate(currentDate.getDate() + 1)
) {
  // Convert the current date to the desired format (YYYY-MM-DD)
  const formattedDate = currentDate.toISOString().split("T")[0];

  // Push the formatted date to the dates array
  Bdates.push(formattedDate);
}

// console.log(Bdates);

const dates = Bdates;

const Calendar = ({ value, setValue, handleDateChange }) => {
  const [highlightedDays, setHighlightedDays] = useState([]);

  useEffect(() => {
    // Convert date strings to Date objects and extract day and month numbers
    const dayAndMonthNumbers = dates.map((dateString) => {
      const date = new Date(dateString);
      return { day: date.getDate(), month: date.getMonth() };
    });

    setHighlightedDays(dayAndMonthNumbers);
  }, []);

  const formattedDate =
    value !== "YYYY-MM-DD" ? format(value, "yyyy-MM-dd") : "";
  //   console.log(highlightedDays);

  return (
    <div className="csd">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          variant=""
          orientation="portrait"
          value={formattedDate}
          //   disableFuture
          onChange={(newValue) => {
            const selectedDate = format(newValue, "yyyy-MM-dd");
            if (Bdates.includes(selectedDate)) {
              console.log(`Booked already ${newValue}`);
            } else {
              setValue(newValue);
              handleDateChange(newValue);
            }
          }}
          renderInput={(params) => (
            // Corrected: Use parentheses to return the TextField component
            <TextField {...params} />
          )}
          renderDay={(day, _value, DayComponentProps) => {
            const isHighlighted = highlightedDays.some(
              (highlightedDay) =>
                highlightedDay.day === day.getDate() &&
                highlightedDay.month === day.getMonth()
            );
            // const isSelectedDate = Bdates.includes(format(day, "yyyy-MM-dd"));
            // console.log(isSelectedDate);
            // if (isSelectedDate) {
            //   console.log("Booked already");
            // }
            return (
              <Badge
                key={day.toString()}
                overlap="circular"
                badgeContent={
                  isHighlighted ? (
                    <IoCloseSharp className="cls-cnn" />
                  ) : undefined
                }
              >
                <PickersDay {...DayComponentProps} />
              </Badge>
            );
          }}
        />
      </LocalizationProvider>
    </div>
  );
};

export default Calendar;
