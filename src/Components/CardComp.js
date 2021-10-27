// eslint-disable-next-line no-unused-vars
import React from 'react';


const cardComp = (props) => {

    return (
        <div className="container card shadow p-3 mb-3 bg-white rounded">
            <div className="card-body">
                
                    {props.children}

            </div>

        </div>
    );

}


export default cardComp;