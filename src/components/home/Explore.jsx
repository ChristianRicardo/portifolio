import React from 'react'
import '../../assets/css/Explore.css'

export default props => {
    return (
        <div>
            <button class="btn-explore" type="button">{props.label}</button>
        </div>
    );
}