import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit {
  email: string;
  username: string;
  review: string;

  constructor(private router: Router) { }
  productFit: 'small' | 'big'| 'fix' = 'small';
  ngOnInit() {
  }
  addReview() : void {
    this.router.navigate(['/home'])
  }

}
