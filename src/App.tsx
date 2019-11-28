import React from 'react';
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
        <div className="uk-width-auto uk-text-center uk-padding-large">
          <h4 className="uk-text-secondary uk-text-bold uk-margin-medium-bottom">Calculadora del décimo</h4>
          <Form appCallback={this.appCallbackFunc} />
          <div className="uk-margin-top">
            <hr className="Hr" />
            <Result data={this.state.data} />
          </div>
        </div>
      </div>
    )
  }
}

class Form extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      month1: '',
      month2: '',
      month3: '',
      month4: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }


  senData = () => {
    this.props.appCallback(this.state);
  }

  handleChange = (evt: any) => {
    this.setState({ [evt.target.id]: evt.target.value });
  }

  calculate = () => {
    let { month1, month2, month3, month4 } = this.state;
    if (month1 === '' || month2 === '' || month3 === '' || month4 === '') {
      month1 = 0;
      month2 = 0;
      month3 = 0;
      month4 = 0;
    }

    let total = parseFloat(month1) + parseFloat(month2) + parseFloat(month3) + parseFloat(month4);
    let decimo: any = (total / 12).toFixed(2);
    let ssocial: any = ((7.25 / 100) * decimo).toFixed(2);
    let decimoFinal = (decimo - ssocial).toFixed(2);
    this.setState({ total, decimo, ssocial, decimoFinal, calculated: true }, () => {
      this.senData();
    });
  }

  render() {
    return (
      <div>
        <form className="Form">
          <div className="uk-margin-top">
            <label htmlFor="month1" className="uk-margin-small-right uk-text-secondary" >Mes 1</label>
            <input id="month1" type="number" value={this.state.month1} onChange={this.handleChange} className="uk-box-shadow-hover-small uk-input uk-form-width-medium uk-form-small" />
          </div>
          <div className="uk-margin-top">
            <label htmlFor="month2" className="uk-margin-small-right uk-text-secondary" >Mes 2</label>
            <input id="month2" type="number" value={this.state.month2} onChange={this.handleChange} className="uk-box-shadow-hover-small uk-input uk-form-width-medium uk-form-small" />
          </div>
          <div className="uk-margin-top">
            <label htmlFor="month3" className="uk-margin-small-right uk-text-secondary" >Mes 3</label>
            <input id="month3" type="number" value={this.state.month3} onChange={this.handleChange} className="uk-box-shadow-hover-small uk-input uk-form-width-medium uk-form-small" />
          </div>
          <div className="uk-margin-top">
            <label htmlFor="month4" className="uk-margin-small-right uk-text-secondary" >Mes 4</label>
            <input id="month4" type="number" value={this.state.month4} onChange={this.handleChange} className="uk-box-shadow-hover-small uk-input uk-form-width-medium uk-form-small" />
          </div>
        </form>
        <div className="uk-margin-top">
          <button className="uk-box-shadow-hover-small uk-button uk-button-default uk-button-small" onClick={this.calculate}>Calcular</button>
        </div>
      </div>

    )
  }
}

class Result extends React.Component<any, any>{

  render() {
    let data = this.props.data;
    if (data.calculated) {
      return (
        <div className="uk-text-right">
          <small>Total: ${data.total}</small> <br />
          <small>Décimo: ${data.decimo}</small> <br />
          <small>Descuento Seguro Social: - ${data.ssocial}</small> <br />
          <small className="uk-text-bold uk-text-secondary">Décimo Final: ${data.decimoFinal}</small>
        </div>
      )
    } else {
      return <p><span role="img" aria-label="wohoopee">🤠</span></p>
    }
  }
}

export default App;
