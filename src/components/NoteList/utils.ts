import dayjs from 'dayjs';

export const formatNoteDate = (isoDate: Date): string => {
  const date = dayjs(isoDate);
  const now = dayjs();

  if (date.isSame(now, 'day')) {
    return date.format('HH:mm');
  } else {
    return date.format('DD.MM.YYYY');
  }
};
