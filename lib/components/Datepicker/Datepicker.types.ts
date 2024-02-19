import { DatepickerConfigProps } from "./DatepickerConfig.types";

export type DatepickerInputProps = {
  disabled?: boolean;
  variant?: "light" | "dark" | "custom";
  size?: 'small';
  placeholder?: string;
  range?: boolean;
  config?: DatepickerConfigProps;
};

export type DateObject = {
  startDate: Date;
  endDate: Date | null;
};

export type DatepickerContentProps = {
  viewMode: number;
  dateValue: string;
  activeDate: Date;
  selectedDate: Date | DateObject;
  config?: DatepickerConfigProps;
  variant: DatepickerInputProps["variant"];
  range?: boolean;
  onChangeViewMode: (viewMode: number) => void;
  onChangeActiveDate: (date: Date) => void;
  onChangeDateValue: (date: string) => void;
  onChangeSelectedDate: (date: Date | DateObject) => void;
  onOpen: (open: boolean) => void;
  onError: (error: boolean) => void;
};

export type DatepickerHeaderProps = Pick<
  DatepickerContentProps,
  "activeDate" | "onChangeActiveDate" | "onChangeViewMode" | "config"
>;

export type DatepickerDayProps = Omit<DatepickerContentProps, "viewMode">;

export type DatepickerDayContentProps = Pick<
  DatepickerContentProps,
  | "activeDate"
  | "onChangeActiveDate"
  | "selectedDate"
  | "onChangeSelectedDate"
  | "config"
  | "onChangeDateValue"
  | "onOpen"
  | "variant"
  | "onError"
> & { hideActions?: boolean };

export type DatepickerMonthAndYearProps = Pick<
  DatepickerContentProps,
  | "onChangeViewMode"
  | "activeDate"
  | "onChangeActiveDate"
  | "selectedDate"
  | "onChangeSelectedDate"
  | "config"
  | "variant"
  | "range"
>;

export type DatepickerYearAndMonthContentProps = Pick<
  DatepickerContentProps,
  | "activeDate"
  | "onChangeActiveDate"
  | "selectedDate"
  | "onChangeSelectedDate"
  | "onChangeViewMode"
  | "config"
  | "variant"
  | "range"
>;

export type DatepickerActionProps = Omit<
  DatepickerContentProps,
  "viewMode" | "onChangeViewMode" | "activeDate"
>;

export enum ViewModeEnum {
  DAYS = 1,
  YEARS = 2,
  MONTHS = 3,
}