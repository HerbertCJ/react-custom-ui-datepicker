import { useState } from "react";
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
  disabled,
  placeholder,
  range = false,
  config,
}: DatepickerInputProps) {
  const initialState = range
    ? { startDate: new Date(), endDate: null }
    : new Date();
  const maskValue = DatepickerHelper.getMaskValue(range, config?.dateFormat);

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

    if (range) {
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
      disabled={disabled}
      $config={config}
      $variant={variant}
      $error={error}
    >
      <S.InputWrapper>
        <S.Input
          mask={maskValue}
          guide={false}
          disabled={disabled}
          value={dateValue}
          placeholder={placeholder}
          onBlur={() =>
            DatepickerHelper.checkIfDateIsValid(
              dateValue,
              range,
              setError,
              config?.dateFormat
            )
          }
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDateValue(e.target.value)
          }
        />
        <S.DatepickerWrapper
          onBlur={() => {
            setIsOpen(false);
            DatepickerHelper.checkIfDateIsValid(
              dateValue,
              range,
              setError,
              config?.dateFormat
            );
          }}
          disabled={disabled}
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
              range={range}
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
