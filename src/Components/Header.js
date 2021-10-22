import React,{Component} from 'react';
import './Header.css'
import logo from '../Imagen/logo-mer.jpg';
class Header extends Component{
    render(){
        return(
            <div className="Header">
                <img className="Header-logo" src={logo}/>
            </div>
        );
    }
}
export default Header;