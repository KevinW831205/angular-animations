import { trigger, state, style, transition, animate } from '@angular/animations';

export let fadeBlue = trigger('fade', [
    state('void', style({ opacity: 0 })),

    transition(':enter, :leave', [
        style({
            backgroundColor: 'blue',
        }),
        animate(2000),
    ]),
])

export let slide = trigger('slide', [
    transition(':enter', [
        style({
            transform: 'translateX(-20px)'
        }),
        animate(500)
    ]),
    transition(':leave', [

        animate(500, style({
            transform: 'translateX(100%)'
        }))
    ])
])
