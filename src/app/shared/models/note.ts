import { NoteListItem } from './note-list-item';

export interface Note {
  id: number;
  title: string;
  content: string;
  dateCreated: string;
  dateModified: string;
  type: 'simple' | 'list';
  listItems: NoteListItem[];
}
