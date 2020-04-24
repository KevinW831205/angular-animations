import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

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
        animate('1s ease-out', keyframes([
            style({
                offset: 0.2,
                opacity: 1,
                transform: 'translateX(40px)'
            }),
            style({
                offset: 1,
                opacity: 0,
                transform: 'translateX(-100%)'
            })
        ]))
    ])
    // transition(':leave', [

    //     animate("200ms ease-in", style({
    //         transform: 'translateX(100%)'
    //     }))
    // ])
])


