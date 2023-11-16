import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})


export class ContactComponent {
    minLength: number = 20;
    minLengthName: number = 3;
    isSubmitted: boolean = false;
    emailSent: boolean = false;
    isChecked: boolean = false;
    messageErrorText = '';

    /* Your message should have at least 20 letters */
    
    @ViewChild('myForm') myForm!: ElementRef;
    @ViewChild('checkboxSelector') checkboxSelector!: ElementRef;
    
    @HostListener('window:resize') onResize(): void {      
        this.messageErrorText = window.innerWidth <= 354 ? 'Please write at least 20 letters' : ' Your message should have at least 20 letters';
    }

    
    contactForm = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(this.minLengthName)]],
        email: ['', [Validators.required, Validators.email]],
        message: ['', [Validators.required, Validators.minLength(this.minLength)]],
    });


    constructor(private fb: FormBuilder) {
    }
  
    toggleChecked () {
        this.isChecked = !this.isChecked;
    }

    async sendMail() {
        if (!this.contactForm.invalid && this.isChecked) {
            let response = await fetch('https://denise.selfcoders.com/send_mail/send_mail.php',
                { method: 'POST', body: this.setFormData() }
            );
            if (!response.ok) {
              this.emailSent = false;
              throw response;
            } else { 
              this.emailSent = true;
              this.contactForm.reset();
              this.checkboxSelector.nativeElement.classList.remove('checkbox-selected');
            }
        } else {
              this.emailSent = false;
        }
        this.isSubmitted = true;

        setTimeout(() => {
          this.isSubmitted = false;
        }, 2000);
    } 

    setFormData() {
        const data:any = this.contactForm.value;
        const fd = new FormData();
        fd.append('name', data.name);
        fd.append('email', data.email);
        fd.append('message', data.message);
        return fd;
    }
}


