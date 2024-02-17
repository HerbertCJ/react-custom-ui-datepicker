import {
  parse,
  isValid,
  endOfMonth,
  endOfWeek,
  getYear,
  startOfMonth,
  startOfWeek,
} from 'date-fns';
import {
  af,
  arDZ,
  arMA,
  arSA,
  arTN,
  az,
  be,
  bg,
  bn,
  bs,
  ca,
  cs,
  cy,
  da,
  de,
  deAT,
  el,
  enAU,
  enCA,
  enGB,
  enIN,
  enNZ,
  enUS,
  enZA,
  eo,
  es,
  et,
  eu,
  faIR,
  fi,
  fr,
  frCA,
  frCH,
  gd,
  gl,
  gu,
  he,
  hi,
  hr,
  ht,
  hu,
  hy,
  id,
  is,
  it,
  ja,
  jaHira,
  ka,
  kk,
  kn,
  ko,
  lb,
  lt,
  lv,
  mk,
  mn,
  ms,
  mt,
  nb,
  nl,
  nlBE,
  nn,
  pl,
  pt,
  ptBR,
  ro,
  ru,
  sk,
  sl,
  sq,
  sr,
  srLatn,
  sv,
  ta,
  te,
  th,
  tr,
  ug,
  uk,
  uz,
  vi,
  zhCN,
  zhTW,
} from 'date-fns/locale';

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

  static getMaskValue(isRange: boolean, dateFormat?: string) {
    if (dateFormat) {
      const modifiedFormat = dateFormat.replace(/[^ -:/]/g, '9');

      return isRange ? `${modifiedFormat} - ${modifiedFormat}` : modifiedFormat;
    }

    return isRange ? '99/99/9999 - 99/99/9999' : '99/99/9999';
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
    isRange: boolean,
    setError: (value: boolean) => void,
    configDateFormat?: string,
  ) {
    const dateFormat = configDateFormat || 'MM/dd/yyyy';
    if (dateValue) {
      if (isRange) {
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
      af: af,
      'ar-DZ': arDZ,
      'ar-MA': arMA,
      'ar-SA': arSA,
      'ar-TN': arTN,
      az: az,
      be: be,
      bg: bg,
      bn: bn,
      bs: bs,
      ca: ca,
      cs: cs,
      cy: cy,
      da: da,
      de: de,
      'de-AT': deAT,
      el: el,
      'en-AU': enAU,
      'en-CA': enCA,
      'en-GB': enGB,
      'en-IN': enIN,
      'en-NZ': enNZ,
      'en-US': enUS,
      'en-ZA': enZA,
      eo: eo,
      es: es,
      et: et,
      eu: eu,
      'fa-IR': faIR,
      fi: fi,
      fr: fr,
      'fr-CA': frCA,
      'fr-CH': frCH,
      gd: gd,
      gl: gl,
      gu: gu,
      he: he,
      hi: hi,
      hr: hr,
      ht: ht,
      hu: hu,
      hy: hy,
      id: id,
      is: is,
      it: it,
      ja: ja,
      'ja-Hira': jaHira,
      ka: ka,
      kk: kk,
      kn: kn,
      ko: ko,
      lb: lb,
      lt: lt,
      lv: lv,
      mk: mk,
      mn: mn,
      ms: ms,
      mt: mt,
      nb: nb,
      nl: nl,
      'nl-BE': nlBE,
      nn: nn,
      pl: pl,
      pt: pt,
      'pt-BR': ptBR,
      ro: ro,
      ru: ru,
      sk: sk,
      sl: sl,
      sq: sq,
      sr: sr,
      'sr-Latn': srLatn,
      sv: sv,
      ta: ta,
      te: te,
      th: th,
      tr: tr,
      ug: ug,
      uk: uk,
      uz: uz,
      vi: vi,
      'zh-CN': zhCN,
      'zh-TW': zhTW,
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
