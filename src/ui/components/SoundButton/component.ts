import Component from '@glimmer/component';

export default class SoundButton extends Component {

  play() {
    console.log('play', this.args.src);
    var sound = new Howl({
      src: [this.args.src]
    });
    
    sound.play();
  }
}
