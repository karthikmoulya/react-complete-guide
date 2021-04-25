import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

import './ExpenseContainer.css';

const ExpenseContainer = props => {
  const expense = props.expenses.map(expense => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));

  return <Card className='expenses'>{expense}</Card>;
};

export default ExpenseContainer;
