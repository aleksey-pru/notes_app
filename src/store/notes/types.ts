import { type RootState } from 'types';

export type TSelectNoteData = (state: RootState) => {
  title: string;
  description?: string;
};
