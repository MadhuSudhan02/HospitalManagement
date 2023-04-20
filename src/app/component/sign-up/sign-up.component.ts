import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/service/userService/user-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
// import { MustMatch } from './_helpers/must-match.validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

  
  constructor(private formBuilder: FormBuilder , private userService : UserServiceService ,
    private snackBar : MatSnackBar) { }
  
  registerForm!: FormGroup;
    submitted = false;
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            Name: ['', Validators.required],
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
                Name : this.registerForm.value.Name ,
                email : this.registerForm.value.email ,
                password : this.registerForm.value.password
            }
            this.userService.signUpPost(data).subscribe((req : any) => {
                console.log( "data in the user" ,req) ;
            })

            //snackbar alert
            this.snackBar.open('Registered','successfully' , {
                duration : 3000 
            })
                
            }
        }
        
        // display form values on success
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }


