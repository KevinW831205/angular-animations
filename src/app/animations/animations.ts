import { trigger, state, style, transition, animate, keyframes, animation, useAnimation } from '@angular/animations';

export let bounceOutLeftAnimation = animation(
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
    ])))

export let fadeBlue = trigger('fade', [
    state('void', style({ opacity: 0 })),

    transition(':enter, :leave', [
        style({
            backgroundColor: 'blue',
        }),
        animate(2000),
    ]),
])

// export let slide = trigger('slide', [
//     transition(':enter', [
//         style({
//             transform: 'translateX(-20px)'
//         }),
//         animate(500)
//     ]),
//     transition(':leave', [
//         useAnimation(bounceOutLeftAnimation)
//     ])
//     // transition(':leave', [

//     //     animate("200ms ease-in", style({
//     //         transform: 'translateX(100%)'
//     //     }))
//     // ])
// ])

export let fadeInAnimation = animation([
    style({ opacity: 0 }),
    animate('{{ duration }} {{easing}}')
], {
    params: {
        duration: '2000ms',
        easing: 'ease-out'
    }
})

export let fadeOutAnimation = animation([
    animate(2000, style({ opacity: 0 }))
])

export let fade = trigger('fade', [
    transition(':enter', [
        useAnimation(fadeInAnimation)
    ]),
    transition('leave', [
        useAnimation(fadeOutAnimation)
    ])
])
