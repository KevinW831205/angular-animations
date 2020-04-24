import { trigger, state, style, transition, animate } from '@angular/animations';

export let fadeBlue = trigger('fade', [
    state('void', style({opacity: 0 })),

    transition(':enter, :leave', [
        style({
            backgroundColor: 'blue',
        }),
        animate(2000),
    ]),
])
