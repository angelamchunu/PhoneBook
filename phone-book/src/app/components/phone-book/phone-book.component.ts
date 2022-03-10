import {Component, OnInit} from '@angular/core';
import {PhoneBookService} from "../../services/phone-book.service";
import {Entry} from "../../entry";
import {MatDialog} from '@angular/material/dialog';
import {AddEntryDialogComponent} from "../add-entry-dialog/add-entry-dialog.component";

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.scss']
})
export class PhoneBookComponent implements OnInit {
  entries!: Array<Entry>;
  newEntry!: Entry;
  name!: string;
  phoneNumber!: string;
  filterTerm!: string;
  errorMessage!: string;


  constructor(public phonebookService: PhoneBookService, private matDialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getEntries();
  }

  getEntries() {
    this.phonebookService.getEntries().subscribe(resp => {
      this.entries = resp;
    },error => {
      this.errorMessage = error;
    })
  }

  search(name: string) {
    this.phonebookService.getEntry(name).subscribe(resp => {
      this.entries = resp;
    },error => {
      this.errorMessage = error;
    })
  }

  openDialog(): void {
    const dialogRef = this.matDialog.open(AddEntryDialogComponent, {
      data: {name: this.name, number: this.phoneNumber},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.newEntry = {
        name: result.name,
        number: result.number
      }
      this.phonebookService.addEntry(this.newEntry).subscribe(resp => {
          this.entries.push(resp)
        }, error => {
          this.errorMessage = error;
        }
      )

    });
  }


}
