import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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
    @ViewChild('myForm') myForm!: ElementRef;


    contactForm = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(this.minLengthName)]],
        email: ['', [Validators.required, Validators.email]],
        message: ['', [Validators.required, Validators.minLength(this.minLength)]],
    });


    constructor(private viewportScroller: ViewportScroller, private fb: FormBuilder, private httpClient: HttpClient) {}
  
    async sendMail() {
        if (!this.contactForm.invalid) {
            let response = await fetch('https://denise-siegl.developerakademie.net/send_mail/send_mail.php',
                { method: 'POST', body: this.setFormData() }

            );
            if (!response.ok) {
              this.emailSent = false;
              throw response;
            } else { 
              this.emailSent = true;
              this.myForm.nativeElement.classList.add('success-sent');
            }
        } else {
              this.emailSent = false;
        }
        this.isSubmitted = true;
        this.contactForm.reset();  

        setTimeout(() => {
          this.isSubmitted = false;
          this.myForm.nativeElement.classList.remove('success-sent');
      }, 3000);
    } 


    setFormData() {
        const data:any = this.contactForm.value;
        const fd = new FormData();
        fd.append('name', data.name);
        fd.append('email', data.email);
        fd.append('message', data.message);
        return fd;
    } 


    public scroll(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

}


