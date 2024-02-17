import { Header } from "./Header";
import { Content } from "./Content";
import { DatepickerAction } from "../DatepickerAction";

import { DatepickerDayProps } from "../../Datepicker.types";
import { RangeContent } from "./RangeContent";
import * as S from "../../Datepicker.styles";

export function Days({
  activeDate,
  dateValue,
  selectedDate,
  config,
  variant,
  range,
  onChangeActiveDate,
  onChangeDateValue,
  onChangeSelectedDate,
  onChangeViewMode,
  onOpen,
  onError,
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
          hideActions={config?.calendarFormat?.hideActionButtons}
          onChangeActiveDate={onChangeActiveDate}
          onChangeSelectedDate={onChangeSelectedDate}
          onChangeDateValue={onChangeDateValue}
          onOpen={onOpen}
          onError={onError}
        />
      ) : (
        <Content
          activeDate={activeDate}
          selectedDate={selectedDate}
          config={config}
          variant={variant}
          hideActions={config?.calendarFormat?.hideActionButtons}
          onChangeActiveDate={onChangeActiveDate}
          onChangeSelectedDate={onChangeSelectedDate}
          onChangeDateValue={onChangeDateValue}
          onOpen={onOpen}
          onError={onError}
        />
      )}
      {!config?.calendarFormat?.hideActionButtons && (
        <DatepickerAction
          selectedDate={selectedDate}
          dateValue={dateValue}
          variant={variant}
          config={config}
          range={range}
          onChangeDateValue={onChangeDateValue}
          onChangeActiveDate={onChangeActiveDate}
          onChangeSelectedDate={onChangeSelectedDate}
          onOpen={onOpen}
          onError={onError}
        />
      )}
    </S.Datepicker>
  );
}
