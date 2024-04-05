import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
 username='';
 password='';
 errMsg='';
 constructor(){};

 ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  
 }

 login(){
    if(this.username?.length===0){
      this.errMsg='Enter Username';
    }
    else if (this.password?.length===0){
      this.errMsg='Enter Password';

    }
 }

}
