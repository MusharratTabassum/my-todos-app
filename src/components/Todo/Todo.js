import React, { useState } from 'react';
import './Todo.css'
import { addToList, deleteFromList } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
const Todo = () => {

    const [inputInfo, setInputInfo] = useState('');
    const dispatch = useDispatch();
    const allList = useSelector((state) => state.todoReducers.alltodos)
    console.log(allList)

    const getInput = (event) => {
        const inputValue = event.target.value;
        if (!inputValue || inputValue == ' ')
            alert('plz fill field');
        else
            setInputInfo(inputValue);
    }

    return (
        <div className='container' >
            <div className="main-div">
                <div className="child-div">
                    <h1>Todos</h1>
                </div>
                <div className="addItems d-flex justify-content-center">
                    <input type="text" placeholder=' add item ... '
                        value={inputInfo} onChange={getInput} />
                    <i className="fa fa-plus add-btn" onClick={() => dispatch(addToList(inputInfo), setInputInfo(''))}></i>
                </div>
            </div>

            <div className='d-flex justify-content-center'>
                <div >
                    {
                        allList.map((elem) => {
                            return (
                                <div className="eachItem" key={elem.id}>
                                    <h3> {elem.data} </h3>
                                    <div className='todo-btn'>
                                        <i className="far fa-trash-alt add-btn" title="Delete item" onClick={() => dispatch(deleteFromList(elem.id))}></i>

                                    </div>

                                </div>
                            )
                        })
                    }

                </div>
            </div>

        </div>
    );
};

export default Todo;