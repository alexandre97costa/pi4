import React from 'react'

export default function ModalValidarVoucher(props) {
    return (
        <div className='row align-self-center'>
            <div className="modal fade" id={props.idModal} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Validar Voucher</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <div className='row justify-content-center'>
                                <div className="col-6 align-self-center">
                                    <div className="input-group ">
                                        <input type="text" className="form-control text-center" maxLength={1} />
                                        <input type="text" className="form-control text-center" maxLength={1} />
                                        <input type="text" className="form-control text-center" maxLength={1} />
                                        <input type="text" className="form-control text-center" maxLength={1} />
                                        <input type="text" className="form-control text-center" maxLength={1} />
                                        <input type="text" className="form-control text-center" maxLength={1} />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Submeter</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}