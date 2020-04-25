import { Component, OnInit } from '@angular/core';
import { trigger, transition, state, style, animate, useAnimation, query, animateChild } from '@angular/animations';
import { fadeBlue, slide, bounceOutLeftAnimation, fadeInAnimation } from '../animations/animations';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [
    trigger('todosAnimation', [
      transition(':enter', [
        query('h1', [
          style({ transform: 'translateY(-20px)' }),
          animate(1000)
        ]),
        query('@todoAnimation',[
          animateChild()
        ])
      ])
    ]),
    trigger('todoAnimation', [
      transition(':enter', useAnimation(fadeInAnimation, {
        params: {
          duration: '500ms'
        }
      })),
      transition(':leave', [
        style({ backgroundColor: 'red' }),
        animate(1000),
        useAnimation(bounceOutLeftAnimation)
      ])
    ])
    // fadeBlue
    // trigger('fade',[
    //   state('void',style({
    //     opacity:0 
    //   })),
    //   transition(':enter, :leave',[
    //     style({
    //       backgroundColor: 'yellow',
    //     }),
    //     animate(2000),
    //   ]),
    //   // transition('void <=> *',[
    //   //   style({
    //   //     backgroundColor: 'yellow',
    //   //   }),
    //   //   animate(2000),
    //   // ]),
    //   // transition('*=>void',[
    //   //   animate(2000)
    //   // ])
    // ])
  ]
})
export class TodosComponent {
  items: any[] = [
    'Wash the dishes',
    'Call the accountant',
    'Apply for a car insurance'];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = '';
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }


  animationStarted($event) {
    console.log($event)
  }

  animationDone($event) {
    console.log($event)
  }
}
