import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { expenses, Budget, Currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.allocatedBudget);
    }, 0);

    return (
        <div className='alert alert-warning'>
            <span style={{ fontWeight: 'bold'}}>Remaining:</span> {Currency} {parseInt(Budget) - totalExpenses}
        </div>
    );
};

export default Remaining;