import {trigger, stagger, animate, style, group, query, transition} from '@angular/animations';


export const routerTransition = [trigger('upTransition', [
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'fixed', width:'100%' })
      , { optional: true }),
    query('.block', style({ opacity: 0 })
      , { optional: true }),
    group([
      query(':enter', [
        style({ transform: 'translateY(100%)', 'z-index': '0' }),
        animate('1s cubic-bezier(1, 0, 0, 1)', style({ transform: 'translateY(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'perspective(1000px) translateZ(0px)', 'z-index': '-1' }),
        animate('1s cubic-bezier(1, 0, 0, 1)', style({ 
          transform: 'perspective(1000px) translateZ(-300px)' ,
          opacity: '0'
        
        }))
      ], { optional: true }),
    ]),
    query(':enter .block', stagger(400, [
      style({ transform: 'translateX(100px)' }),
      animate('1s cubic-bezier(1, 0, 0, 1)', style({ transform: 'translateX(0px)', opacity: 1 })),
    ]), { optional: true }),
  ])
]), trigger('downTransition', [
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'fixed', width:'100%' })
      , { optional: true }),
    query('.block', style({ opacity: 0 })
      , { optional: true }),
    group([
      query(':leave', [
        style({ transform: 'translateY(0%)', 'z-index': '0' }),
        animate('1s cubic-bezier(1, 0, 0, 1)', style({ transform: 'translateY(100%)' }))
      ], { optional: true }),
      query(':enter', [
        style({ transform: 'perspective(1000px) translateZ(-300px)', 'z-index': '-1' }),
        animate('1s cubic-bezier(1, 0, 0, 1)', style({ transform: 'perspective(1000px) translateZ(0px)' }))
      ], { optional: true }),
    ]),
    query(':enter .block', stagger(400, [
      style({ transform: 'translateX(0px)' }),
      animate('1s cubic-bezier(1, 0, 0, 1)', style({ transform: 'translateX(100px)', opacity: 1 })),
    ]), { optional: true }),
  ])
])]
