import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

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
 constructor( private auth:AuthService,private router: Router){


 };

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

    }else{
      this.errMsg='';
      let res= this.auth.login(this.username,this.password)
      if(res===200){
        this.router.navigate(['home'])
      }
      else{
        this.errMsg='password wrong';
      }
    }
 }

}
