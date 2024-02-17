import { Content } from "./Content";
import { Header } from "./Header";

import { DatepickerMonthAndYearProps } from "../../Datepicker.types";
import * as S from "../../Datepicker.styles";

export function Months({
  activeDate,
  selectedDate,
  config,
  variant,
  isRange,
  onChangeActiveDate,
  onChangeSelectedDate,
  onChangeViewMode,
}: DatepickerMonthAndYearProps) {
  return (
    <S.Datepicker>
      <Header
        activeDate={activeDate}
        onChangeActiveDate={onChangeActiveDate}
        onChangeViewMode={onChangeViewMode}
      />
      <Content
        isRange={isRange}
        config={config}
        variant={variant}
        activeDate={activeDate}
        selectedDate={selectedDate}
        onChangeActiveDate={onChangeActiveDate}
        onChangeSelectedDate={onChangeSelectedDate}
        onChangeViewMode={onChangeViewMode}
      />
    </S.Datepicker>
  );
}
