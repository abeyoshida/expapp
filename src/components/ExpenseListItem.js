import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
  const createdAtSafe = moment(createdAt).format("MMMM Do YYYY");
  const amountSafe = numeral(amount/100).format('$0,0.00');
  return (
    <Link className="list-item" to={`/edit/${id}`}>
      <div>
      <h3 className="list-item__title">{description}</h3>
      <span className="list-item__sub-title">{createdAtSafe}</span>
      </div>
      <h3 className="list-item__data">{amountSafe}</h3>
    </Link>
  );
}
export default ExpenseListItem;
