import * as React from 'react';
import './todo-results.scss';
import { TodosContext } from '../../todo-context';

export const TodoResults = () => {
  const { todos } = React.useContext(TodosContext);
  const calculateChecked = () => todos.reduce((acc, val) => (val.checked ? acc + 1 : acc), 0);

  return (
    <div className="todo-results">
      Done:
      {calculateChecked()}
    </div>
  );
};
