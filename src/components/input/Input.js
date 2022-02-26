import './Input.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import {updateInput, toggleInputEnlargement} from '../../reduxPart/store';

export const Input = () => {
    const enlargement = useSelector(state => {
        return state.input.isInputEnlarged;
    })
    let height = enlargement? {height: '75vh'} : {height: '20vh'};
    const textAreaInput = useSelector(state => state.input.input);
    const dispatch = useDispatch();
    const expandIcon = <FontAwesomeIcon icon = {faChevronDown} className = 'enlargementIcon' onClick = {() => dispatch(toggleInputEnlargement())}/>;
    const minimizeIcon = <FontAwesomeIcon icon = {faChevronUp} className = 'enlargementIcon' onClick = {() => dispatch(toggleInputEnlargement())}/>;
    return (<div className = 'container p-3 w-50'>
                <div className = 'row'>
                    <div className = 'col-2'>
                        <h4>
                        <FontAwesomeIcon icon={faFreeCodeCamp} />
                        Editor
                        </h4>
                    </div>
                    <div className = 'col-8 d-flex justify-content-center align-items-center'>
                        {enlargement ? minimizeIcon : expandIcon}
                    </div>
                </div>
                <div className = 'row'>
                    <textarea className = 'form-control main-input' style = {height} value = {textAreaInput} spellcheck = 'false' onChange = {(e) => dispatch(updateInput(e.target.value))}></textarea>
                </div>
            </div>)
}