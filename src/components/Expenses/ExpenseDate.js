import './ExpenseDate.css';

const ExpenseDate = props => {
  const getDate = d => props.date.toLocaleString('en-US', d);
  const month = getDate({ month: 'long' });
  const day = getDate({ day: '2-digit' });
  const year = props.date.getFullYear();
  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
};

export default ExpenseDate;
