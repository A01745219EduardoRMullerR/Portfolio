import React from 'react'; 
import { 
    BrowserRouter as Router, 
    Routes, 
    Route 
} from "react-router-dom"; 
import { AppRouter } from './AppRouter';

export const MainAppRouter = () => {
    return(
        <Router>
            <div>
                <Routes>
                    <Route path="*" element={<AppRouter/>} />
                </Routes>
            </div>
        </Router>
    )
}