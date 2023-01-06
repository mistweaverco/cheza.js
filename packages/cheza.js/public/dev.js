import { Cheza } from '../src/dev.ts';

const player = new Cheza({
  target: 'video',
  width: 640,
  height: 360,
  sources: [
    {
      src: 'http://www.w3schools.com/html/mov_bbb.mp4',
      type: 'video/mp4'
    },
    {
      src: 'http://www.w3schools.com/html/mov_bbb.ogg',
      type: 'video/ogg'
    }
  ]
});
