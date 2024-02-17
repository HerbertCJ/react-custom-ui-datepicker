// @ts-nocheck
import { format, isValid } from "date-fns";

import { DatepickerActionProps } from "@components/Datepicker/Datepicker.types";
import * as S from "../Datepicker.styles";

export function DatepickerAction({
  selectedDate,
  config,
  variant,
  isRange,
  onOpen,
  onError,
  onChangeDateValue,
}: DatepickerActionProps) {
  const { applyBtnText, cancelBtnText } = config?.calendarStyles || {};
  const dateFormat = config?.dateFormat || "MM/dd/yyyy";

  const isRangeFilled =
    isRange && isValid(selectedDate.startDate) && isValid(selectedDate.endDate);

  const onConfirm = () => {
    if (isRange && "startDate" in selectedDate && "endDate" in selectedDate) {
      const startDate = format(selectedDate.startDate, dateFormat);
      const endDate = format(selectedDate.endDate ?? "", dateFormat);
      onChangeDateValue(`${startDate} - ${endDate}`);
    } else {
      onChangeDateValue(format(selectedDate as Date, dateFormat));
    }

    onError(false);
    onOpen(false);
  };

  const onCancel = () => {
    onOpen(false);
  };

  return (
    <S.ButtonsWrapper
      variant={variant}
      config={config}
      isRangeNotFilled={isRange && !isRangeFilled}
    >
      <S.ButtonCancel onClick={() => onCancel()}>
        {cancelBtnText || "Cancel"}
      </S.ButtonCancel>

      <S.ButtonConfirm
        onClick={() => (!isRange || isRangeFilled) && onConfirm()}
      >
        {applyBtnText || "Apply"}
      </S.ButtonConfirm>
    </S.ButtonsWrapper>
  );
}
