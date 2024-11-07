
import { Provider } from 'react-redux'
import store from './store/store'
import './App.css'

function App() {


  return (

    <Provider store={store}>
      App
    </Provider>
  )
}

export default App
