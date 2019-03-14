import moment from 'moment';

export const MONTHS = 'january,february,march,april,may,june,july,august,september,october,november,december'.split(',');

export const DATEF = ['MM/DD/YYYY','YYYY-MM-DD'];

export const validateDate = userInput => {
    const date = moment(userInput, DATEF);

    const minDate = moment('1900-01-01');
    const maxDate = moment('2050-12-31');

    if (date < maxDate && date > minDate) {
        return date.format('YYYY-MM-DD');
    }
    return false;
  };