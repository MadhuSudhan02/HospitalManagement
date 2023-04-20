import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { UserServiceService } from 'src/app/service/userService/user-service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
// import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
  data : any

  
  constructor(private formBuilder: FormBuilder , private userService : UserServiceService ,
    private router : Router , private snackBar : MatSnackBar) { }
  
  registerForm!: FormGroup;
    submitted = false;
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;
       
        console.log("onsubmit" , this.registerForm.value)

        this.userService.loginGetService().subscribe((reqData : any) =>{
            this.data = reqData
            console.log(this.data , "data recieved")
            console.log(this.data.email , "email")
            console.log(this.data.password, "password")
        })

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            console.log("hello");
            
            
        }
        else 
        {
            this.router.navigate(['/dashboard']) ;
            this.snackBar.open('logined', 'successful',{
                duration :3000
            })
            // if(this.registerForm.value.email == this.data.value.email && this.registerForm.value.password == this.data.value.password){

            // }
            // else 
            // {
            //     alert("please use proper cerdencial")
            // }
            
            // let data = {
            //     email : this.registerForm.value.email ,
            //     password : this.registerForm.value.password
            // }
            // this.userService.loginService(data).subscribe((req : any) => {
            //     console.log( "data in the login" ,req) ;
            // })

            
        }
        
        // display form values on success
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }


}
