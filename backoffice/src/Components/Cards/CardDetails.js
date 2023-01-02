import React from 'react';

export default function CardDetails(props) {
    return (
        <div className="card border-0 rounded-4 shadow h-100">
            <div className="card-body">
                <div className='row h-100 d-flex align-items-center'>
                    {props.info.map((item, index) => {
                        return (
                            <div key={index} className='col-12'>
                                <h5 className="card-title fw-light">{item.categoria}</h5>
                                <h6 className="card-subtitle mb-4 fs-4">{item.informacao}</h6>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}