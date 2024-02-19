import { addMonths, format, subMonths } from 'date-fns';
import { IoChevronDownOutline } from 'react-icons/io5';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import { DatepickerHeaderProps, ViewModeEnum } from '../../Datepicker.types';
import * as S from '../../Datepicker.styles';

export function Header({
  activeDate,
  config,
  onChangeActiveDate,
  onChangeViewMode,
}: DatepickerHeaderProps) {
  const { daysHeaderMonth, daysHeaderYear } = config?.calendarFormat || {};

  return (
    <S.DatepickerHeader>
      <S.MonthWrapper onClick={() => onChangeViewMode(ViewModeEnum.YEARS)}>
        <S.CurrentMonth>
          {format(activeDate, `${daysHeaderMonth || 'MMMM'} ${daysHeaderYear || 'yyyy'}`)}
        </S.CurrentMonth>
        <IoChevronDownOutline />
      </S.MonthWrapper>
      <S.IconsWrapper>
        <FiChevronLeft onClick={() => onChangeActiveDate(subMonths(activeDate, 1))} />
        <FiChevronRight onClick={() => onChangeActiveDate(addMonths(activeDate, 1))} />
      </S.IconsWrapper>
    </S.DatepickerHeader>
  );
}
