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
  range,
  onChangeActiveDate,
  onChangeSelectedDate,
  onChangeViewMode,
}: DatepickerYearAndMonthContentProps) {
  const { startYear, endYear } = DatepickerHelper.getRangeOfYears(activeDate);

  const years = [];

  for (let year = startYear; year <= endYear; year++) {
    const cloneDate = setYear(activeDate, year);

    years.push(
      <S.YearsWrapper
        key={year}
        $config={config}
        $variant={variant}
        $isToday={year === getYear(new Date())}
        $isSelected={year === getYear(selectedDate as Date)}
        onClick={() => {
          onChangeActiveDate(cloneDate);
          onChangeSelectedDate(
            range ? { startDate: cloneDate, endDate: cloneDate } : cloneDate
          );
          onChangeViewMode(ViewModeEnum.MONTHS);
        }}
      >
        {format(cloneDate, "yyyy")}
      </S.YearsWrapper>
    );
  }

  return <S.YearContent>{years}</S.YearContent>;
}
