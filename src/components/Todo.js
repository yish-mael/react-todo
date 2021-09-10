import { useState } from 'react';
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
    const [ getModalStatus, setModalStatus ] = useState(false);
      
    function deleteModalHandler() {
        setModalStatus(true);
    }

    function closeModalHandler() {
        setModalStatus(false);
    }

    return (
        <div>
            <div className='card'>
            <h2>{props.text}</h2>
            <div className='actions'>
                <button className='btn' onClick={deleteModalHandler}>Delete</button>
            </div>
            </div>
            {getModalStatus && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
            {getModalStatus && <Backdrop onCancel={closeModalHandler} />}

        </div>
    );
}

export default Todo;