import Phaser, { Game, Scene } from "phaser";
import MainScene from './scenes/main-scene';

const game = new Game({
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: MainScene
});
