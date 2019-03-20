import React from 'react'
import {render} from 'react-dom'
import App from './App'
import './css/index.css'
import './modules/header'
import './scss/index.scss'

console.log('webpack is runnig')

render(<App/>, document.getElementById('app'))