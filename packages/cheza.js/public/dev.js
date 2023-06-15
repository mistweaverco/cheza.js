import { Cheza } from '../src/dev.ts'

const player = new Cheza(document.querySelector('video'), {})
console.log('canPlayType', Cheza.canPlayType('video/mp4'))
