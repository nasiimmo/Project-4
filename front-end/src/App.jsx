import { Outlet, useNavigation } from 'react-router-dom'

// Custom components
import Nav from './components/Nav'
import Footer from './components/Footer'

import Loading from './images/spinner.gif'

function App() {
  const navigation = useNavigation()
  return (

      <>
      <Nav />
      <main>
        {navigation.state === 'idle' ? (
          <Outlet />
        ) : (
          <div className='spinner-container'>
            <img src={Loading} alt="spinner" className="spinner" />
          </div>
        )}
      </main>
      <Footer />
      </>
  )
}

export default App