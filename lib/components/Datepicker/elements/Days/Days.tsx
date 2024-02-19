import { Header } from './Header';
import { Content } from './Content';
import { DatepickerAction } from '../DatepickerAction';

import { DatepickerDayProps } from '../../Datepicker.types';
import { RangeContent } from './RangeContent';
import * as S from '../../Datepicker.styles';

export function Days({
  activeDate,
  dateValue,
  selectedDate,
  config,
  variant,
  range,
  date,
  stringOutput,
  onChangeActiveDate,
  onChangeDateValue,
  onChangeSelectedDate,
  onChangeViewMode,
  onOpen,
  onError,
  onChangeDate,
}: DatepickerDayProps) {
  return (
    <S.Datepicker>
      <Header
        activeDate={activeDate}
        config={config}
        onChangeActiveDate={onChangeActiveDate}
        onChangeViewMode={onChangeViewMode}
      />
      {range ? (
        <RangeContent
          activeDate={activeDate}
          selectedDate={selectedDate}
          config={config}
          variant={variant}
          date={date}
          stringOutput={stringOutput}
          hideActions={config?.calendarFormat?.hideActionButtons}
          onChangeActiveDate={onChangeActiveDate}
          onChangeSelectedDate={onChangeSelectedDate}
          onChangeDateValue={onChangeDateValue}
          onOpen={onOpen}
          onError={onError}
          onChangeDate={onChangeDate}
        />
      ) : (
        <Content
          activeDate={activeDate}
          selectedDate={selectedDate}
          config={config}
          variant={variant}
          date={date}
          stringOutput={stringOutput}
          hideActions={config?.calendarFormat?.hideActionButtons}
          onChangeActiveDate={onChangeActiveDate}
          onChangeSelectedDate={onChangeSelectedDate}
          onChangeDateValue={onChangeDateValue}
          onOpen={onOpen}
          onError={onError}
          onChangeDate={onChangeDate}
        />
      )}
      {!config?.calendarFormat?.hideActionButtons && (
        <DatepickerAction
          selectedDate={selectedDate}
          dateValue={dateValue}
          variant={variant}
          config={config}
          range={range}
          date={date}
          stringOutput={stringOutput}
          onChangeDateValue={onChangeDateValue}
          onChangeActiveDate={onChangeActiveDate}
          onChangeSelectedDate={onChangeSelectedDate}
          onOpen={onOpen}
          onError={onError}
          onChangeDate={onChangeDate}
        />
      )}
    </S.Datepicker>
  );
}
