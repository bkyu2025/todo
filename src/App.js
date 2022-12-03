import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import MainPage from "./mainpage"

function App() {
  return (

    <Router>
      <div>
        <Routes>
          <Route path="/" element={<MainPage/>}></Route>
        </Routes>
      </div>
    </Router>
  )
};

export default App;