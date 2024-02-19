import { DatepickerContentProps } from '../Datepicker.types';

import { Days } from './Days';
import { Months } from './Months';
import { Years } from './Years';

export function DatepickerContent({
  viewMode,
  activeDate,
  selectedDate,
  dateValue,
  config,
  variant,
  range,
  date,
  stringOutput,
  onChangeViewMode,
  onChangeActiveDate,
  onChangeSelectedDate,
  onChangeDateValue,
  onOpen,
  onError,
  onChangeDate,
}: DatepickerContentProps) {
  return (
    <>
      {viewMode === 1 && (
        <Days
          activeDate={activeDate}
          selectedDate={selectedDate}
          dateValue={dateValue}
          config={config}
          variant={variant}
          range={range}
          date={date}
          stringOutput={stringOutput}
          onChangeViewMode={onChangeViewMode}
          onChangeActiveDate={onChangeActiveDate}
          onChangeSelectedDate={onChangeSelectedDate}
          onChangeDateValue={onChangeDateValue}
          onOpen={onOpen}
          onError={onError}
          onChangeDate={onChangeDate}
        />
      )}
      {viewMode === 2 && (
        <Years
          activeDate={activeDate}
          // @ts-expect-error startDate will always exist if range is true
          selectedDate={range ? selectedDate?.startDate : selectedDate}
          range={range}
          variant={variant}
          config={config}
          onChangeViewMode={onChangeViewMode}
          onChangeActiveDate={onChangeActiveDate}
          onChangeSelectedDate={onChangeSelectedDate}
        />
      )}
      {viewMode === 3 && (
        <Months
          activeDate={activeDate}
          // @ts-expect-error startDate will always exist if range is true
          selectedDate={range ? selectedDate?.startDate : selectedDate}
          range={range}
          config={config}
          variant={variant}
          onChangeViewMode={onChangeViewMode}
          onChangeActiveDate={onChangeActiveDate}
          onChangeSelectedDate={onChangeSelectedDate}
        />
      )}
    </>
  );
}
