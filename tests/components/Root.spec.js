import React from 'react'
import { createRenderer } from 'react-addons-test-utils'
import createComponent from 'react-unit'  // eslint-disable-line no-unused-vars

import tape from 'tape'
import addAssertions from 'extend-tape'
import jsxEquals from 'tape-jsx-equals'

const test = addAssertions(tape, { jsxEquals })

import Root from '../../src/components/Root'

test('Test Root component', (assert) => {
  // Shallow rendering: Render React element only *one* level deep
  // const component = createComponent.shallow(<Root />)

  // Test component props and content
  // t.equal(component.props.className, 'default-class', 'ClassName props of component should equal "share"');

  const renderer = createRenderer()
  renderer.render(<Root />)
  assert.jsxEquals(
    renderer.getRenderOutput(),
    <h1>{'Hello World'}</h1>
  )

  assert.end()
})
