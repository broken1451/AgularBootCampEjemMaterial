import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-date-piker',
  templateUrl: './date-piker.component.html',
  styleUrls: ['./date-piker.component.scss']
})
export class DatePikerComponent implements OnInit {

  reservaHotel: FormGroup;

  constructor(private fb: FormBuilder) {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    this.reservaHotel = this.fb.group({
      start: new FormControl(new Date(year, month, 13)),
      end: new FormControl(new Date(year, month, 16))
    });
  }

  ngOnInit(): void {

  }


}
