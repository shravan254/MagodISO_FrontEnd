import React, { useEffect, useState } from "react";
// import { Typeahead } from "react-bootstrap-typeahead";
// import axios from 'axios'

export default function HomeForm() {
  // const [formData, setFormData] = useState({});
  // let [selected, setSelected] = useState("");

  // const [getCustData, setGetCustData] = useState([]);

  // const[custData, setCustData]=useState({
  //   customer_name:'', email_id:'',customer_address:'',contact_no:'',Drawing_No:''})

  //   const dataChange=(e)=>{
  //     setCustData({...custData,[e.target.name]: e.target.value })
  // }
  // console.log(custData,"c");

  // const handleCheckboxChange = (e) => {
  //   const { name, checked } = e.target;
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [name]: checked,
  //   }));
  // };

  // useEffect(() => {
  //   axios.get("http://localhost:4001/getCustData")
  //     .then((res) => {
  //       console.log("custdata", res.data);
  //       if (res.data.Status === "Success") {
  //         console.log("data", res.data.Result);
  //         setGetCustData(res.data.Result);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // }, []);


  // const saveData=(e)=>{

  //     axios.post('http://localhost:4001/postCustData', custData)
  //     .then((res)=>{
  //   console.log(res.data);
  //     }).catch((err)=>{
  //       console.log('eroor in fromntend',err);
  //     })
  //   }

  // let dummydata = [
  //   { label: "Alabama" },
  //   { label: "Alaska" },
  //   { label: "Arizona" },
  //   { label: "Arkansas" },
  // ];

  return (
    <>
    <div className="row col-md-12">
      
      <h5><b>Customer Information</b></h5>

      <div className="col-md-4 mt-1">
        <div className="">
          <label className="form-label">Quotation No</label>
          <input type="date" disabled/>
        </div>

        <div className="">
          <label className="form-label">Enquiry Date</label>
          <input type="date" disabled/>
        </div>

        <div className="">
          <label className="form-label">Contact</label>
          <input type="text" disabled/>
        </div>
      </div>

      <div className="col-md-4">
          <div className="">
            <label className="form-label">Type</label>
            <input type="text" disabled/>
          </div>

          <div className="">
            <label className="form-label">Status</label>
            <input type="text" disabled/>
          </div>

          <div className="">
            <label className="form-label">Customer</label>
            <input type="text" disabled/>
          </div>
      </div>

      <div className="col-md-4">

          <div className="ms-5">
            <button className="button-style" variant="primary">
              Drawing Folder
            </button>
          </div>

          <div className="ms-5">
            <button className="button-style" variant="primary">
              Save
            </button>
          </div>

          <div className="ms-5">
            <button className="button-style" variant="primary">
              Cancel
            </button>
          </div>

          <div className="ms-5">
            <button className="button-style" variant="primary">
              Close
            </button>
          </div>

      </div>
    </div>











    {/* <div className="row col-md-12">
        <div className="col-md-4">
        <label className="form-label">Customer</label>
        <div style={{ display: "flex", gap: "70px" }}>
          <div className="mt-1 p-1">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="new"
                id="flexCheckDefault"
                onChange={handleCheckboxChange}
              />
              <label
                className="form-check-label checkBoxStyle"
                htmlFor="flexCheckDefault"
              >
                New
              </label>
            </div>
          </div>

          <div className="mt-1 p-1">
            <div className="form-check ">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                name="existing"
                onChange={handleCheckboxChange}
              />
              <label
                className="form-check-label checkBoxStyle"
                htmlFor="flexCheckDefault"
              >
                Existing
              </label>
            </div>
          </div>
        </div>

        <div className="">
          <label className="form-label">Customer Name</label>

          <Typeahead
            id="basic-example"
            onChange={selected}
            options={dummydata}
            placeholder="Select Customer"
            selected={selected}
            name={selected}
            value={custData.selected}
          />
        </div>

        <div className="mt-1">
          <label className="form-label">Email Id</label>
          <input type="email" name="email_id" value={custData.email_id} 
         onChange={dataChange} required />
        </div>

        <div className="">
          <label className="form-label">Customer Address</label>
          <textarea
            className="form-control sticky-top"
            rows="2"
            id=""
            name="customer_address"
            value={custData.customer_address}
            onChange={dataChange}
            style={{ height: "140px", resize: "none" }}
          ></textarea>
        </div>
      </div>

      <div className="col-md-4">
        <div className="">
          <label className="form-label">Enquiry Date</label>
          <input type="date" />
        </div>

        <div className="mt-2">
          <label className="form-label">Contact Person</label>
          <input type="text" />
        </div>

        <div className="mt-1">
          <label className="form-label">Contact No</label>
          <input type="text" name="contact_no" value={custData.contact_no} 
         onChange={dataChange} required />
        </div>

        <label className="form-label mt-1">Component</label>
        <div style={{ display: "flex", gap: "70px" }}>
          <div className="mt-1 p-1">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="new"
                id="flexCheckDefault"
                onChange={handleCheckboxChange}
              />
              <label
                className="form-check-label checkBoxStyle"
                htmlFor="flexCheckDefault"
              >
                New
              </label>
            </div>
          </div>

          <div className="mt-1 p-1">
            <div className="form-check ">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                name="existing"
                onChange={handleCheckboxChange}
              />
              <label
                className="form-check-label checkBoxStyle"
                htmlFor="flexCheckDefault"
              >
                Repeat
              </label>
            </div>
          </div>

          <div className="mt-1 p-1">
            <div className="form-check ">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                name="existing"
                onChange={handleCheckboxChange}
              />
              <label
                className="form-check-label checkBoxStyle"
                htmlFor="flexCheckDefault"
              >
                Redesign
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="">
          <label className="form-label">Conducted By</label>
          <input type="text" />
        </div>

        <div className="mt-1">
          <label className="form-label">Drawing No</label>
          <input type="text" name="Drawing_No" value={custData.Drawing_No} onChange={dataChange}/>
        </div>

        <label className="form-label">Type of Job</label>
        <div style={{ display: "flex", gap: "70px" }}>
          <div className="mt-1 p-1">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="new"
                id="flexCheckDefault"
                onChange={handleCheckboxChange}
              />
              <label
                className="form-check-label checkBoxStyle"
                htmlFor="flexCheckDefault"
              >
                Production
              </label>
            </div>
          </div>

          <div className="mt-1 p-1">
            <div className="form-check ">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                name="existing"
                onChange={handleCheckboxChange}
              />
              <label
                className="form-check-label checkBoxStyle"
                htmlFor="flexCheckDefault"
              >
                Development
              </label>
            </div>
          </div>
        </div>

        <div className="mt-3 mb-2 ms-5">
          <div className="ms-2">
            <button className="button-style" variant="primary" onClick={saveData}>
              Save
            </button>
          </div>

          <div className="ms-2">
            <button className="button-style" variant="primary">
              Cancel
            </button>
          </div>

          <div className="ms-2">
            <button className="button-style" variant="primary">
              Close
            </button>
          </div>
        </div>
      </div>
    </div> */}
    </>
  );
}
