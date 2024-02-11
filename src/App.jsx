import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Header from './components/Layouts/Header';
import Users from './pages/users';
import Foods from './pages/foods';
import Orders from './pages/orders';
import Alerts from './pages/alerts';
function App() {

    return (
        <>
            <Header />
            {/** */}
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Dashboard />} >
                        <Route path='users' element={<Users />}/>
                        <Route path='foods' element={<Foods />}/>
                        <Route path='orders' element={<Orders />}/>
                        <Route path='alerts' element={<Alerts />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
