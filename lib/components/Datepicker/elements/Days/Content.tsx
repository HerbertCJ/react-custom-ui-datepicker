import React from 'react';
import {
  startOfWeek,
  format,
  addDays,
  isSameMonth,
  isBefore,
  subMonths,
  addMonths,
  isSameDay,
  setHours,
  setMinutes,
  setSeconds,
} from 'date-fns';

import { DatepickerHelper } from '../../Datepicker.helper';
import { DatepickerDayContentProps } from '../../Datepicker.types';
import * as S from '../../Datepicker.styles';

export function Content({
  activeDate,
  selectedDate,
  config,
  variant,
  hideActions,
  onChangeActiveDate,
  onChangeSelectedDate,
  onChangeDateValue,
  onOpen,
  onError,
}: DatepickerDayContentProps) {
  const dateFormat = config?.dateFormat || 'MM/dd/yyyy';
  const daysOfWeekFormat = config?.calendarFormat?.daysOfWeekFormat || 'EEEEEE';

  const getWeekDaysNames = () => {
    const weekStartDate = startOfWeek(activeDate);
    const weekDays = [];

    for (let day = 0; day < 7; day++) {
      weekDays.push(
        <S.DayOfWeekNames key={day}>
          {format(addDays(weekStartDate, day), daysOfWeekFormat)}
        </S.DayOfWeekNames>,
      );
    }

    return <S.WeekContainer>{weekDays}</S.WeekContainer>;
  };

  const getDays = () => {
    const { firstMonthDay, lastMonthDay } = DatepickerHelper.getFirstLastDayOfMonth(activeDate);

    let currentDate = firstMonthDay;

    const allWeeks = [];

    while (currentDate <= lastMonthDay) {
      // @ts-expect-error will use single date
      allWeeks.push(generateDatesForCurrentWeek(currentDate, selectedDate, activeDate));
      currentDate = addDays(currentDate, 7);
    }

    return (
      <S.WeekContainer>
        {allWeeks.map((week, index) => (
          <React.Fragment key={index}>{week}</React.Fragment>
        ))}
      </S.WeekContainer>
    );
  };

  const generateDatesForCurrentWeek = (date: Date, selectedDate: Date, activeDate: Date) => {
    let currentDate = date;
    const week = [];

    const handleDateClick = (clickedDate: Date) => {
      if (!config?.calendarStyles?.hideInactiveDays && !isSameMonth(clickedDate, activeDate)) {
        if (isBefore(clickedDate, activeDate)) {
          onChangeActiveDate(subMonths(activeDate, 1));
        } else {
          onChangeActiveDate(addMonths(activeDate, 1));
        }
      }

      const currentTime = new Date();

      const updatedDateTime = setSeconds(
        setMinutes(setHours(clickedDate, currentTime.getHours()), currentTime.getMinutes()),
        currentTime.getSeconds(),
      );

      onChangeSelectedDate(updatedDateTime);

      if (hideActions) {
        onChangeDateValue(format(updatedDateTime, dateFormat));
        onOpen(false);
        onError(false);
      }
    };

    for (let day = 0; day < 7; day++) {
      const cloneDate = currentDate;

      week.push(
        <S.WeekWrapper
          key={day}
          config={config}
          variant={variant}
          isInactive={!isSameMonth(currentDate, activeDate)}
          isSelected={isSameDay(currentDate, selectedDate)}
          isToday={isSameDay(currentDate, new Date())}
          onClick={() => handleDateClick(cloneDate)}
        >
          {format(currentDate, 'd')}
        </S.WeekWrapper>,
      );

      currentDate = addDays(currentDate, 1);
    }

    return <>{week}</>;
  };

  return (
    <S.DatepickerContent>
      {getWeekDaysNames()}
      {getDays()}
    </S.DatepickerContent>
  );
}
