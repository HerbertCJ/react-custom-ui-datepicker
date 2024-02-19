import {
  parse,
  isValid,
  endOfMonth,
  endOfWeek,
  getYear,
  startOfMonth,
  startOfWeek,
} from 'date-fns';
import { de, enAU, enCA, enGB, enUS, es, fr, pl, pt, ptBR, ru } from 'date-fns/locale';

import { Locale } from './DatepickerConfig.types';

export class DatepickerHelper {
  static stringToDateOrNewDate(dateString: string, dateFormat: string = 'MM/dd/yyyy') {
    if (dateString) {
      return formatStringIntoSingleDate(dateString, dateFormat);
    } else {
      return new Date();
    }
  }

  static stringToRangeDateOrNewDate(dateString: string, dateFormat: string = 'MM/dd/yyyy') {
    if (dateString) {
      return formatStringIntoRangeDate(dateString, dateFormat);
    } else {
      return {
        startDate: new Date(),
        endDate: new Date(),
      };
    }
  }

  static getMaskValue(range: boolean, dateFormat?: string) {
    if (dateFormat) {
      const mask = dateFormat.split('').map((char) => {
        if (char !== ' ' && char !== '/' && char !== ':') {
          return /\d/;
        } else {
          return char;
        }
      });

      return mask;
    }

    if (range) {
      return [
        /\d/,
        /\d/,
        '/',
        /\d/,
        /\d/,
        '/',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        ' ',
        '-',
        ' ',
        /\d/,
        /\d/,
        '/',
        /\d/,
        /\d/,
        '/',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ];
    } else {
      return [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
    }
  }

  static getRangeOfYears(activeDate: Date) {
    const MAX_YEARS = 24;

    const currentYear = Math.trunc(getYear(activeDate) / MAX_YEARS) * MAX_YEARS;
    const startYear = currentYear;
    const endYear = currentYear + (MAX_YEARS - 1);

    return { startYear, endYear };
  }

  static getFirstLastDayOfMonth(activeDate: Date) {
    const startOfTheSelectedMonth = startOfMonth(activeDate);
    const endOfTheSelectedMonth = endOfMonth(activeDate);
    const firstMonthDay = startOfWeek(startOfTheSelectedMonth);
    const lastMonthDay = endOfWeek(endOfTheSelectedMonth);

    return { firstMonthDay, lastMonthDay };
  }

  static checkIfDateIsValid(
    dateValue: string,
    range: boolean,
    setError: (value: boolean) => void,
    configDateFormat?: string,
  ) {
    const dateFormat = configDateFormat || 'MM/dd/yyyy';
    if (dateValue) {
      if (range) {
        const [startDate, endDate] = dateValue.split(' - ');

        const parsedStartDate = parse(startDate, dateFormat, new Date());
        const parsedEndDate = parse(endDate, dateFormat, new Date());

        if (isValid(parsedStartDate) && isValid(parsedEndDate)) {
          setError(false);
        } else {
          setError(true);
        }
      } else {
        const parsedDate = parse(dateValue, dateFormat, new Date());

        if (isValid(parsedDate)) {
          setError(false);
        } else {
          setError(true);
        }
      }
    }
  }

  static getLanguage(locale: Locale) {
    const languageImports = {
      de: de,
      'en-AU': enAU,
      'en-CA': enCA,
      'en-GB': enGB,
      'en-US': enUS,
      es: es,
      fr: fr,
      pl: pl,
      pt: pt,
      'pt-BR': ptBR,
      ru: ru,
    };

    return languageImports[locale] || enUS;
  }
}

function formatStringIntoSingleDate(dateString: string, formatString: string) {
  const parsedDate = parse(dateString, formatString, new Date());

  if (isValid(parsedDate)) {
    return parsedDate;
  } else {
    return new Date();
  }
}

function formatStringIntoRangeDate(dateString: string, dateFormat: string) {
  const [startDate, endDate] = dateString.split(' - ');

  const parsedStartDate = parse(startDate, dateFormat, new Date());
  const parsedEndDate = parse(endDate, dateFormat, new Date());

  if (isValid(parsedStartDate) && isValid(parsedEndDate)) {
    return {
      startDate: parsedStartDate,
      endDate: parsedEndDate,
    };
  } else {
    return {
      startDate: new Date(),
      endDate: new Date(),
    };
  }
}
