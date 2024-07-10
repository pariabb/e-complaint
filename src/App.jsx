import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import Complaint from './pages/Complaint'
import Sidebar from './components/Sidebar'
import NewComplaint from './pages/NewComplaint'

const Main = () => {
  return (
    <>

  
      <Sidebar>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />}></Route> */}
       <Route path="/" element={<Complaint />}></Route> 
       <Route path="/newcomplaint" element={<NewComplaint />}></Route> 


      </Routes>
      </Sidebar>
    

    </>
  )
}
const App = () => {

  return (
    <BrowserRouter>
        <Main />
    </BrowserRouter>

  )
}

export default App