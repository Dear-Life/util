import 'babel-polyfill'
import App, { user } from './App'
import './App.css'
import './App.less'

setTimeout(() => {
    App(user)
    Promise.resolve(1).then(v => console.log(v))
}, 1000)
