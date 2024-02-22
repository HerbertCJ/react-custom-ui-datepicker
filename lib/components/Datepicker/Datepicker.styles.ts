import MaskedInput from 'react-text-mask';
import styled, { css } from 'styled-components';
import { DatepickerInputProps } from './Datepicker.types';
import theme from '../../styles/theme';

type ConfigProps = DatepickerInputProps['config'];
type WrapperProps = {
  disabled?: boolean;
  $config?: ConfigProps;
  $variant?: 'light' | 'dark' | 'custom';
  $size?: 'small';
  $error: boolean;
};
type ButtonWrapperProps = {
  $variant?: 'light' | 'dark' | 'custom';
  $config?: ConfigProps;
  $isRangeNotFilled?: boolean;
};
type WeekWrapperProps = {
  $isInactive?: boolean | undefined;
  $isSelected?: boolean | undefined;
  $isToday?: boolean | undefined;
  $isInsideRange?: boolean | undefined;
  $config?: ConfigProps;
  $variant?: 'light' | 'dark' | 'custom';
};

const datepickerModifiers = {
  variant: {
    light: (_: ConfigProps) => css`
      &:focus-within {
        ${InputWrapper} {
          border-color: ${theme.colors.blue[600]};
        }
      }

      ${Input} {
        &::placeholder {
          color: ${theme.colors.gray[600]};
        }
      }

      ${Datepicker} {
        background-color: ${theme.colors.gray[50]};
      }

      ${DatepickerHeader} {
        svg {
          color: ${theme.colors.gray[800]};
        }
      }

      ${CurrentMonth} {
        color: ${theme.colors.gray[800]};
        font-size: ${theme.font.sizes.body_large};
        font-weight: ${theme.font.weight.bold};
      }

      ${DayOfWeekNames} {
        font-weight: ${theme.font.weight.medium};
        font-size: ${theme.font.sizes.body_large};
        color: ${theme.colors.blue[700]};
      }

      ${WeekWrapper} {
        border-radius: ${theme.border.radius_xlarge};
        color: ${theme.colors.gray[800]};
        font-size: ${theme.font.sizes.body};
        font-weight: ${theme.font.weight.medium};

        &:hover {
          background-color: ${theme.colors.blue[100]};
        }
      }
    `,
    dark: (_: ConfigProps) => css`
      &:focus-within {
        ${InputWrapper} {
          border-color: ${theme.colors.blue[300]};
        }
      }

      ${Input} {
        color: ${theme.colors.gray[50]};

        &::placeholder {
          color: ${theme.colors.gray[300]};
        }
      }

      svg {
        color: ${theme.colors.gray[300]};
        background-color: ${theme.colors.gray[900]};
      }

      ${InputWrapper}, ${InputWrapper} > input[type='text'] {
        background-color: ${theme.colors.gray[900]};
        border-color: ${theme.colors.gray[900]};
      }

      ${Datepicker} {
        background-color: ${theme.colors.gray[900]};
      }

      ${DatepickerHeader} {
        svg {
          color: ${theme.colors.gray[50]};
        }
      }

      ${CurrentMonth} {
        color: ${theme.colors.gray[50]};
        font-size: ${theme.font.sizes.body_large};
        font-weight: ${theme.font.weight.bold};
      }

      ${DayOfWeekNames} {
        font-weight: ${theme.font.weight.medium};
        font-size: ${theme.font.sizes.body_large};
        color: ${theme.colors.blue[300]};
      }

      ${WeekWrapper} {
        border-radius: ${theme.border.radius_xlarge};
        color: ${theme.colors.gray[50]};
        font-size: ${theme.font.sizes.body};
        font-weight: ${theme.font.weight.medium};

        &:hover {
          background-color: ${theme.colors.blue[100]};
          color: ${theme.colors.blue[800]};
        }
      }
    `,
    custom: (config: ConfigProps) => {
      const {
        calendarBackground,
        headerIconsColor,
        headerTextColor,
        headerTextWeight,
        headerTextSize,
        daysOfWeekColor,
        daysOfWeekSize,
        daysOfWeekWeight,
        dayColor,
        dayRadius,
        daySize,
        dayWeight,
        dayHoverColor,
      } = config?.calendarStyles || {};

      const { focusTextColor, focusIconColor, focusBorderColor } =
        config?.inputStyles?.focusConfig || {};

      const { backgroundColor, borderColor, placeholderColor, textColor } =
        config?.inputStyles || {};

      return css`
        &:focus-within {
          ${InputWrapper} {
            color: ${focusTextColor};
            border-color: ${focusBorderColor};
          }

          svg {
            color: ${focusIconColor};
          }
        }

        ${InputWrapper} {
          border-color: ${borderColor};
          background-color: ${backgroundColor};
        }

        ${Input} {
          color: ${textColor};

          &::placeholder {
            color: ${placeholderColor};
          }
        }

        ${Datepicker} {
          background-color: ${calendarBackground};
        }
        ${DatepickerHeader} {
          svg {
            color: ${headerIconsColor};
          }
        }

        ${CurrentMonth} {
          color: ${headerTextColor};
          font-size: ${headerTextSize};
          font-weight: ${headerTextWeight};
        }

        ${DayOfWeekNames} {
          font-weight: ${daysOfWeekWeight};
          font-size: ${daysOfWeekSize};
          color: ${daysOfWeekColor};
        }

        ${WeekWrapper} {
          border-radius: ${dayRadius};
          color: ${dayColor};
          font-size: ${daySize};
          font-weight: ${dayWeight};

          &:hover {
            background-color: ${dayHoverColor};
          }
        }
      `;
    },
  },
  size: {
    small: () => css`
      ${DatepickerContent} {
        gap: 0;
      }

      ${MonthWrapper}, ${CurrentMonth}, ${IconsWrapper} {
        font-size: 1rem;
        gap: 0.75rem;

        svg {
          font-size: 1rem;
        }
      }

      ${DayOfWeekNames} {
        width: 100%;
        font-size: 1rem;
      }

      ${WeekWrapper} {
        height: 1.5rem;
        width: 1.5rem;
        font-size: 1rem;
      }

      ${ButtonConfirm}, ${ButtonCancel} {
        width: 85%;
        font-size: 1rem;
      }

      ${YearsWrapper} {
        width: 40px;
      }

      ${ButtonsWrapper} {
        gap: 0.75rem;
      }
    `,
  },
  disabled: {
    light: (_: ConfigProps) => css`
      ${Input} {
        color: ${theme.colors.gray[400]};
        cursor: default;
      }

      svg {
        color: ${theme.colors.gray[400]};
        background-color: ${theme.colors.gray[100]};
        cursor: default;
      }

      ${InputWrapper} {
        border-color: ${theme.colors.gray[400]};
        background-color: ${theme.colors.gray[100]};
      }
    `,
    dark: (_: ConfigProps) => css`
      ${Input} {
        color: ${theme.colors.gray[700]};
        cursor: default;
      }

      svg {
        color: ${theme.colors.gray[700]};
        background-color: ${theme.colors.gray[900]};
        cursor: default;
      }

      ${InputWrapper}, ${InputWrapper} > input[type='text'] {
        background-color: ${theme.colors.gray[900]};
        border-color: ${theme.colors.gray[900]};
      }
    `,
    custom: (config: ConfigProps) => {
      const { disabledTextColor, disabledIconColor, disabledBackgroundColor, disabledBorderColor } =
        config?.inputStyles?.disabledConfig || {};

      return css`
        ${Input} {
          color: ${disabledTextColor};
          cursor: default;
        }

        svg {
          color: ${disabledIconColor};
          background-color: ${disabledBackgroundColor};
          cursor: default;
        }

        ${InputWrapper}, ${InputWrapper} > input[type='text'] {
          background-color: ${disabledBackgroundColor};
          border-color: ${disabledBorderColor};
        }
      `;
    },
  },
  error: {
    light: (_: ConfigProps) => css`
      ${InputWrapper} {
        border-color: ${theme.colors.red[700]};
      }

      ${Error} {
        color: ${theme.colors.red[700]};
        font-size: ${theme.font.sizes.small};

        svg {
          color: ${theme.colors.red[700]};
          background-color: transparent;
        }
      }
    `,
    dark: (_: ConfigProps) => css`
      ${InputWrapper} {
        border-color: ${theme.colors.red[400]};
      }

      ${Error} {
        color: ${theme.colors.red[400]};
        font-size: ${theme.font.sizes.small};

        svg {
          color: ${theme.colors.red[400]};
          background-color: transparent;
        }
      }
    `,
    custom: (config: ConfigProps) => {
      const { errorTextColor, errorBorderColor, errorTextSize, hideError, hideErrorIcon } =
        config?.inputStyles?.errorConfig || {};

      return css`
        ${InputWrapper} {
          border-color: ${errorBorderColor};
        }

        ${Error} {
          color: ${errorTextColor};
          font-size: ${errorTextSize};
          display: ${hideError ? 'none' : 'flex'};

          svg {
            display: ${hideErrorIcon ? 'none' : 'flex'};
            color: ${errorTextColor};
            background-color: transparent;
          }
        }
      `;
    },
  },
};

const getInactiveDaysStyles = (config: ConfigProps, color: string) => {
  const { hideInactiveDays } = config?.calendarStyles || {};
  return css`
    color: ${color} !important;
    opacity: ${hideInactiveDays ? 0 : 1};
    cursor: ${hideInactiveDays ? 'default' : 'pointer'};
    pointer-events: ${hideInactiveDays ? 'none' : 'auto'};
  `;
};

const datepickerWeekModifiers = {
  inactive: {
    light: (config: ConfigProps) => {
      return getInactiveDaysStyles(config, theme.colors.gray[400]);
    },
    dark: (config: ConfigProps) => {
      return getInactiveDaysStyles(config, theme.colors.gray[500]);
    },
    custom: (config: ConfigProps) => {
      const { inactiveDaysColor } = config?.calendarStyles || {};

      return getInactiveDaysStyles(config, inactiveDaysColor ?? theme.colors.gray[400]);
    },
  },
  insideRage: {
    light: (_: ConfigProps) => css`
      background-color: ${theme.colors.blue[100]};

      &:hover {
        background-color: ${theme.colors.blue[200]} !important;
      }
    `,
    dark: (_: ConfigProps) => css`
      background-color: ${theme.colors.blue[100]};
      color: ${theme.colors.gray[900]} !important;

      &:hover {
        background-color: ${theme.colors.blue[200]} !important;
      }
    `,
    custom: (config: ConfigProps) => {
      const { rangeHoverColor } = config?.calendarStyles || {};

      return css`
        background-color: ${rangeHoverColor};
      `;
    },
  },
  selected: {
    light: (_: ConfigProps) => css`
      & {
        color: ${theme.colors.gray[50]} !important;
        background-color: ${theme.colors.blue[700]};
      }

      &:hover {
        background-color: ${theme.colors.blue[700]} !important;
        color: ${theme.colors.gray[50]} !important;
      }
    `,
    dark: (_: ConfigProps) => css`
      color: ${theme.colors.gray[50]} !important;
      background-color: ${theme.colors.blue[700]};

      &:hover {
        background-color: ${theme.colors.blue[700]} !important;
        color: ${theme.colors.gray[50]} !important;
      }
    `,
    custom: (config: ConfigProps) => {
      const { selectedDayColor, selectedDayBackgroundColor } = config?.calendarStyles || {};

      return css`
        color: ${selectedDayColor} !important;
        background-color: ${selectedDayBackgroundColor};

        &:hover {
          background-color: ${selectedDayBackgroundColor} !important;
          color: ${selectedDayColor} !important;
        }
      `;
    },
  },
  today: {
    light: (_: ConfigProps) => css`
      border: 1.5px solid ${theme.colors.blue[700]};
    `,
    dark: (_: ConfigProps) => css`
      border: 1.5px solid ${theme.colors.blue[300]};
    `,
    custom: (config: ConfigProps) => {
      const { todayColor, todayBorderColor, todayBorderRadius } = config?.calendarStyles || {};

      return css`
        border: 1.5px solid ${todayBorderColor};
        border-radius: ${todayBorderRadius};
        color: ${todayColor};
      `;
    },
  },
};

const buttonsModifiers = {
  variant: {
    light: (_: ConfigProps) => css`
      ${ButtonCancel} {
        background-color: transparent;
        color: ${theme.colors.blue[700]};
        border: 2px solid ${theme.colors.blue[700]};

        &:hover {
          background-color: ${theme.colors.blue[100]};
          color: ${theme.colors.blue[800]};
        }
      }

      ${ButtonConfirm} {
        background-color: ${theme.colors.blue[700]};
        color: ${theme.colors.gray[50]};
        border: 2px solid ${theme.colors.blue[700]};

        &:hover {
          background-color: ${theme.colors.blue[800]};
          border-color: ${theme.colors.blue[800]};
          cursor: pointer;
        }
      }
    `,
    dark: (_: ConfigProps) => css`
      ${ButtonCancel} {
        background-color: transparent;
        color: ${theme.colors.gray[100]};
        border: 2px solid ${theme.colors.gray[100]};

        &:hover {
          background-color: ${theme.colors.gray[700]};
        }
      }

      ${ButtonConfirm} {
        background-color: ${theme.colors.blue[700]};
        color: ${theme.colors.gray[50]};
        border: 2px solid ${theme.colors.blue[700]};

        &:hover {
          background-color: ${theme.colors.blue[800]};
          border-color: ${theme.colors.blue[800]};
          cursor: pointer;
        }
      }
    `,
    custom: (config: ConfigProps) => {
      const {
        cancelBtnTextColor,
        cancelBtnBorderColor,
        cancelBtnBackgroundColor,
        cancelBtnHoverTextColor,
        cancelBtnHoverBackgroundColor,
        applyBtnTextColor,
        applyBtnBorderColor,
        applyBtnBackgroundColor,
        applyBtnHoverTextColor,
        applyBtnHoverBackgroundColor,
      } = config?.calendarStyles || {};

      return css`
        ${ButtonCancel} {
          background-color: ${cancelBtnBackgroundColor};
          color: ${cancelBtnTextColor};
          border: 2px solid ${cancelBtnBorderColor};

          &:hover {
            color: ${cancelBtnHoverTextColor};
            background-color: ${cancelBtnHoverBackgroundColor};
          }
        }

        ${ButtonConfirm} {
          background-color: ${applyBtnBackgroundColor};
          color: ${applyBtnTextColor};
          border: 2px solid ${applyBtnBorderColor};

          &:hover {
            background-color: ${applyBtnHoverBackgroundColor};
            border-color: ${applyBtnHoverBackgroundColor};
            color: ${applyBtnHoverTextColor};
            cursor: pointer;
          }
        }
      `;
    },
  },
  rangeNotFilled: {
    light: (_: ConfigProps) => css`
      ${ButtonConfirm} {
        background-color: ${theme.colors.gray[400]};
        color: ${theme.colors.gray[50]};
        border: 2px solid ${theme.colors.gray[400]};

        &:hover {
          background-color: ${theme.colors.gray[400]};
          border-color: ${theme.colors.gray[400]};
          cursor: default;
        }
      }
    `,
    dark: (_: ConfigProps) => css`
      ${ButtonConfirm} {
        background-color: ${theme.colors.gray[400]};
        color: ${theme.colors.gray[50]};
        border: 2px solid ${theme.colors.gray[400]};

        &:hover {
          background-color: ${theme.colors.gray[400]};
          border-color: ${theme.colors.gray[400]};
          cursor: default;
        }
      }
    `,
    custom: (config: ConfigProps) => {
      const {
        applyDisabledBtnBackgroundColor,
        applyDisabledBtnTextColor,
        applyDisabledBtnBorderColor,
        applyDisabledBtnHoverTextColor,
        applyDisabledBtnCursor,
      } = config?.calendarStyles || {};

      return css`
        ${ButtonConfirm} {
          background-color: ${applyDisabledBtnBackgroundColor};
          color: ${applyDisabledBtnTextColor};
          border: 2px solid ${applyDisabledBtnBorderColor};

          &:hover {
            background-color: ${applyDisabledBtnBackgroundColor};
            border-color: ${applyDisabledBtnBorderColor};
            color: ${applyDisabledBtnHoverTextColor};
            cursor: ${applyDisabledBtnCursor};
          }
        }
      `;
    },
  },
};

export const DatepickerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MonthWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: ${theme.spacings.xsmall};
`;

export const CurrentMonth = styled.span`
  text-transform: capitalize;
  user-select: none;
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: ${theme.spacings.medium};
`;

export const DayOfWeekNames = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  gap: ${theme.spacings.xsmall};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
  text-transform: capitalize;
`;

export const WeekContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: ${theme.spacings.xsmall};
`;

export const WeekWrapper = styled.div<WeekWrapperProps>`
  ${({ $isInactive, $isToday, $isInsideRange, $config, $variant, $isSelected }) => {
    const variantType: WeekWrapperProps['$variant'] = $variant || 'light';

    return css`
      height: 2.25rem;
      width: 2.25rem;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.25rem;

      ${$isInactive && datepickerWeekModifiers.inactive[variantType]($config)}
      ${$isInsideRange && datepickerWeekModifiers.insideRage[variantType]($config)}
      ${$isToday && datepickerWeekModifiers.today[variantType]($config)}
      ${$isSelected && datepickerWeekModifiers.selected[variantType]($config)}
    `;
  }}
`;

export const YearsWrapper = styled(WeekWrapper)``;

export const ButtonsWrapper = styled.div<ButtonWrapperProps>`
  ${({ $variant, $config, $isRangeNotFilled }) => {
    const variantType: WeekWrapperProps['$variant'] = $variant || 'light';

    return css`
      display: flex;
      align-items: center;
      justify-content: space-around;

      ${ButtonCancel}, ${ButtonConfirm} {
        width: 134px;
        padding: 0.5rem 1rem;
        font-weight: 600;
        font-size: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        outline: none;
        cursor: pointer;
        border-radius: ${theme.border.radius_xlarge};
      }

      ${!!$variant && buttonsModifiers.variant[variantType]($config)}
      ${$isRangeNotFilled && buttonsModifiers.rangeNotFilled[variantType]($config)}
    `;
  }}
`;

export const ButtonCancel = styled.div``;
export const ButtonConfirm = styled.div``;

export const DatepickerWrapper = styled.button`
  border: transparent;
  background: transparent;
  outline: none !important;
  cursor: default;
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 24px;
    cursor: pointer;
  }
`;

export const DatepickerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacings.xsmall};
`;

export const InputWrapper = styled.div`
  padding: 0.313rem 0.75rem;
  border: 1.5px solid ${theme.colors.gray[400]};
  border-radius: ${theme.border.radius_small};
  display: flex;
  align-items: center;
  position: relative;
  gap: 0.313rem;
`;

export const Input = styled(MaskedInput)`
  outline: none;
  border: none;
  background-color: transparent;
  width: 100%;
  height: 100%;

  & {
    font-size: 1rem;
  }

  font-size: ${theme.font.sizes.body};
  color: ${theme.colors.gray[800]};
`;

export const Wrapper = styled.div<WrapperProps>`
  ${({ disabled, $variant, $config, $error, $size }) => {
    const variantType: WeekWrapperProps['$variant'] = $variant || 'light';

    return css`
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 0.25rem;

      ${!!$variant && datepickerModifiers.variant[variantType]($config)}
      ${!!$size && datepickerModifiers.size[$size]()}
      ${$error && datepickerModifiers.error[variantType]($config)}
      ${disabled && datepickerModifiers.disabled[variantType]($config)}
    `;
  }}
`;

export const YearContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${theme.spacings.xsmall};

  div {
    text-align: center;
    width: 4.75rem;
  }
`;

export const Month = styled.span`
  text-transform: uppercase;
`;

export const Error = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 0.25em;

  svg {
    display: flex;
    align-items: center;
  }
`;

export const Datepicker = styled.div`
  position: absolute;
  left: -1px;
  top: 52px;
  z-index: 99;
  background-color: ${theme.colors.white[50]};
  box-shadow: ${theme.shadows.element};
  border-radius: ${theme.border.radius};
  padding: ${theme.spacings.small};
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacings.small};

  svg {
    font-size: 1.25rem;
    display: flex;
    color: ${theme.colors.gray[800]};
  }

  @media screen and (max-width: 400px) {
    ${DatepickerContent} {
      gap: 0;
    }

    ${MonthWrapper}, ${CurrentMonth}, ${IconsWrapper} {
      font-size: 1rem;
      gap: 0.75rem;

      svg {
        font-size: 1rem;
      }
    }

    ${DayOfWeekNames} {
      width: 100%;
      font-size: 1.1rem;
    }

    ${WeekWrapper} {
      height: 1.5rem;
      width: 1.5rem;
      font-size: 1rem;
    }

    ${ButtonConfirm}, ${ButtonCancel} {
      width: 85%;
      font-size: 1rem;
    }

    ${YearsWrapper} {
      width: 40px;
    }

    ${ButtonsWrapper} {
      gap: 0.75rem;
    }
  }
`;
