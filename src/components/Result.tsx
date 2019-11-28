import React from 'react';

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

export default Result;