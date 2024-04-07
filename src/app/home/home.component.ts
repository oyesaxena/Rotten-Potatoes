import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FeatureModule } from '../feature/feature.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,HttpClientModule,CommonModule,FeatureModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  trendingMovies:any=[]
  constructor(private http:HttpClient){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getTrendingMovies()
  }

  getTrendingMovies(){
    this.http.get('http://localhost:4200/assets/data/trending-movies.json').subscribe((res)=>{
      this.trendingMovies=res;

    })
  }


}
