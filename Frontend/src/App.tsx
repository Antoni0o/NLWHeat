import { useContext } from 'react'

import styles from './App.module.scss'

import { Login } from './components/Login'
import { Messages } from './components/Messages'
import { SendMessage } from './components/SendMessage'
import { AuthContext } from './context/auth'

function App() {
  const { user } = useContext(AuthContext);

  return (
    <main className={styles.contentWrapper}>
      <Messages/>
      { !!user ? <SendMessage/> : <Login/>}
    </main>
  )
}

export default App
