import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expensesDummy from '../fixtures/expenses';

let startAddExpense, history, wrapper;

beforeEach(() => {
    startAddExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />);
});

test('render AddExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expensesDummy[2]);
    expect(history.push).toHaveBeenLastCalledWith('/dashboard');
    expect(startAddExpense).toHaveBeenLastCalledWith(expensesDummy[2]);
});