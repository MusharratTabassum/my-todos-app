import React, { useState } from 'react';
import './Todo.css'
import { addToList, deleteFromList, removeAllFromList } from '../../actions';
import { useDispatch } from 'react-redux';
const Todo = () => {

    const [inputInfo, setInputInfo] = useState('');
    const dispatch = useDispatch();

    const getInput = (event) => {
        setInputInfo(event.target.value);
    }


    return (
        <div>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <figcaption>Add your list here</figcaption>
                    </figure>
                </div>
                <div className="addItems">
                    <input type="text" placeholder=' add item ... '
                        value={inputInfo} onChange={getInput} />
                    <i className="fa fa-plus add-btn" onClick={addToList}></i>
                </div>
            </div>

        </div>
    );
};

export default Todo;