import React from 'react';

export function Pagina () {
    return (    
        
        <div className="row  justify-content-end">
            <div class="pagination">
                <li class="page-item ">
                    <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#">
                        1
                    </a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#">
                        2
                    </a>
                </li>                        
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </div>
                    
        </div>

                
    );
}