import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Context from './context';
import FormObject from './components/FormObject/FormObject';

class SchemaForm extends Component{
  static propTypes: Object = {
    form: PropTypes.object,
    json: PropTypes.object,
    defaultValue: PropTypes.any,
    value: PropTypes.any
  };

  constructor(): void{
    super(...arguments);
  }
  render(): React.Element{
    const { form, json }: {
      form: Object,
      json: Object
    } = this.props;

    return (
      <Context.Provider value={{ form }}>
        <FormObject root={ json } />
      </Context.Provider>
    );
  }
}

export default SchemaForm;