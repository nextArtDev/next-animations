export type SingleTypes = {
  id: number
  label: string
  src: string
  icon: string
  desc: string[]
}[]
export const iceCreamTypes = [
  {
    id: 1,
    label: 'americano',
    src: '/coffee/ice-types/1.webp',
    icon: '/coffee/ice-types/1.webp',
    desc: ['first', 'second'],
  },
  {
    id: 2,
    label: 'cappucino',
    src: '/coffee/ice-types/2.png',
    icon: '/coffee/ice-types/2.png',
    desc: ['first', 'second'],
  },
  {
    id: 3,
    label: 'eespresso',
    src: '/coffee/ice-types/3.png',
    icon: '/coffee/ice-types/3.png',
    desc: ['first', 'second'],
  },
  {
    id: 4,
    label: 'latte',
    src: '/coffee/ice-types/4.png',
    icon: '/coffee/ice-types/4.png',
    desc: ['first', 'second'],
  },
  {
    id: 5,
    label: 'melange',
    src: '/coffee/ice-types/2.png',
    icon: '/coffee/ice-types/2.png',
    desc: ['first', 'second'],
  },
  {
    id: 6,
    label: 'viennees',
    src: '/coffee/ice-types/5.png',
    icon: '/coffee/ice-types/5.png',
    desc: ['first', 'second'],
  },
]
export const coffeeTypes = [
  {
    id: 1,
    label: 'americano',
    src: '/coffee/coffee-types/americano.png',
    icon: '/coffee/coffee-types/americano-th.png',
    desc: ['first', 'second'],
  },
  {
    id: 2,
    label: 'cappucino',
    src: '/coffee/coffee-types/cappucino.png',
    icon: '/coffee/coffee-types/cappucino-th.png',
    desc: ['first', 'second'],
  },
  {
    id: 3,
    label: 'eespresso',
    src: '/coffee/coffee-types/eespresso.png',
    icon: '/coffee/coffee-types/esspreesso-th.png',
    desc: ['first', 'second'],
  },
  {
    id: 4,
    label: 'latte',
    src: '/coffee/coffee-types/latte.png',
    icon: '/coffee/coffee-types/lattee-th.png',
    desc: ['first', 'second'],
  },
  {
    id: 5,
    label: 'melange',
    src: '/coffee/coffee-types/melange.png',
    icon: '/coffee/coffee-types/melange-th.png',
    desc: ['first', 'second'],
  },
  {
    id: 6,
    label: 'viennees',
    src: '/coffee/coffee-types/viennees.png',
    icon: '/coffee/coffee-types/vienneees-th.png',
    desc: ['first', 'second'],
  },
]
export const cakeTypes = [
  {
    id: 1,
    label: 'americano',
    src: '/coffee/cake-types/1.png',
    icon: '/coffee/cake-types/1.png',
    desc: ['first', 'second'],
  },
  {
    id: 2,
    label: 'cappucino',
    src: '/coffee/cake-types/2.png',
    icon: '/coffee/cake-types/2.png',
    desc: ['first', 'second'],
  },
  {
    id: 3,
    label: 'eespresso',
    src: '/coffee/cake-types/3.png',
    icon: '/coffee/cake-types/3.png',
    desc: ['first', 'second'],
  },
  {
    id: 4,
    label: 'latte',
    src: '/coffee/cake-types/4.png',
    icon: '/coffee/cake-types/4.png',
    desc: ['first', 'second'],
  },
  {
    id: 5,
    label: 'melange',
    src: '/coffee/cake-types/1.png',
    icon: '/coffee/cake-types/1.png',
    desc: ['first', 'second'],
  },
  {
    id: 6,
    label: 'viennees',
    src: '/coffee/cake-types/2.png',
    icon: '/coffee/cake-types/2.png',
    desc: ['first', 'second'],
  },
]

export const allTypes = [
  {
    id: 1,
    type: 'coffee',
    src: '/coffee/coffee-types/eespresso.png',
    singleType: coffeeTypes,
  },
  {
    id: 2,
    type: 'cake',
    src: '/coffee/ice-types/cup.png',
    singleType: iceCreamTypes,
  },
  {
    id: 3,
    type: 'ice-cream',
    src: '/coffee/cake-types/1.png',
    singleType: cakeTypes,
  },
]
