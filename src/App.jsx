import { Routes, Route, Navigate } from "react-router-dom";
import { Create, Home, Edit } from './pages';
import "./index.css"
const App = () => {

  return (
    <div className="container-custom">
      <div className='text-center my-4 fs-1 fw-bolder' style={{paddingRight: "100px"}}>
        IMAGENES
      </div>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace={true} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  )
}

export default App
