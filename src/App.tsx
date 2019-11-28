import React from 'react';
import Form from './components/Form';
import Result from './components/Result';
import Info from './components/Info';

import './App.css';
import '../node_modules/uikit/dist/css/uikit.css';

class App extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = { data: '' };
  }
  appCallbackFunc = (formData: any) => {
    this.setState({ data: formData })
  }

  render() {
    return (
      <div className="uk-flex uk-flex-center">
        <div className="uk-width-xlarge uk-text-center uk-padding-large">
          <h4 className="uk-text-secondary uk-text-bold uk-margin-medium-bottom">Calculadora del décimo</h4>
          <p>Ingresa tus ganancias de los últimos 4 meses</p>
          <Form appCallback={this.appCallbackFunc} />
          <div className="uk-margin">
            <hr className="Hr" />
            <Result data={this.state.data} />
          </div>
          <Info/>
        </div>
      </div>
    )
  }
}

export default App;
