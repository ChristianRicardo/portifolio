import React from 'react'
import '../../assets/css/Button_header.css'

export default props => {
    return (
        <div>
            <button class="pure-material-button-contained" type="button">{props.label}</button>
        </div>
    );
}