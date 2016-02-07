var Samsara = require('samsarajs');

var EventHandler = Samsara.Events.EventHandler;

class Param extends EventHandler {
  constructor( props ) {
    this.key = props.key;
    this.value = props.value;
    this.min = props.min;
    this.max = props.max;
    this.type = props.type ? props.type : typeof this.value;
  };

  setValue = ( value ) => {
    this.value = value;
    this.emit( 'onChange', { key: this.key, value: this.value } );
  };

  getValue = () => {
    return this.value;
  };
};

export default Param;
