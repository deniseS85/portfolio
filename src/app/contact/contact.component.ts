import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, ViewChild, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(private viewportScroller: ViewportScroller) {}
  
  @Input() nameInvalid = false;
  @Input() emailInvalid = false;
  @Input() messageInvalid = false;
  @ViewChild('form') form!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('mailField') mailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendBtn') sendBtn!: ElementRef;

  public scroll(elementId: string): void { 
    this.viewportScroller.scrollToAnchor(elementId);
  }


  nameIsInvalid(){
    this.nameInvalid=true;
  }

  emailIsInvalid(){
    this.emailInvalid=true;
  }

  messageIsinvalid(){
    this.messageInvalid=true;
  }

  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let mailField = this.mailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendBtn = this.sendBtn.nativeElement;
    
    nameField.disabled = true;
    mailField.disabled = true;
    messageField.disabled = true;
    sendBtn.disabled = true;

    //animation senden

    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('email', mailField.value);
    fd.append('message', messageField.value);


    await fetch('https://denise-siegl.developerakademie.net/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd
      }
    );
    

    // text anzeigen gesendet
    nameField.disabled = false;
    mailField.disabled = false;
    messageField.disabled = false;
    nameField.value = '';
    mailField.value = '';
    messageField.value = '';
  }

}

