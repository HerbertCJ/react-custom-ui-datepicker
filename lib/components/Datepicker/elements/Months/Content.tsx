import { getYear, setMonth, getMonth, format } from 'date-fns';

import { DatepickerYearAndMonthContentProps, ViewModeEnum } from '../../Datepicker.types';
import * as S from '../../Datepicker.styles';

export function Content({
  activeDate,
  selectedDate,
  config,
  variant,
  range,
  onChangeActiveDate,
  onChangeSelectedDate,
  onChangeViewMode,
}: DatepickerYearAndMonthContentProps) {
  const year = getYear(activeDate);
  const months = [];

  for (let month = 0; month < 12; month++) {
    const cloneDate = setMonth(activeDate, month);

    months.push(
      <S.YearsWrapper
        key={month}
        $variant={variant}
        $config={config}
        $isToday={month === getMonth(new Date()) && year === getYear(new Date())}
        $isSelected={
          month === getMonth(selectedDate as Date) && year === getYear(selectedDate as Date)
        }
        onClick={() => {
          onChangeActiveDate(cloneDate);
          onChangeSelectedDate(range ? { startDate: cloneDate, endDate: cloneDate } : cloneDate);
          onChangeViewMode(ViewModeEnum.DAYS);
        }}
      >
        <S.Month>{format(cloneDate, 'MMM')}</S.Month>
      </S.YearsWrapper>,
    );
  }

  return <S.YearContent>{months}</S.YearContent>;
}
