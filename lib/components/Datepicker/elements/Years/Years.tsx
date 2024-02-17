import { Header } from "./Header";
import { Content } from "./Content";

import { DatepickerMonthAndYearProps } from "../../Datepicker.types";
import * as S from "../../Datepicker.styles";

export function Years({
  activeDate,
  selectedDate,
  config,
  variant,
  range,
  onChangeViewMode,
  onChangeSelectedDate,
  onChangeActiveDate,
}: DatepickerMonthAndYearProps) {
  return (
    <S.Datepicker>
      <Header
        activeDate={activeDate}
        onChangeActiveDate={onChangeActiveDate}
        onChangeViewMode={onChangeViewMode}
      />
      <Content
        range={range}
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
