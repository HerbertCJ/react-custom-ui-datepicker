import { Content } from './Content';
import { Header } from './Header';

import { DatepickerMonthAndYearProps } from '../../Datepicker.types';
import * as S from '../../Datepicker.styles';

export function Months({
  activeDate,
  selectedDate,
  config,
  variant,
  range,
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
