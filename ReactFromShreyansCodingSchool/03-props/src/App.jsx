import React from 'react'
import Card from './Components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user = "Piyush" age = {22} img = "https://images.unsplash.com/photo-1506610654-064fbba4780c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww"/>
      <Card user = "Gagan" age = {18} img = "https://images.unsplash.com/photo-1556448851-9359658faa54?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww"/>
      <Card user = "Ravi ji" age = {28} img = "https://images.unsplash.com/photo-1600268330186-76564be81357?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhciUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D"/>
      {/* <Card/>
      <Card/>
      <Card/> */}
    </div>
  )
}

export default App