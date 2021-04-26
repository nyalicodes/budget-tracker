import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = () => {

    const { dispatch } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        
        const expense = {
            id: uuidv4(),
            expenseName: name,
            cost: parseInt(cost)
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="row">

                <div className="col-sm">
                    <label for="name">Name</label>
                    <input
                        className="form-control"
                        type="text"
                        id="name"
                        value={name}
                        required
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>

                <div className="col-sm">
                    <label for="cost">Cost</label>
                    <input
                        className="form-control"
                        type="text"
                        id="cost"
                        value={cost}
                        required
                        onChange={(event) => setCost(event.target.value)}
                    />
                </div>

                <div className="col-sm mt-4">
                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Save
                    </button>
                </div>
            </div>
        </form>
    )
}

export default AddExpenseForm
