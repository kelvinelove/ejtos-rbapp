import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const ItemSelected = (props) => {
    const { Currency, Budget, expenses, dispatch } = useContext(AppContext);

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [action, setAction] = useState('');


    const submitEvent = () => {

        if (/^[0-9\b]+$/.test(quantity)) {
            const totalExpenses = expenses.reduce((total, item) => {
                return (total += item.allocatedBudget);
            }, 0);

            const reminded = parseInt(Budget) - totalExpenses;

            if (quantity <= reminded) {
                const item = {
                    name: name,
                    quantity: parseInt(quantity),
                };

                if (action === "Reduce") {
                    dispatch({
                        type: 'RED_QUANTITY',
                        payload: item,
                    });
                } else {
                    dispatch({
                        type: 'ADD_QUANTITY',
                        payload: item,
                    });
                }
            }
            else {
                alert(`The value can not exceed remaning funds ${Currency}${reminded}!`);
            }
        }
        else {
            alert('The field accept only numbers value!');
        }
    };

    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <div className='row w-100'>
                    <div className="input-group mb-3 alert alert-secondary w-100 justify-content-between align-items-center">
                        <div className="d-flex align-items-center mr-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
                            </div>
                            &nbsp;
                            <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                                <option defaultValue>Choose...</option>
                                <option value="Marketing" name="Marketing">Marketing</option>
                                <option value="Finance" name="Finance">Finance</option>
                                <option value="Sales" name="Sales">Sales</option>
                                <option value="Human Resource" name="Human Resource">Human Resource</option>
                                <option value="IT" name="IT">IT</option>
                            </select>
                        </div>
    
                        <div className="d-flex align-items-center mr-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation </label>
                            </div>
                            &nbsp;
                            <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                                <option defaultValue value="Add" name="Add">Add</option>
                                <option option value="Reduce" name="Reduce">Reduce</option>
                            </select>
                        </div>
    
                        <div className="d-flex align-items-center">
                            <span className="eco"></span>
                            <span style={{ fontSize: '1.5rem' }}>{Currency} &nbsp;</span>
                            <input
                                required='required'
                                type='number'
                                id='quantity'
                                min='0'
                                value={quantity}
                                style={{ size: 10 }}
                                onChange={(event) => setQuantity(event.target.value)}>
                            </input> &nbsp;
                            <button className="btn btn-primary ml-3" onClick={submitEvent}>
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ItemSelected;