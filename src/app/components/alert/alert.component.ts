import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnChanges {
  @Input() message;
  @Input() flag;
  @Input() count;
  constructor(private snackBar: MatSnackBar) { }

  ngOnChanges(): void {

    if(this.flag)
    {
      this.snackBar.open(this.message, 'Dismiss', {duration: 5000});
    }
  }

}
