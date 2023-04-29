import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, ViewChild, Input } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})


export class ContactComponent {
  minLength: number = 20;
  isSubmitted: boolean = false;
  emailSent: boolean = false;
  emailNotSent: boolean = false;

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(this.minLength)]],
});

  constructor(private viewportScroller: ViewportScroller, private fb: FormBuilder) {}
    


/* 
  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let mailField = this.mailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendBtn = this.sendBtn.nativeElement;
    
    nameField.disabled = true;
    mailField.disabled = true;
    messageField.disabled = true;
    sendBtn.disabled = true;
 */
    //animation senden

    /* let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('email', mailField.value);
    fd.append('message', messageField.value);


    await fetch('https://denise-siegl.developerakademie.net/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd
      }
    );
     */

    // text anzeigen gesendet
   /*  nameField.disabled = false;
    mailField.disabled = false;
    messageField.disabled = false;
    nameField.value = '';
    mailField.value = '';
    messageField.value = '';
  } */


  sendMail() {
    const data:any = this.contactForm.value;
    const fd = new FormData();
    fd.append('name', data.name);
    fd.append('email', data.email);
    fd.append('message', data.message);
    this.isSubmitted = true;
    /* this.contactForm.reset(); */
    console.log(this.contactForm.value, this.contactForm.invalid)

    /* await fetch('https://denise-siegl.developerakademie.net/send_mail/send_mail.php',
    {
      method: 'POST',
      body: this.setFormData()
    }
  );

    this.isSubmitted = true;

    setTimeout(() => {
        this.isSubmitted = false;
    }, 2000);

    this.contactForm.reset(); */
  }

  /* setFormData() {
    const data:any = this.contactForm.value;
    const fd = new FormData();
    fd.append('name', data.name);
    fd.append('email', data.email);
    fd.append('message', data.message);
    return fd;
  } */


  public scroll(elementId: string): void { 
    this.viewportScroller.scrollToAnchor(elementId);
  }
}

