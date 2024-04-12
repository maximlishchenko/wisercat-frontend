import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [NgClass],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent implements OnInit {
  
  @Input() 
  type: 'success' | 'error' | 'info' = 'info';
  
  @Input() 
  text: string = '';
 
  icons = new Map();

  ngOnInit() {
    this.icons.set('success', 'check-circle-fill');
    this.icons.set('error', 'exclamation-triangle-fill');
    this.icons.set('info', 'info-fill');
  }

  get icon (): string {
    return this.icons.get(this.type);
  }
}
