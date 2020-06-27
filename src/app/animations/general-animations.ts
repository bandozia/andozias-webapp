import { trigger, style, animate, transition } from '@angular/animations';

export const fadeFromLeft = trigger('fadeFromLeft', [
    transition('* <=> *', [
        style({
            transform: 'translateX(-50%)',
            opacity: 0            
        }),
        animate('0.4s ease')
    ])
])