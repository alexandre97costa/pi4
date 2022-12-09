import React from 'react';

export default function Pagina () {
    return (    
        
        <div className="row  justify-content-end">
            <div className="pagination">
                <li className="page-item ">
                    <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">
                        1
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">
                        2
                    </a>
                </li>                        
                <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </div>
                    
        </div>

                
    );
}