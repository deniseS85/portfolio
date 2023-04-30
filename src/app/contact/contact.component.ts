import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})


export class ContactComponent {
    minLength: number = 20;
    isSubmitted: boolean = false;
    emailSent: boolean = false;


    contactForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        message: ['', [Validators.required, Validators.minLength(this.minLength)]],
    });


  constructor(private viewportScroller: ViewportScroller, private fb: FormBuilder) {}
    

  async sendMail() {
      if (!this.contactForm.invalid) {
          await fetch('https://denise-siegl.developerakademie.net/send_mail/send_mail.php',
              { method: 'POST', body: this.setFormData() }
          );
          this.emailSent = true;
          console.log('email gesendet')
          this.contactForm.reset();
      } else {
        this.emailSent = false;
        console.log('email nicht gesendet')
      }

      this.isSubmitted = true;
  /* 
  setTimeout(() => {
              this.isSubmitted = false;
              this.contactForm.reset();
          }, 3000);
  */
    
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

