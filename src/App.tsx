import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {Login} from "./pages/Login";
import {Registration} from "./pages/Registration";
import {Profile} from "./pages/Profile";
import {Recovery} from "./pages/Recovering-password";
import {NewPassword} from "./pages/NewPassword";
import {Test} from "./pages/Test";

function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Test/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/registration'} element={<Registration/>}/>
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'/recovery'} element={<Recovery/>}/>
                <Route path={'/newPassword'} element={<NewPassword/>}/>
                <Route path={'404'} element={<h1 style={{textAlign: "center"}}>404: Page Not Found</h1>}/>
                <Route path={'*'} element={<Navigate to={"404"}/>}/>
            </Routes>
        </div>
    );
}

export default App;
