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
  isRange,
  onChangeViewMode,
  onChangeActiveDate,
  onChangeSelectedDate,
  onChangeDateValue,
  onOpen,
  onError,
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
          isRange={isRange}
          onChangeViewMode={onChangeViewMode}
          onChangeActiveDate={onChangeActiveDate}
          onChangeSelectedDate={onChangeSelectedDate}
          onChangeDateValue={onChangeDateValue}
          onOpen={onOpen}
          onError={onError}
        />
      )}
      {viewMode === 2 && (
        <Years
          activeDate={activeDate}
          // @ts-expect-error startDate will always exist if isRange is true
          selectedDate={isRange ? selectedDate?.startDate : selectedDate}
          isRange={isRange}
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
          // @ts-expect-error startDate will always exist if isRange is true
          selectedDate={isRange ? selectedDate?.startDate : selectedDate}
          isRange={isRange}
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
