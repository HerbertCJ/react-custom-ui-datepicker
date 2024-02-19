import { Fragment, useState } from 'react';
import {
  startOfWeek,
  format,
  addDays,
  isSameMonth,
  isBefore,
  subMonths,
  addMonths,
  isSameDay,
  isAfter,
  setHours,
  setMinutes,
  setSeconds,
  isEqual,
} from 'date-fns';

import { DatepickerDayContentProps } from '../../Datepicker.types';
import { DatepickerHelper } from '../../Datepicker.helper';
import * as S from '../../Datepicker.styles';

export function RangeContent({
  activeDate,
  selectedDate,
  config,
  variant,
  hideActions,
  date: stateDate,
  onChangeActiveDate,
  onChangeSelectedDate,
  onChangeDateValue,
  onOpen,
  onError,
  onChangeDate,
}: DatepickerDayContentProps) {
  const [hoveredDate, setHoveredDate] = useState<Date | null>(null);
  const dateFormat = config?.dateFormat || 'MM/dd/yyyy';

  const getWeekDaysNames = () => {
    const weekStartDate = startOfWeek(activeDate);
    const weekDays = [];

    for (let day = 0; day < 7; day++) {
      weekDays.push(
        <S.DayOfWeekNames key={day}>
          {format(addDays(weekStartDate, day), 'EEEEEE')}
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
      allWeeks.push(generateDatesForCurrentWeek(currentDate, selectedDate, activeDate));
      currentDate = addDays(currentDate, 7);
    }

    return (
      <S.WeekContainer>
        {allWeeks.map((week, index) => (
          <Fragment key={index}>{week}</Fragment>
        ))}
      </S.WeekContainer>
    );
  };

  const generateDatesForCurrentWeek = (date: Date, selectedDate: any, activeDate: any) => {
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

      if (
        clickedDate < selectedDate.startDate ||
        (selectedDate.startDate && selectedDate.endDate)
      ) {
        onChangeSelectedDate({ startDate: updatedDateTime, endDate: null });
      } else {
        onChangeSelectedDate({
          startDate: selectedDate.startDate,
          endDate: updatedDateTime,
        });

        if (hideActions) {
          const startDate = format(selectedDate.startDate, dateFormat);
          const endDate = format(updatedDateTime ?? '', dateFormat);
          onChangeDateValue(`${startDate} - ${endDate}`);
          if (
            !isEqual(selectedDate?.startDate, stateDate?.startDate) &&
            !isEqual(updatedDateTime, stateDate?.endDate)
          ) {
            if (onChangeDate) {
              onChangeDate({ startDate: selectedDate.startDate, endDate: updatedDateTime });
            }
          }
          onOpen(false);
          onError(false);
        }
      }
    };

    for (let day = 0; day < 7; day++) {
      const cloneDate = currentDate;

      week.push(
        <S.WeekWrapper
          key={day}
          $config={config}
          $variant={variant}
          $isInactive={!isSameMonth(currentDate, activeDate)}
          $isSelected={
            isSameDay(currentDate, selectedDate.startDate) ||
            isSameDay(currentDate, selectedDate.endDate)
          }
          $isInsideRange={
            (!selectedDate.endDate &&
              hoveredDate !== null &&
              currentDate < hoveredDate &&
              currentDate > selectedDate.startDate) ||
            (isAfter(currentDate, selectedDate.startDate) &&
              isBefore(currentDate, selectedDate.endDate))
          }
          onMouseOver={() => setHoveredDate(cloneDate)}
          $isToday={isSameDay(currentDate, new Date())}
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
