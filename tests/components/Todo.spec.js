import React from 'react'
import { createRenderer } from 'react-addons-test-utils'
import tape from 'tape'
import addAssertions from 'extend-tape'
import jsxEquals from 'tape-jsx-equals'

const test = addAssertions(tape, { jsxEquals })

import Todo from '../../src/components/Todo'

test('Test Todo component', (assert) => {
  const styleInactive = { textDecoration: 'none' }
  const props = {
    todo: { id: 0, text: 'Hello world', complete: false },
    onClick: () => this.todo.complete = !this.todo.complete,
  }

  const renderer = createRenderer()
  renderer.render(<Todo { ...props } />)

  assert.jsxEquals(
    renderer.getRenderOutput(),
    <div onClick={ () => props.onClick } style={ styleInactive }>
      { props.todo.text }
    </div>
  )

  assert.end()
})
