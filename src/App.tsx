import React from 'react';
import './App.css';

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
      <div className="Container">
        <div className="Content">
          <h3>Claculadora del décimo - Panamá</h3>
          <Form appCallback={this.appCallbackFunc} />
          <div className="Mt-1">
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
    const { month1, month2, month3, month4 } = this.state;
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
          <div className="Control">
            <label htmlFor="month1" className="Mr-1" >Mes 1</label>
            <input id="month1" type="number" value={this.state.month1} onChange={this.handleChange} className="Input-text" />
          </div>
          <div className="Control">
            <label htmlFor="month2" className="Mr-1" >Mes 2</label>
            <input id="month2" type="number" value={this.state.month2} onChange={this.handleChange} className="Input-text" />
          </div>
          <div className="Control">
            <label htmlFor="month3" className="Mr-1" >Mes 3</label>
            <input id="month3" type="number" value={this.state.month3} onChange={this.handleChange} className="Input-text" />
          </div>
          <div className="Control">
            <label htmlFor="month4" className="Mr-1" >Mes 4</label>
            <input id="month4" type="number" value={this.state.month4} onChange={this.handleChange} className="Input-text" />
          </div>
        </form>
        <div className="Mt-1">
          <button className="Btn" onClick={this.calculate}>Calcular</button>
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
        <div>
          <small>Total: ${data.total}</small> <br />
          <small>Décimo: ${data.decimo}</small> <br />
          <small>Descuento Seguro Social: - ${data.ssocial}</small> <br />
          <small>Décimo Final: ${data.decimoFinal}</small>
        </div>
      )
    } else {
      return <p> <span role="img" aria-label="wohopee">🤠</span></p>
    }
  }
}

export default App;
