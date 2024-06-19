import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Spent = () => {
    const { expenses, Currency } = useContext(AppContext);
    const totalSpent = expenses.reduce((total, item) => {
        return (total += item.allocatedBudget);
    }, 0);

    return (
        <div className='alert alert-primary'>
            <span style={{ fontWeight: 'bold'}}>Spent:</span> {Currency} {totalSpent}
        </div>
    );
};

export default Spent;