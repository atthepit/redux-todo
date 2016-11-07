import { createStore } from 'redux'
import root from '../reducers/'


export default createStore.bind(null, root)
