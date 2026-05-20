import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  email: string = '';

  onSubscribe(): void {
    if (this.email.trim()) {
      console.log('Newsletter subscription:', this.email);
      this.email = '';
      // Add toast notification here if using ngx-toastr
    }
  }

  getCurrentYear(): number {
    return new Date().getFullYear();
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  quickLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Press', href: '#' },
  ];

  categories = [
    { name: 'Electronics', href: '#' },
    { name: 'Fashion', href: '#' },
    { name: 'Home & Garden', href: '#' },
    { name: 'Sports', href: '#' },
  ];

  support = [
    { name: 'Contact Us', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Shipping Info', href: '#' },
    { name: 'Returns', href: '#' },
  ];

  socialLinks = [
    { icon: 'facebook-f', url: '#', label: 'Facebook' },
    { icon: 'twitter', url: '#', label: 'Twitter' },
    { icon: 'instagram', url: '#', label: 'Instagram' },
    { icon: 'linkedin-in', url: '#', label: 'LinkedIn' },
  ];

  paymentMethods = [
    { icon: 'cc-visa', label: 'Visa' },
    { icon: 'cc-mastercard', label: 'Mastercard' },
    { icon: 'cc-paypal', label: 'PayPal' },
    { icon: 'cc-amex', label: 'American Express' },
  ];

  appLinks = [
    { platform: 'iOS', icon: 'apple', url: '#' },
    { platform: 'Android', icon: 'google-play', url: '#' },
  ];
}
