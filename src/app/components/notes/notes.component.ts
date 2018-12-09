import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Note } from '../../shared/models/note';
import { NoteService } from '../../shared/services/note.service';

@Component({
  selector: 'fon-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  notes: Note[] = [];

  constructor(
    private noteService: NoteService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.noteService.getNotes().subscribe(notes => {
      this.notes = notes;
    });
  }

  onEditClicked(note: Note) {
    this.router.navigate([{ outlets: { note: [note.id] } }], { relativeTo: this.activatedRoute });
  }

  onDeleteClicked(note: Note) {
    const noteToDelete = this.notes.filter(n => n.id === note.id)[0];
    this.notes.splice(this.notes.indexOf(noteToDelete), 1);
  }

}
