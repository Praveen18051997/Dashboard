import { useEffect, useState } from "react";

import Layout from "../components/Layout";

import CalendarHeader from "../components/Calendar/CalendarHeader";
import CalendarToolbar from "../components/Calendar/CalendarToolbar";
import CalendarGrid from "../components/Calendar/CalendarGrid";
import WeekCalendar from "../components/Calendar/WeekCalendar";
import DayCalendar from "../components/Calendar/DayCalendar";
import AddEventModal from "../components/Calendar/AddEventModal";

import { defaultEvents } from "../components/Calendar/CalendarData";

import { useCalendar } from "../context/CalendarContext";

const Calendar = () => {
  // Shared Calendar Context
  const {
    calendarTypes,
  } = useCalendar();

  // Events
  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem(
      "calendar-events"
    );

    return saved
      ? JSON.parse(saved)
      : defaultEvents;
  });

  // September 2020 Demo

  const [currentDate, setCurrentDate] =
    useState(new Date(2020, 8, 1));

  // Month | Week | Day

  const [view, setView] =
    useState("Month");

  // Modal

  const [showModal, setShowModal] =
    useState(false);

  // Save Events

  useEffect(() => {
    localStorage.setItem(
      "calendar-events",
      JSON.stringify(events)
    );
  }, [events]);

  // Previous

  const previousMonth = () => {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        1
      )
    );
  };

  // Next

  const nextMonth = () => {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        1
      )
    );
  };

  // Today

  const goToday = () => {
    // Keep demo month

    setCurrentDate(
      new Date(2020, 8, 1)
    );
  };

  // Add Event

  const addEvent = (newEvent) => {
    setEvents((prev) => [
      ...prev,
      newEvent,
    ]);
  };

  return (
    <Layout>

      <CalendarHeader
        onAdd={() =>
          setShowModal(true)
        }
      />

      <div className="mt-6 overflow-hidden rounded-3xl bg-white shadow-sm">

        <CalendarToolbar
          currentDate={currentDate}
          previousMonth={previousMonth}
          nextMonth={nextMonth}
          goToday={goToday}
          view={view}
          setView={setView}
        />

        <div className="flex-1">

          {view === "Month" && (
            <CalendarGrid
              currentDate={currentDate}
              events={events}
            />
          )}

          {view === "Week" && (
            <WeekCalendar
              currentDate={currentDate}
              events={events}
            />
          )}

          {view === "Day" && (
            <DayCalendar
              currentDate={currentDate}
              events={events}
            />
          )}

        </div>

      </div>

      <AddEventModal
        open={showModal}
        onClose={() =>
          setShowModal(false)
        }
        onAddEvent={addEvent}
        calendarTypes={calendarTypes}
      />

    </Layout>
  );
};

export default Calendar;