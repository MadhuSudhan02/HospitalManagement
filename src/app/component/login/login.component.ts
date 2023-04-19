import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { UserServiceService } from 'src/app/service/userService/user-service.service';
import { Router } from '@angular/router';
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

  
  constructor(private formBuilder: FormBuilder , private userService : UserServiceService ,
    private router : Router) { }
  
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

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            console.log("hello");
            
        }
        else 
        {

            let data = {
                email : this.registerForm.value.email ,
                password : this.registerForm.value.password
            }
            this.userService.loginService(data).subscribe((req : any) => {
                console.log( "data in the login" ,req) ;
            })

            this.router.navigate(['/dashboard']) ;
        }
        
        // display form values on success
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }


}
