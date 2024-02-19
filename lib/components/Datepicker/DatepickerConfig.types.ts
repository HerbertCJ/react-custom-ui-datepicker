export type DatepickerConfigProps = {
  locale?: Locale;
  dateFormat?: string;
  inputStyles?: InputStylesConfigProps;
  calendarStyles?: CalendarStylesConfigProps;
  calendarFormat?: CalendarFormatProps;
  darkMode?: boolean;
};

type InputStylesConfigProps = {
  backgroundColor?: string;
  borderColor?: string;
  placeholderColor?: string;
  textColor?: string;
  errorConfig?: ErrorConfigProps;
  focusConfig?: FocusConfigProps;
  disabledConfig?: DisabledConfigProps;
};

type FocusConfigProps = {
  focusTextColor?: string;
  focusIconColor?: string;
  focusBorderColor?: string;
};

type ErrorConfigProps = {
  errorText?: string;
  errorTextColor?: string;
  errorTextSize?: string;
  errorBorderColor?: string;
  hideError?: boolean;
  hideErrorIcon?: boolean;
};

type DisabledConfigProps = {
  disabledTextColor?: string;
  disabledIconColor?: string;
  disabledBackgroundColor?: string;
  disabledBorderColor?: string;
};

type CalendarStylesConfigProps = {
  calendarBackground?: string;
  headerIconsColor?: string;
  headerTextColor?: string;
  headerTextWeight?: string;
  headerTextSize?: string;
  daysOfWeekColor?: string;
  daysOfWeekSize?: string;
  daysOfWeekWeight?: string;
  inactiveDaysColor?: string;
  hideInactiveDays?: boolean;
  dayRadius?: string;
  dayColor?: string;
  daySize?: string;
  dayWeight?: string;
  dayHoverColor?: string;
  rangeHoverColor?: string;
  applyBtnText?: string;
  applyBtnTextColor?: string;
  applyBtnBorderColor?: string;
  applyBtnBackgroundColor?: string;
  applyBtnHoverTextColor?: string;
  applyBtnHoverBackgroundColor?: string;
  applyDisabledBtnBackgroundColor?: string;
  applyDisabledBtnTextColor?: string;
  applyDisabledBtnBorderColor?: string;
  applyDisabledBtnHoverTextColor?: string;
  applyDisabledBtnCursor?: string;
  cancelBtnText?: string;
  cancelBtnTextColor?: string;
  cancelBtnBorderColor?: string;
  cancelBtnBackgroundColor?: string;
  cancelBtnHoverTextColor?: string;
  cancelBtnHoverBackgroundColor?: string;
  selectedDayColor?: string;
  selectedDayBackgroundColor?: string;
  todayColor?: string;
  todayBorderColor?: string;
  todayBorderRadius?: string;
};

type CalendarFormatProps = {
  hideActionButtons?: boolean;
  daysOfWeekFormat?: string;
  daysHeaderMonth?: string;
  daysHeaderYear?: string;
  monthFormat?: string;
};

export type Locale =
  | 'de'
  | 'en-AU'
  | 'en-CA'
  | 'en-GB'
  | 'en-US'
  | 'es'
  | 'fr'
  | 'pl'
  | 'pt'
  | 'pt-BR'
  | 'ru';
