import glContext from 'gl-context';

export default class App {
  constructor( props ) {
    this.canvas = document.body.appendChild( document.createElement( 'canvas' ) );
    this.gl = glContext( this.canvas, { preserveDrawingBuffer: true }, this._render );
    this.isSetup = false;
  };

  setup = () => {

  };

  _render = () => {
    if( !this.isSetup ) {
      this.setup();
      this.isSetup = true;
    }
    this.update();
    this.render();
  };

  update = () => {

  };

  render = () => {

  };

  getCanvas = () => {
    return this.canvas;
  };

  getContext = () => {
    return this.gl;
  };
};
