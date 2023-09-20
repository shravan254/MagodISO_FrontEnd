import React, { useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
// import SubMenuComp from "./SubNavComp";
import { IconContext } from "react-icons/lib";
import {
  customerSidebar,
  adminSidebar,
  MaterialSidebar,
} from "../components/SidebarData";
import { FaAngleRight, FaAngleLeft, FaAngleDown } from "react-icons/fa";
import SubNavComp from "./SubNavComp";

const NavIcon = styled.div`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarWrap = styled.div`
  width: 100%;
  background-color: #263159;
`;

const SidebarComp = () => {
  const location = useLocation();
  let [lazerUser, setLazerUser] = useState(
    JSON.parse(localStorage.getItem("LazerUser"))
  );

  const [sidebar, setSidebar] = useState(true);

  function showSidebar() {
    setSidebar(!sidebar);
  }

  return (
    <>
      <nav className={sidebar ? "side-nav" : '"side-nav '}>
        <SidebarWrap>
          <div className="admin-title ">
            {/* {sidebar && 'M A G O D'} */}
            {/* <img className="logo" src={require("../ML-LOGO1.png")} /> */}
            <img
              className="logo"
              src={require("../Magod-Laser-Logo - White.png")}
            />
            {sidebar ? (
              <FaAngleRight
                className="toggle-icon"
                onClick={() => showSidebar()}
              />
            ) : (
              <FaAngleLeft
                className="toggle-icon"
                onClick={() => showSidebar()}
              />
            )}
          </div>

          {(location.pathname.startsWith("/admin")
            ? adminSidebar
            : customerSidebar
          ).map((item, index) => {
            return <SubNavComp item={item} key={index} sidebar={sidebar} />;
          })}

          {/* {(lazerUser.data.access.includes("/admin") ? adminSidebar : null).map(
            (item, index) => {
              return <SubNavComp item={item} key={index} sidebar={sidebar} />;
            }
          )}
          {(lazerUser.data.access.includes("/customer")
            ? adminSidebar
            : adminSidebar
          ).map((item, index) => {
            return <SubNavComp item={item} key={index} sidebar={sidebar} />;
          })} */}
        </SidebarWrap>
      </nav>
    </>
  );
};

export default SidebarComp;
