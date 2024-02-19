// @ts-nocheck
import { format, isValid, isEqual } from 'date-fns';
import { DatepickerActionProps } from '@components/Datepicker/Datepicker.types';
import * as S from '../Datepicker.styles';

export function DatepickerAction({
  selectedDate,
  config,
  variant,
  range,
  date,
  onOpen,
  onError,
  onChangeDateValue,
  onChangeDate,
}: DatepickerActionProps) {
  const { applyBtnText, cancelBtnText } = config?.calendarStyles || {};
  const dateFormat = config?.dateFormat || 'MM/dd/yyyy';

  const rangeFilled = range && isValid(selectedDate.startDate) && isValid(selectedDate.endDate);

  const onConfirm = () => {
    if (range && 'startDate' in selectedDate && 'endDate' in selectedDate) {
      const startDate = format(selectedDate.startDate, dateFormat);
      const endDate = format(selectedDate.endDate ?? '', dateFormat);
      onChangeDateValue(`${startDate} - ${endDate}`);
      if (
        !isEqual(selectedDate?.startDate, date?.startDate) &&
        !isEqual(selectedDate?.endDate, date?.endDate)
      ) {
        if (onChangeDate) {
          onChangeDate({ startDate: selectedDate.startDate, endDate: selectedDate.endDate });
        }
      }
    } else {
      onChangeDateValue(format(selectedDate, dateFormat));
      if (!isEqual(selectedDate, date)) {
        if (onChangeDate) {
          onChangeDate(selectedDate);
        }
      }
    }

    onError(false);
    onOpen(false);
  };

  const onCancel = () => {
    onOpen(false);
  };

  return (
    <S.ButtonsWrapper $variant={variant} $config={config} $isRangeNotFilled={range && !rangeFilled}>
      <S.ButtonCancel onClick={() => onCancel()}>{cancelBtnText || 'Cancel'}</S.ButtonCancel>

      <S.ButtonConfirm onClick={() => (!range || rangeFilled) && onConfirm()}>
        {applyBtnText || 'Apply'}
      </S.ButtonConfirm>
    </S.ButtonsWrapper>
  );
}
