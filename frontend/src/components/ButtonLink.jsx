/* eslint-disable react/prop-types */
import {Link } from 'react-router-dom'
import UniButton from './Button';


function ButtonLink(props){


    return <Link to={props.route}><UniButton size="lg" bg={props.bg} color={props.color} width={props.width} text={props.text} /></Link>

}

//Component Template 
// <ButtonLink className='<class for css>' text="<button text>" route="<route name>"/>


export default ButtonLink;