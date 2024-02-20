import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./pages/Sidebar";
import WithNav from "./Layout/WithNav";
import Customer from "./customer/Customer";
import CustomerInfo from "./pages/Sales/Customer/Customer/CustomerInfo";
import CustomerNew from "./pages/Sales/Customer/Customer/CustomerNew";
import Parentroute from "./Layout/Parentroute";
import Login from "./pages/Auth/Login";
import DrawingList from "./pages/Sales/Customer/DrawingList/DrawingList";
import Material from "./pages/Sales/Customer/Material/Material";
import Order from "./pages/Sales/Customer/Orders/Order";

import PartList from "./pages/Sales/Customer/PartList/PartList";
import ISO_Forms from "./pages/Sales/Customer/ISO_Forms/ISO_Forms";
import Commercial from "./pages/Sales/Customer/Commercial/Outstanding_summary/Commercial";
import Custinvandpayments from "./pages/Sales/Customer/Commercial/Invoices_and_payments/Custinvandpayments";
// import Mapping from "./pages/Admin/Access/Mapping";
// import MenuRole from "./pages/Admin/Access/MenuRole";
// import Menus from "./pages/Admin/Users/Menus";
// import Roles from "./pages/Admin/Users/Roles";
// import Users from "./pages/Admin/Users/Users";
// import Quotation from "./pages/Quotation/Quotations/Quotation";

import Quotation from "./pages/Sales/Quotation/Quotations/Quotation";
import Home from "./pages/Home";
import HomeOne from "./pages/HomeOne";
// import Adddetails from "./pages/Quotation/Quotations/AddDetails/Adddetails";
import Adddetails from "./pages/Sales/Quotation/Quotations/AddDetails/Adddetails";

import ShowInvoice from "./pages/Sales/Customer/Commercial/Invoices_and_payments/Components/ShowInvoice";
import Menu from "./pages/Packing&Invoicing/Menu/Menu";
import InspServiceScheduleList from "./pages/Packing&Invoicing/Menu/Inspection/Service/InspServiceScheduleList";
import InspServiceFindSchedule from "./pages/Packing&Invoicing/Menu/Inspection/Service/InspServiceFindSchedule";
import InspProfileFindSchedule from "./pages/Packing&Invoicing/Menu/Inspection/Profile/InspProfileFindSchedule";
import InspProfileScheduleList from "./pages/Packing&Invoicing/Menu/Inspection/Profile/InspProfileScheduleList";
import InspFabricationFindSchedule from "./pages/Packing&Invoicing/Menu/Inspection/Fabrication/InspFabricationFindSchedule";
import InspFabricationScheduleList from "./pages/Packing&Invoicing/Menu/Inspection/Fabrication/InspFabricationScheduleList";
import InternalRejectionForm from "./pages/Packing&Invoicing/Menu/Inspection/Components/InternalRejectionForm";
import ExistedCustomerInfo from "./pages/Sales/Customer/Customer/ExistedCustomerInfo";
import UserRolesModules from "./pages/admin/userrolesmodules";
import CreateUsers from "./pages/admin/createusers";
import MenuRoleMapping from "./pages/admin/menurolemapping";
import SendMail from "./pages/sendmail/sendmails";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import TaskSheet from "./pages/Sales/Customer/ISO_Forms/TaskSheet/TaskSheet";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-center" />
      <Routes>
        <Route element={<Login />} path="/" />

        <Route path="/home" element={<Home />} />
        <Route path="/salesHome" element={<HomeOne />} />

        <Route element={<WithNav />}>
          {/* <Route path="adminpage" element={<AdminPage />} /> */}
          {/* <Route element={<TestComp />} path='/admin' /> */}
          <Route exact path="/mailer" element={<SendMail />} />

          <Route path="/Customer" element={<Parentroute />}>
            <Route path="CustomerInfo" element={<CustomerInfo />} />
            <Route
              path="ExistedCustomerInfo"
              element={<ExistedCustomerInfo />}
            />
            <Route path="CustomerNew" element={<CustomerNew />} />

            {/* <Route path="commercial" element={<Commercial />} /> */}
            <Route path="Outstandings" element={<Commercial />} />
            {/* <Route path="custinvandpayments" element={<Custinvandpayments />} /> */}

            <Route path="CustomerInvoiceAndPayments">
              <Route index={true} element={<Custinvandpayments />} />
              <Route path="showinvoice" element={<ShowInvoice />} />
            </Route>

            <Route path="DrawingList" element={<DrawingList />} />
            <Route path="Material" element={<Material />} />
            <Route path="Orders">
              {/* <Route index={true} element={<Order />} /> */}
              <Route path="OrdersCreated" element={<Order />} />
              <Route path="OrdersRecorded" element={<Order />} />
              <Route path="OrdersProcessing" element={<Order />} />
              <Route path="OrdersProduced" element={<Order />} />
              <Route path="OrdersReady" element={<Order />} />
              <Route path="OrdersDispatched" element={<Order />} />
              <Route path="OrdersAll" element={<Order />} />
            </Route>

            <Route path="PartList" element={<PartList />} />
            <Route path="RateEstimator" element={<ISO_Forms />} />
            <Route path="TaskSheet" element={<TaskSheet />} />
          </Route>

          <Route path="/admin" element={<Parentroute />}>
            <Route index={true} />
            <Route path="roles" element={<UserRolesModules />} />

            <Route path="mapping" element={<MenuRoleMapping />} />
            {/* <Route path="menuRoles" element={<MenuRoleMapping />} /> */}
            {/* <Route path="menus" element={<Menus />} /> */}
            <Route path="users" element={<CreateUsers />} />
          </Route>

          <Route path="/quotation" element={<Parentroute />}>
            <Route path="quotation">
              <Route index={true} element={<Quotation />} />
              <Route path="addDetails" element={<Adddetails />} />
            </Route>
            {/* <Route path="service" element={<MenuRole />} /> */}
            {/* <Route path="fabrication" element={<Menus />} /> */}
          </Route>

          <Route path="/PackingAndInvoices" element={<Parentroute />}>
            {/* <Route path="menu"> */}
            <Route index={true} />
            <Route path="Profile">
              <Route
                path="FindSchedule"
                element={<InspProfileFindSchedule />}
              />
              <Route
                path="ScheduleList"
                element={<InspProfileScheduleList />}
              />
            </Route>
            <Route path="Fabrication">
              <Route
                path="FindSchedule"
                element={<InspFabricationFindSchedule />}
              />
              <Route
                path="ScheduleList"
                element={<InspFabricationScheduleList />}
              />
            </Route>
            <Route path="Service">
              <Route path="FindSchedule">
                <Route index={true} element={<InspServiceFindSchedule />} />

                <Route path="RejectParts" element={<InternalRejectionForm />} />
              </Route>
              <Route
                path="ScheduleList"
                element={<InspServiceScheduleList />}
              />
            </Route>
            {/* </Route> */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
