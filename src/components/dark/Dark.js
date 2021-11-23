import React from 'react';
import './dark.scss';
export const Dark = (props) => {
    const slc = ['dark'];
    if(props.showModal){
        slc.push('darkShow');
    }
    return (
        <div className={slc.join(' ')} onClick={props.modalHideHandler}>

        </div>
    )
}