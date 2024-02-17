import { useState } from "react";
import InputMask from "react-input-mask";
import { setDefaultOptions } from "date-fns";
import { IoCalendarOutline } from "react-icons/io5";
import { BsExclamationCircle } from "react-icons/bs";

import {
  DatepickerInputProps,
  ViewModeEnum,
  DateObject,
} from "./Datepicker.types";
import { DatepickerContent } from "./elements/DatepickerContent";
import { DatepickerHelper } from "./Datepicker.helper";

import * as S from "./Datepicker.styles";

export function Datepicker({
  variant = "light",
  isDisabled,
  placeholder,
  isRange = false,
  config,
}: DatepickerInputProps) {
  const initialState = isRange
    ? { startDate: new Date(), endDate: null }
    : new Date();
  const maskValue = DatepickerHelper.getMaskValue(isRange, config?.dateFormat);

  const [selectedDate, setSelectedDate] = useState<Date | DateObject>(
    initialState
  );
  const [activeDate, setActiveDate] = useState(new Date());
  const [dateValue, setDateValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [viewMode, setViewMode] = useState(ViewModeEnum.DAYS);
  const [error, setError] = useState(false);

  const locale = config?.locale || "en-US";
  const language = DatepickerHelper.getLanguage(locale);
  const errorMessage =
    config?.inputStyles?.errorConfig?.errorText || "Invalid Date";

  setDefaultOptions({ locale: language });

  const handleOpenCalendar = () => {
    setViewMode(ViewModeEnum.DAYS);

    let parsedDate;

    if (isRange) {
      parsedDate = DatepickerHelper.stringToRangeDateOrNewDate(
        dateValue,
        config?.dateFormat
      );
      setActiveDate(parsedDate.startDate);
    } else {
      parsedDate = DatepickerHelper.stringToDateOrNewDate(
        dateValue,
        config?.dateFormat
      );
      setActiveDate(parsedDate);
    }

    setSelectedDate(parsedDate);
    setIsOpen(!isOpen);
  };

  return (
    <S.Wrapper
      isDisabled={isDisabled}
      config={config}
      variant={variant}
      error={error}
    >
      <S.InputWrapper>
        <InputMask
          mask={maskValue}
          maskChar=""
          disabled={isDisabled}
          value={dateValue}
          onBlur={() =>
            DatepickerHelper.checkIfDateIsValid(
              dateValue,
              isRange,
              setError,
              config?.dateFormat
            )
          }
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDateValue(e.target.value)
          }
        >
          {/* @ts-expect-error external lib */}
          {(inputProps) => (
            <S.Input
              type="text"
              placeholder={placeholder}
              disabled={isDisabled}
              {...inputProps}
            />
          )}
        </InputMask>

        <S.DatepickerWrapper
          onBlur={() => {
            setIsOpen(false);
            DatepickerHelper.checkIfDateIsValid(
              dateValue,
              isRange,
              setError,
              config?.dateFormat
            );
          }}
          disabled={isDisabled}
        >
          <IoCalendarOutline onClick={() => handleOpenCalendar()} />
          {isOpen && (
            <DatepickerContent
              config={config}
              variant={variant}
              viewMode={viewMode}
              activeDate={activeDate}
              selectedDate={selectedDate}
              dateValue={dateValue}
              isRange={isRange}
              onChangeViewMode={setViewMode}
              onChangeActiveDate={setActiveDate}
              onChangeSelectedDate={setSelectedDate}
              onChangeDateValue={setDateValue}
              onOpen={setIsOpen}
              onError={setError}
            />
          )}
        </S.DatepickerWrapper>
      </S.InputWrapper>
      {error && (
        <S.Error>
          <BsExclamationCircle />
          <span>{errorMessage}</span>
        </S.Error>
      )}
    </S.Wrapper>
  );
}
