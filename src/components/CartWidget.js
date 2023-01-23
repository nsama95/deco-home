import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const Styles = {
    icon : {
        color:'white ',
        zoom: 1.5,
    }
}
const CardWidget = () => {
    return (
        <div>
           <FontAwesomeIcon icon={faShoppingCart} style={Styles.icon}/>
        </div>
    )
}

export default CardWidget