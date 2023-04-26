import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(private viewportScroller: ViewportScroller) {}
  
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('mailField') mailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendBtn') sendBtn!: ElementRef;

  public scroll(elementId: string): void { 
    this.viewportScroller.scrollToAnchor(elementId);
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
    fd.append('nameField', nameField.value);
    fd.append('mailField', mailField.value);
    fd.append('messageField', messageField.value);

    await fetch('https://denise.selfcoders.com/send_mail.php'),
    {
      method: 'POST',
      body: fd
    }
  

    // text anzeigen gesendet
    /* nameField.disabled = false;
    mailField.disabled = false;
    messageField.disabled = false; */
  }

}
