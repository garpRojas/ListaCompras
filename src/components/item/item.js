import React from 'react';

const item = (props) => {
    
    if(props.comprado){
        return (
            <div>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start background-green">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{props.titulo}</h5>
                        <button className="btn btn-danger">x</button>

                    </div>
                    <p className="mb-1">{props.notas}</p>
                    <p className="mb-1">{props.precio}</p>
                    <p className="mb-1">{props.lugar}</p>
                    <small>Comprado por {props.user} {props.date}</small>
                </a>
            </div>
        )
    }else {
        return (
            <div>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{props.titulo}</h5>
                        <button className="btn btn-danger">x</button>

                    </div>
                    <p className="mb-1">{props.notas}</p>
                    <p className="mb-1">{props.precio}</p>
                    <p className="mb-1">{props.lugar}</p>
                    <small>Agregado por {props.user} {props.date}</small>
                </a>
            </div>
        )
    }
};
export default item;