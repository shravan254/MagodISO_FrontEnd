import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./pages/Sidebar";
import WithNav from "./Layout/WithNav";
import Customer from "./customer/Customer";
import Parentroute from "./Layout/Parentroute";
import Login from "./pages/Auth/Login";
import QuotationMain from "./pages/Sales/Customer/ISO_Forms/RateEstimator/QuotationMain";
import RateEstimator from "./pages/Sales/Customer/ISO_Forms/RateEstimator/RateEstimator";
import Home from "./pages/Home";
import HomeOne from "./pages/HomeOne";
import UserRolesModules from "./pages/admin/userrolesmodules";
import CreateUsers from "./pages/admin/createusers";
import MenuRoleMapping from "./pages/admin/menurolemapping";
import SendMail from "./pages/sendmail/sendmails";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import TaskSheet from "./pages/Sales/Customer/ISO_Forms/TaskSheet/TaskSheet";
import Solidstatelaser from "./pages/Sales/Customer/ISO_Forms/SolidStateLaser/Solidstatelaser";
import Co2Form from "./pages/Sales/Customer/ISO_Forms/Co2Form/Co2Form";
import Buttonpdf from "./pages/Sales/Customer/ISO_Forms/Printpages/Rateestimator/Buttonpdf";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-center" />
      <Routes>
        <Route element={<Login />} path="/" />
        <Route path="/home" element={<Home />} />
        <Route path="/salesHome" element={<HomeOne />} />
        <Route element={<WithNav />}>
          <Route exact path="/mailer" element={<SendMail />} />
          <Route path="/Customer" element={<Parentroute />}>
            <Route path="Quotation" element={<QuotationMain />} />
            <Route path="RateEstimator" element={<RateEstimator />} />
            <Route path="TaskSheet" element={<TaskSheet />} />
            <Route path="SolidStateForm" element={<Solidstatelaser />} />
            <Route path="CO2Form" element={<Co2Form />} />
            <Route path="pdf" element={<Buttonpdf />} />
          </Route>

          <Route path="/admin" element={<Parentroute />}>
            <Route index={true} />
            <Route path="roles" element={<UserRolesModules />} />

            <Route path="mapping" element={<MenuRoleMapping />} />
            <Route path="users" element={<CreateUsers />} />
          </Route>

          {/* <Route path="/quotation" element={<Parentroute />}>
            <Route path="quotation">
              <Route index={true} element={<Quotation />} />
              <Route path="addDetails" element={<Adddetails />} />
            </Route>
          </Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
