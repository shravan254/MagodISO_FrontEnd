import React, { useState } from "react";
import FirstForm from "./Components/FirstForm";
import SecondForm from "./Components/SecondForm";
import FormHeader from "./Components/FormHeader";
import { Tab, Tabs } from "react-bootstrap";
import HomeForm from "./Components/HomeForm";
import CustomerRequirements from "./Components/CustomerRequirements";
import Risks from "./Components/Risks";
import QuoteDetails from "./Components/QuoteDetails";
import EnquiryReview from "./Components/EnquiryReview";

function ISO_Forms() {

  const [key, setKey] = useState("Customer_Requirments");

  return (
    <div>
      <FormHeader />
      <HomeForm/>
      <div className="form-container">

          <div>
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3 mt-3 tab_font"
            >

              <Tab eventKey="Customer_Requirments" title="Customer Requirment">
                <CustomerRequirements/>
              </Tab>

              <Tab eventKey="Welding_Details" title="Welding Details">
                <FirstForm/>
              </Tab>

              <Tab eventKey="over_due" title="Testing">
                <SecondForm/>
              </Tab>

              <Tab eventKey="Risk" title="Risk">
                <Risks/>
              </Tab>  

              <Tab eventKey="Quote Details" title="Quote Details">
                <QuoteDetails/>
              </Tab>

              <Tab eventKey="Enquiry Review" title="Enquiry Review">
                <EnquiryReview/>
              </Tab>
              
            </Tabs>
          </div>
      </div>
    </div>
  );
}

export default ISO_Forms;
