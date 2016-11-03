import React from 'react'
import Counter from './Counter'

const Layout = React.createClass({
    getInitialState() {
        return {
            counter: 0,
        }
    },
    decrement(counter) {
        this.setState({
            counter: counter - 1,
        })
    },
    increment(counter) {
        this.setState({
            counter: counter + 1,
        })
    },
    render() {
        const { counter } = this.state

        return (
            <Counter
                count={ counter }
                increment={() => this.increment(counter)}
                decrement={() => this.decrement(counter)}
            />
        )
    },
})

export default Layout
