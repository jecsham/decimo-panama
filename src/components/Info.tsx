import React from 'react';

class Info extends React.Component<any, any>{
    state = {
        showMore: false
    }

    toggleContent = () => {
        this.setState({ showMore: !this.state.showMore })
    }

    render() {
        return (
            <div className="uk-text-muted uk-text-small">
                <p>
                    El décimo tercer mes es un ingreso económico que todos y cada uno de los panameños aguardan percibir 3 veces por año, con la meta de ser remunerados por su desempeño y contribución laboral.
                </p>
                {this.state.showMore ? (
                    <div>
                        <p className="uk-text-muted">
                            Este décimo tercer salario que recibe cada trabajador del campo público y privado es un derecho adquirido que surgió a través del Decreto Número 221 del 18/11/1971, y fué posteriormente regulado por el Decreto Número 19 del 7/09/1963.</p>
                        <p className="uk-text-muted">
                            Un detalle importante a tener en cuenta es que el mismo no puede ser embargado, ya que cuenta con una protección al respecto, no obstante, sí debe pagar el 7.25% como contribución a la Seguridad Social y al Impuesto Sobre la Renta.</p>
                        <p>
                            <a href="https://www.aydesa.com/decimo-tercer-mes-panama/" target="_blank" rel="noopener noreferrer">Fuente</a>
                        </p>
                        <button className="uk-button uk-button-text" onClick={this.toggleContent}>Leer menos</button>
                    </div>
                ) : (
                        <div>
                            <button className="uk-button uk-button-text" onClick={this.toggleContent}>Leer más</button>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Info;