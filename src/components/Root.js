import React from 'react'
import AddTodo from '../containers/AddTodo'
import TodosLayout from '../containers/TodosLayout'
import VisibilityFilters from '../components/VisibilityFilters'

const Root = ({ params }) =>
  <div>
    <h1>{`Hello World!`}</h1>
    <AddTodo />
    <TodosLayout filter={ params.filter } />
    <VisibilityFilters />
  </div>

Root.prototype.propTypes = {
  params: React.PropTypes.shape({
    filter: React.PropTypes.string,
  }),
}

export default Root
