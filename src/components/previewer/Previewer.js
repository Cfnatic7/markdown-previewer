import './Previewer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { togglePreviewEnlargement } from '../../reduxPart/store';

export const Previewer = () => {
    const enlargement = useSelector(state => {
        return state.input.isPreviewEnlarged;
    })
    let height = enlargement? {height: '75vh'} : {height: '20vh'};
    const dispatch = useDispatch();
    const expandIcon = <FontAwesomeIcon icon = {faChevronDown} className = 'enlargementIcon' onClick = {() => dispatch(togglePreviewEnlargement())}/>;
    const minimizeIcon = <FontAwesomeIcon icon = {faChevronUp} className = 'enlargementIcon' onClick = {() => dispatch(togglePreviewEnlargement())}/>;
    return (<div className = 'container p-3'>
                <div className = 'row'>
                    <div className = 'col-2'>
                        <span>
                        <FontAwesomeIcon icon={faFreeCodeCamp} />
                        Previewer
                        </span>
                    </div>
                    <div className = 'col-8 d-flex justify-content-center align-items-center'>
                        {enlargement ? minimizeIcon : expandIcon}
                    </div>
                </div>
                <div className = 'row preview' style = {height}>
                    
                </div>
            </div>)
}