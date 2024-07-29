import { Route, Router, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import TermsOfService from "../pages/SignUp/SignUp01/TermsOfService";
import SignUpForm from "../pages/SignUp/SignUp02/SignUpForm";
import FindID from "../pages/FindID/FindID";
import SignUpSuccess from "../pages/SignUp/SignUpSuccess";
import FindIDSuccess from "../pages/FindID/FindIDSuccess";
import FindPW from "../pages/FindPW/FindPW";

function AppRoutes() {
    return (
        <Routes>
            <Route index element={<TermsOfService />}/>
            <Route path="/signUp" element={<SignUpForm />}/>
            <Route path="/signUpSuccess" element={<SignUpSuccess />} />
            <Route path="/login" element={<Login />} />
            <Route path="/findID" element={<FindID />} />
            <Route path="/findIDSuccess" element={<FindIDSuccess />} />
            <Route path="/findPW" element={<FindPW />} />

        </Routes>
    );
}

export default AppRoutes;
