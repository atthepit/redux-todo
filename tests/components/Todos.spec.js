import React from 'react'
import { createRenderer } from 'react-addons-test-utils'
import tape from 'tape'
import addAssertions from 'extend-tape'
import jsxEquals from 'tape-jsx-equals'

const test = addAssertions(tape, { jsxEquals })

import Todos from '../../src/components/Todos'
import Todo from '../../src/components/Todo'

test('Test Todos component', (assert) => {
  const props = {
    todos: [
      { id: 0, text: 'Hello world', complete: false },
      { id: 1, text: 'Hello world 2', complete: true },
    ],
    onTodoClick: (id) => this.todos.map(t => t.id === id ? { ...t, complete: !t.complete } : t),
  }

  const renderer = createRenderer()
  renderer.render(<Todos { ...props } />)

  assert.jsxEquals(
    renderer.getRenderOutput(),
    <ul>
      { props.todos.map(todo =>
        <Todo key={ todo.id } onClick={ () => '' } todo={ todo } />
      ) }
    </ul>
  )

  assert.end()
})
