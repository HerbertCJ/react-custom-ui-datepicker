import { addYears, subYears } from 'date-fns';
import { IoChevronDownOutline } from 'react-icons/io5';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import { DatepickerHeaderProps, ViewModeEnum } from '../../Datepicker.types';
import { DatepickerHelper } from '../../Datepicker.helper';
import * as S from '../../Datepicker.styles';

export function Header({
  activeDate,
  onChangeActiveDate,
  onChangeViewMode,
}: DatepickerHeaderProps) {
  const { startYear, endYear } = DatepickerHelper.getRangeOfYears(activeDate);
  const headerText = `${startYear}-${endYear}`;

  return (
    <S.DatepickerHeader>
      <S.MonthWrapper onClick={() => onChangeViewMode(ViewModeEnum.DAYS)}>
        <S.CurrentMonth>{headerText}</S.CurrentMonth>
        <IoChevronDownOutline />
      </S.MonthWrapper>
      <S.IconsWrapper>
        <FiChevronLeft onClick={() => onChangeActiveDate(subYears(activeDate, 24))} />
        <FiChevronRight onClick={() => onChangeActiveDate(addYears(activeDate, 24))} />
      </S.IconsWrapper>
    </S.DatepickerHeader>
  );
}
