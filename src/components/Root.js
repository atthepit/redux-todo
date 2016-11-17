import React from 'react'
import AddTodo from '../containers/AddTodo'
import TodosLayout from '../containers/TodosLayout'
import Footer from '../containers/Footer'

const Root = () =>
  <div>
    <h1>{`Hello World!`}</h1>
    <AddTodo />
    <TodosLayout />
    <Footer />
  </div>

export default Root
