import { Component, Input, OnInit,  } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [NgbModule],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss'
})
export class StarRatingComponent implements OnInit {
 @Input() rating:number=0
 @Input() isReadOnly:boolean=false
 constructor(){

 }

 ngOnInit(): void {
   
 }
}
