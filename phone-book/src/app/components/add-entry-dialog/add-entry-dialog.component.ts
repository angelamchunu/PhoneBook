import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Entry} from "../../entry";


@Component({
  selector: 'app-add-entry-dialog',
  templateUrl: './add-entry-dialog.component.html',
  styleUrls: ['./add-entry-dialog.component.scss']
})
export class AddEntryDialogComponent implements OnInit {

  newEntry!: Entry;

  constructor(public dialogRef: MatDialogRef<AddEntryDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Entry) {
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }




}
