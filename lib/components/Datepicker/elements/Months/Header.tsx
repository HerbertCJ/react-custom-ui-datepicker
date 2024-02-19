import { addYears, subYears, getYear } from 'date-fns';
import { IoChevronDownOutline } from 'react-icons/io5';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import { DatepickerHeaderProps, ViewModeEnum } from '../../Datepicker.types';
import * as S from '../../Datepicker.styles';

export function Header({
  activeDate,
  onChangeActiveDate,
  onChangeViewMode,
}: DatepickerHeaderProps) {
  const year = getYear(activeDate);
  const headerText = `${year}`;

  return (
    <S.DatepickerHeader>
      <S.MonthWrapper onClick={() => onChangeViewMode(ViewModeEnum.DAYS)}>
        <S.CurrentMonth>{headerText}</S.CurrentMonth>
        <IoChevronDownOutline />
      </S.MonthWrapper>
      <S.IconsWrapper>
        <FiChevronLeft onClick={() => onChangeActiveDate(subYears(activeDate, 1))} />
        <FiChevronRight onClick={() => onChangeActiveDate(addYears(activeDate, 1))} />
      </S.IconsWrapper>
    </S.DatepickerHeader>
  );
}
