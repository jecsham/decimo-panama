import React from 'react';

class Form extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            month1: '',
            month2: '',
            month3: '',
            month4: '',
            segurosocial: '9.75',
            seguroeducativo: '1.25',
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
        let { month1, month2, month3, month4, segurosocial } = this.state;
        if (month1 === '' || month2 === '' || month3 === '' || month4 === '') {
            month1 = 0;
            month2 = 0;
            month3 = 0;
            month4 = 0;
        }

        let total = parseFloat(month1) + parseFloat(month2) + parseFloat(month3) + parseFloat(month4);
        let decimo: any = (total / 12).toFixed(2);
        let ssocial: any = ((parseFloat(segurosocial) / 100) * decimo).toFixed(2);
        let decimoFinal = (decimo - ssocial).toFixed(2);
        this.setState({ total, decimo, ssocial, decimoFinal, calculated: true }, () => {
            this.senData();
        });
    }

    render() {
        return (
            <div className="uk-flex uk-flex-center">
                <div className="uk-width-medium">
                    <div className="uk-width-medium">
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
                            <div className="uk-margin-top">
                                <label htmlFor="segurosocial" className="uk-margin-small-right uk-text-secondary">% Seguro Social</label>
                                <input id="segurosocial" type="number" value={this.state.segurosocial} onChange={this.handleChange} className="uk-form-controls uk-box-shadow-hover-small uk-input uk-form-width-small uk-form-small" />
                            </div>
                        <div className="uk-grid uk-margin-top">
                            {/* <div className="uk-width-expand uk-form-stacked">
                                <label htmlFor="seguroeducativo" className="uk-form-label uk-text-muted uk-text-small">Seguro Educativo</label>
                                <input id="seguroeducativo" type="number" value={this.state.seguroeducativo} onChange={this.handleChange} className="uk-form-controls uk-box-shadow-hover-small uk-input uk-form-width-small uk-form-small" />
                            </div> */}
                        </div>
                    </div>
                    <div className="uk-margin-top">
                        <button className="uk-box-shadow-hover-small uk-button uk-button-default uk-button-small" onClick={this.calculate}>Calcular</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Form;  