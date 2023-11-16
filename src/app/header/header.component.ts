import { Component, ElementRef, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { IconsService } from '../icons.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})


export class HeaderComponent implements OnInit {
    isActiveHeader: boolean = false;
    isActiveAbout: boolean = false;
    isActiveSkills: boolean = false;
    isActiveMyWork: boolean = false;
    isActiveContact: boolean = false;
    isMenuOpen: boolean = false;
    
    @ViewChild('navResponsiv') navResponsiv!: ElementRef;

    constructor(public is: IconsService, @Inject(DOCUMENT) private document: Document, public route: ActivatedRoute){}


    ngOnInit(): void {
        this.route.fragment.subscribe(fragment => {
            this.updateActiveSections(fragment);
        });
        this.updateActiveSections(this.route.snapshot.fragment);
    }


    toggleMenu(): void {
        this.isMenuOpen = this.navResponsiv.nativeElement.classList.contains('open');
    }


    closeMenu(): void {
        this.isMenuOpen = false;
        this.navResponsiv.nativeElement.classList.remove('open');
    }


    @HostListener('window:scroll') onScroll(): void {
        this.updateActiveSections(this.route.snapshot.fragment);
    }


    private updateActiveSections(fragment: string | null): void {
        const aboutElement = this.document.getElementById('aboutMe');
        const skillElement = this.document.getElementById('skills');
        const portfolioElement = this.document.getElementById('portfolio');
        const contactElement = this.document.getElementById('contact');
        
        const isAboutActive = !!aboutElement && aboutElement.getBoundingClientRect().top <= 200 && aboutElement.getBoundingClientRect().bottom > 100;
        const isSkillsActive = !!skillElement && skillElement.getBoundingClientRect().top <= 200 && skillElement.getBoundingClientRect().bottom > 100;
        const isMyWorkActive = !!portfolioElement && portfolioElement.getBoundingClientRect().top <= 200 && portfolioElement.getBoundingClientRect().bottom > 200;
        const isContactActive = !!contactElement && contactElement.getBoundingClientRect().top <= 200 && contactElement.getBoundingClientRect().bottom > 100;
    
        this.isActiveAbout = isAboutActive;
        this.isActiveSkills = isSkillsActive;
        this.isActiveMyWork = isMyWorkActive;
        this.isActiveContact = isContactActive; 
    }
}







