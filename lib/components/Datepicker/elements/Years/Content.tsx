import { getYear, setYear, format } from "date-fns";

import {
  DatepickerYearAndMonthContentProps,
  ViewModeEnum,
} from "../../Datepicker.types";
import { DatepickerHelper } from "../../Datepicker.helper";
import * as S from "../../Datepicker.styles";

export function Content({
  activeDate,
  selectedDate,
  config,
  variant,
  isRange,
  onChangeActiveDate,
  onChangeSelectedDate,
  onChangeViewMode,
}: DatepickerYearAndMonthContentProps) {
  const { startYear, endYear } = DatepickerHelper.getRangeOfYears(activeDate);

  const years = [];

  for (let year = startYear; year <= endYear; year++) {
    const cloneDate = setYear(activeDate, year);

    years.push(
      <S.WeekWrapper
        key={year}
        config={config}
        variant={variant}
        isToday={year === getYear(new Date())}
        isSelected={year === getYear(selectedDate as Date)}
        onClick={() => {
          onChangeActiveDate(cloneDate);
          onChangeSelectedDate(
            isRange ? { startDate: cloneDate, endDate: cloneDate } : cloneDate
          );
          onChangeViewMode(ViewModeEnum.MONTHS);
        }}
      >
        {format(cloneDate, "yyyy")}
      </S.WeekWrapper>
    );
  }

  return <S.YearContent>{years}</S.YearContent>;
}
