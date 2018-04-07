import Component from '@glimmer/component';

export default class SoundButton extends Component {

  play() {
    console.log('play', this.args.src);
    let sound = document.getElementById(this.args.src);
    sound.play();
  }
}
