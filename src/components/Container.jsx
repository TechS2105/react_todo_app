import React from 'react';
import ContainerStyle from '../../public/styles/Container.module.css';

function Container(props) {
    
    return (

        <div className={ContainerStyle.container}>

            {props.children}

        </div>

    );

}

export default Container;