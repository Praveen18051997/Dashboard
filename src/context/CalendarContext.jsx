import {
  createContext,
  useContext,
  useState,
} from "react";

const CalendarContext = createContext();

const defaultCalendars = [
  {
    name: "Important",
    color: "text-red-500",
  },
  {
    name: "Meeting",
    color: "text-cyan-500",
  },
  {
    name: "Event",
    color: "text-green-500",
  },
  {
    name: "Work",
    color: "text-yellow-500",
  },
  {
    name: "Other",
    color: "text-gray-500",
  },
];

export const CalendarProvider = ({
  children,
}) => {
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [calendarTypes, setCalendarTypes] =
    useState(() => {
      const saved = localStorage.getItem(
        "calendar-types"
      );

      return saved
        ? JSON.parse(saved)
        : defaultCalendars;
    });

  return (
    <CalendarContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,

        calendarTypes,
        setCalendarTypes,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

export const useCalendar = () =>
  useContext(CalendarContext);