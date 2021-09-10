import { useState } from 'react';
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
    const [ getModalStatus, setModalStatus ] = useState(false);
      
    function deleteHandler() {
        setModalStatus(true);
    }

    return (
        <div>
            <div className='card'>
            <h2>{props.text}</h2>
            <div className='actions'>
                <button className='btn' onClick={deleteHandler}>Delete</button>
            </div>
            </div>
            {getModalStatus && <Modal />}
            {getModalStatus && <Backdrop />}

        </div>
    );
}

export default Todo;