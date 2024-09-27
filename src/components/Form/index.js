import React from "react"
import PropTypes from "prop-types";
import { FaPlus } from "react-icons/fa";
import './Form.css'


export default function Form({handleChange, handleSubmit , novaTarefa}) {
    return (
        <form onSubmit={handleSubmit} action="#" className="form">

            <input 
                type="text" 
                onChange={handleChange} 
                value={novaTarefa}>
            </input>

            <button 
                type="submit" 
                className="plus-button">
                <FaPlus />
            </button>

        </form>
    )
}


// Form.defaultProps = {
//  novaTarefa: 'Valor padrão'
//  }

Form.propTypes = {
    handleChange:PropTypes.func.isRequired,
    handleSubmit:PropTypes.func.isRequired,
    novaTarefa:PropTypes.string.isRequired
    //novaTarefa:PropTypes.string

}