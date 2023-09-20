import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as FaIcon from "react-icons/fa";
import * as GrIcon from "react-icons/gr";
import * as BsIcon from "react-icons/bs";
import * as MdIcon from "react-icons/md";
import * as SiIcon from "react-icons/si";
import * as BiIcons from "react-icons/bi";
import { VscTypeHierarchySub } from "react-icons/vsc";
import { BiFoodMenu } from "react-icons/bi";
import { HiUsers } from "react-icons/hi";

export const customerSidebar = [
  {
    title: "Orders",
    // path: "/customer/orders",
    icon: <BsIcon.BsListTask />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Created",
        // path: "/customer/orders?ordstat=Created",
        path: "/Customer/Orders/OrdersCreated?ordstat=Created",
        icon: <AiIcons.AiOutlineArrowRight />,
      },
      {
        title: "Recorded",
        path: "/Customer/Orders/OrdersRecorded?ordstat=Recorded",
        icon: <AiIcons.AiOutlineArrowRight />,
      },
      {
        title: "Processing",
        path: "/Customer/Orders/OrdersProcessing?ordstat=Processing",
        icon: <AiIcons.AiOutlineArrowRight />,
      },
      {
        title: "Produced",
        path: "/Customer/Orders/OrdersProduced?ordstat=Produced",
        icon: <AiIcons.AiOutlineArrowRight />,
      },
      {
        title: "Ready",
        path: "/Customer/Orders/OrdersReady?ordstat=Ready",
        icon: <AiIcons.AiOutlineArrowRight />,
      },
      {
        title: "Dispatched",
        path: "/Customer/Orders/OrdersDispatched?ordstat=Dispatched",
        icon: <AiIcons.AiOutlineArrowRight />,
      },
      {
        title: "All",
        path: "/Customer/Orders/OrdersAll?ordstat=All",
        icon: <AiIcons.AiOutlineArrowRight />,
      },
    ],
  },

  {
    title: "Commercial",
    // path: "/customer/outstandings",
    icon: <MdIcon.MdOutlineSummarize />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Inv. & Payments",
        path: "/Customer/CustomerInvoiceAndPayments",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "O/S Summary",
        path: "/Customer/Outstandings",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Material",
    path: "Customer/Material",
    icon: <SiIcon.SiMaterialdesignicons />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Customers",
    // path: "/customer",
    icon: <BsIcon.BsFillPeopleFill />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Customer Info",
        path: "/Customer/ExistedCustomerInfo",
        icon: <AiIcons.AiOutlineArrowRight />,
      },
      {
        title: "Customer New",
        path: "/Customer/CustomerNew",
        icon: <AiIcons.AiOutlineArrowRight />,
      },
    ],
  },
  {
    title: "Part List",
    path: "/Customer/PartList",
    icon: <AiIcons.AiOutlinePartition />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Rate Estimator",
    path: "/Customer/RateEstimator",
    icon: <SiIcon.SiFormstack />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "TaskSheet",
    path: "/Customer/TaskSheet",
    icon: <SiIcon.SiFormstack />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Drawing List",
    path: "/Customer/DrawingList",
    icon: <MdIcon.MdDraw />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },

  // {
  //   title: "Packing Invoice",
  //   // path: "/customer",
  //   icon: <MdIcon.MdOutlineSummarize />,
  //   iconClosed: <RiIcons.RiArrowDownSFill />,
  //   iconOpened: <RiIcons.RiArrowUpSFill />,

  //   subNav: [
  //     {
  //       title: "Inspection",
  //       // path: "/materialmanagement/receipt/customerjobwork",
  //       icon: <AiIcons.AiFillCustomerService />,
  //       subNav: [
  //         {
  //           title: "Profile",
  //           icon: <AiIcons.AiOutlinePartition />,
  //           subNav: [
  //             {
  //               title: "ScheduleList",
  //               path: "/PackingAndInvoices/Profile/ScheduleList",
  //               icon: <AiIcons.AiOutlineArrowRight />,
  //             },
  //             {
  //               title: "FindSchedule",
  //               path: "/PackingAndInvoices/Profile/FindSchedule",
  //               icon: <AiIcons.AiOutlineArrowRight />,
  //             },
  //           ],
  //         },
  //         {
  //           title: "Fabrication",
  //           icon: <AiIcons.AiOutlineDeploymentUnit />,
  //           subNav: [
  //             {
  //               title: "ScheduleList",
  //               path: "/PackingAndInvoices/fabrication/ScheduleList",

  //               icon: <AiIcons.AiOutlineArrowRight />,
  //             },
  //             {
  //               title: "FindSchedule",
  //               path: "/PackingAndInvoices/fabrication/FindSchedule",

  //               icon: <AiIcons.AiOutlineArrowRight />,
  //             },
  //           ],
  //         },
  //         {
  //           title: "Services",
  //           icon: <MdIcon.MdOutlineOtherHouses />,

  //           subNav: [
  //             {
  //               title: "ScheduleList",
  //               path: "/PackingAndInvoices/service/ScheduleList",

  //               icon: <AiIcons.AiOutlineArrowRight />,
  //             },
  //             {
  //               title: "FindSchedule",
  //               path: "/PackingAndInvoices/service/FindSchedule",

  //               icon: <AiIcons.AiOutlineArrowRight />,
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       title: "Packing Note",
  //       icon: <AiIcons.AiOutlineInfoCircle />,
  //       // icon: <BiIcons.BiPurchaseTag />,
  //     },
  //     {
  //       title: "Invoice",
  //       // path: "/materialmanagement/receipt/branchtransfer",
  //       icon: <AiIcons.AiOutlineBranches />,
  //     },
  //     {
  //       title: "SetUp",
  //       // path: "/materialmanagement/receipt/branchtransfer",
  //       icon: <AiIcons.AiOutlineBranches />,
  //     },
  //     {
  //       title: "ReturnableDC",
  //       // path: "/materialmanagement/receipt/branchtransfer",
  //       icon: <AiIcons.AiOutlineBranches />,
  //     },
  //   ],
  // },
  {
    title: "Previous Menu",
    path: "/salesHome",
    icon: <MdIcon.MdPreview />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
];

export const MaterialSidebar = [
  /* {
    title: "Setup",
    // path: "/customer",
    icon: <BsIcon.BsListTask />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Server",
        path: "/materialmanagement/server",
        icon: <AiIcons.AiOutlineInfoCircle />,
      },
      
    ],
  },*/

  {
    title: "Receipt",
    // path: "/customer",
    icon: <MdIcon.MdOutlineSummarize />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Customer Job Work",
        // path: "/materialmanagement/receipt/customerjobwork",
        icon: <AiIcons.AiFillCustomerService />,
        subNav: [
          {
            title: "Parts",
            icon: <AiIcons.AiOutlinePartition />,
            subNav: [
              {
                title: "New",
                path: "/materialmanagement/receipt/customerjobwork/parts/new",
                icon: <AiIcons.AiOutlineArrowRight />,
              },
              {
                title: "Draft RV List",
                path: "/materialmanagement/receipt/customerjobwork/parts/draftrvlist",
                icon: <AiIcons.AiOutlineArrowRight />,
              },
              {
                title: "Open RV List",
                path: "/materialmanagement/receipt/customerjobwork/parts/openrvlist",
                icon: <AiIcons.AiOutlineArrowRight />,
              },
              {
                title: "Closed RV List",
                path: "/materialmanagement/receipt/customerjobwork/parts/closedrvlist",
                icon: <AiIcons.AiOutlineArrowRight />,
              },
            ],
          },
          {
            title: "Units",
            icon: <AiIcons.AiOutlineDeploymentUnit />,
            subNav: [
              {
                title: "New",
                path: "/materialmanagement/receipt/customerjobwork/units/new",
                icon: <AiIcons.AiOutlineArrowRight />,
              },
              {
                title: "Draft RV List",
                path: "/materialmanagement/receipt/customerjobwork/units/draftrvlist",
                icon: <AiIcons.AiOutlineArrowRight />,
              },
              {
                title: "Open RV List",
                path: "/materialmanagement/receipt/customerjobwork/units/openrvlist",
                icon: <AiIcons.AiOutlineArrowRight />,
              },
              {
                title: "Closed RV List",
                path: "/materialmanagement/receipt/customerjobwork/units/closedrvlist",
                icon: <AiIcons.AiOutlineArrowRight />,
              },
            ],
          },
          {
            title: "Sheets and Others",
            icon: <MdIcon.MdOutlineOtherHouses />,

            subNav: [
              {
                title: "New",
                path: "/materialmanagement/receipt/customerjobwork/sheetsandothers/new",
                icon: <AiIcons.AiOutlineArrowRight />,
              },
              {
                title: "Draft RV List",
                path: "/materialmanagement/receipt/customerjobwork/sheetsandothers/draftrvlist",
                icon: <AiIcons.AiOutlineArrowRight />,
              },
              {
                title: "Open RV List",
                path: "/materialmanagement/receipt/customerjobwork/sheetsandothers/openrvlist",
                icon: <AiIcons.AiOutlineArrowRight />,
              },
              {
                title: "Closed RV List",
                path: "/materialmanagement/receipt/customerjobwork/sheetsandothers/closedrvlist",
                icon: <AiIcons.AiOutlineArrowRight />,
              },
            ],
          },
        ],
      },
      {
        title: "Purchase",
        // icon: <AiIcons.AiOutlineInfoCircle />,
        icon: <BiIcons.BiPurchaseTag />,
        subNav: [
          {
            title: "Parts",

            icon: <AiIcons.AiOutlinePartition />,

            subNav: [
              {
                title: "New",
                path: "/materialmanagement/receipt/purchase/parts/new",
                icon: <AiIcons.AiOutlineArrowRight />,
              },
              {
                title: "Draft RV List",
                path: "/materialmanagement/receipt/purchase/parts/draftrvlist",
                icon: <AiIcons.AiOutlineArrowRight />,
              },
              {
                title: "Open RV List",
                path: "/materialmanagement/receipt/purchase/parts/openrvlist",
                icon: <AiIcons.AiOutlineArrowRight />,
              },
              {
                title: "Closed RV List",
                path: "/materialmanagement/receipt/purchase/parts/closedrvlist",
                icon: <AiIcons.AiOutlineArrowRight />,
              },
            ],
          },
          {
            title: "Units",
            icon: <AiIcons.AiOutlineDeploymentUnit />,
            subNav: [
              {
                title: "New",
                path: "/materialmanagement/receipt/purchase/units/new",
                icon: <AiIcons.AiOutlineArrowRight />,
              },
              {
                title: "Draft RV List",
                path: "/materialmanagement/receipt/purchase/units/draftrvlist",
                icon: <AiIcons.AiOutlineArrowRight />,
              },
              {
                title: "Open RV List",
                path: "/materialmanagement/receipt/purchase/units/openrvlist",
                icon: <AiIcons.AiOutlineArrowRight />,
              },
              {
                title: "Closed RV List",
                path: "/materialmanagement/receipt/purchase/units/closedrvlist",
                icon: <AiIcons.AiOutlineArrowRight />,
              },
            ],
          },
          {
            title: "Others",
            icon: <MdIcon.MdOutlineOtherHouses />,

            subNav: [
              {
                title: "New",
                path: "/materialmanagement/receipt/purchase/others/new",
                icon: <AiIcons.AiOutlineArrowRight />,
              },
              {
                title: "Draft RV List",
                path: "/materialmanagement/receipt/purchase/others/draftrvlist",
                icon: <AiIcons.AiOutlineArrowRight />,
              },
              {
                title: "Open RV List",
                path: "/materialmanagement/receipt/purchase/others/openrvlist",
                icon: <AiIcons.AiOutlineArrowRight />,
              },
              {
                title: "Closed RV List",
                path: "/materialmanagement/receipt/purchase/others/closedrvlist",
                icon: <AiIcons.AiOutlineArrowRight />,
              },
            ],
          },
          {
            title: "Gas",
            icon: <BiIcons.BiGasPump />,
            subNav: [
              {
                title: "New",
                path: "/materialmanagement/receipt/purchase/gas/new",
                icon: <AiIcons.AiOutlineArrowRight />,
              },
            ],
          },
        ],
      },
      {
        title: "Branch Transfer",
        path: "/materialmanagement/receipt/branchtransfer",
        icon: <AiIcons.AiOutlineBranches />,
      },
    ],
  },
  {
    title: "Return",
    // path: "/customer",
    icon: <SiIcon.SiMaterialdesignicons />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Customer Job Work",
        // path: "/materialmanagement/return/customerjobwork",
        icon: <AiIcons.AiFillCustomerService />,
        subNav: [
          {
            title: "New",
            path: "/materialmanagement/return/customerjobwork/new",
            icon: <AiIcons.AiOutlineArrowRight />,
          },
          {
            title: "Pending Dispatch List",
            path: "/materialmanagement/return/customerjobwork/pendingdispatchlist",
            icon: <AiIcons.AiOutlineArrowRight />,
          },
          {
            title: "Customer IV List",
            path: "/materialmanagement/return/customerjobwork/customerivlist",
            icon: <AiIcons.AiOutlineArrowRight />,
          },
          {
            title: "Sales IV List",
            path: "/materialmanagement/return/customerjobwork/salesivlist",
            icon: <AiIcons.AiOutlineArrowRight />,
          },
          {
            title: "Cancelled",
            path: "/materialmanagement/return/customerjobwork/cancelled",
            icon: <AiIcons.AiOutlineArrowRight />,
          },
        ],
      },
      {
        title: "Purchase  Planned for future",
        path: "/materialmanagement/return/purchaseplannedforfuture",
        icon: <BiIcons.BiPurchaseTag />,
      },
    ],
  },
  {
    title: "Shop Floor Issue",
    // path: "/customer",
    icon: <BsIcon.BsListTask />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Service",
        // path: "/materialmanagement/shopfloorissue/service",
        icon: <MdIcon.MdMiscellaneousServices />,
        subNav: [
          {
            title: "Parts",
            path: "/MaterialManagement/ShopFloorIssue/Service/Parts",
            icon: <AiIcons.AiOutlineArrowRight />,
          },
          {
            title: "Units",
            path: "/MaterialManagement/ShopFloorIssue/Service/Units",
            icon: <AiIcons.AiOutlineArrowRight />,
          },
        ],
      },
      {
        title: "ProfileCutting",
        path: "/MaterialManagement/ShopFloorIssue/ProfileCutting",
        icon: <BiIcons.BiCut />,
      },
      {
        title: "IV List Service",
        icon: <MdIcon.MdMiscellaneousServices />,
        subNav: [
          {
            title: "Issued",
            path: "/MaterialManagement/ShopFloorIssue/IVListService/Issued",
            icon: <AiIcons.AiOutlineArrowRight />,
          },
          {
            title: "Closed",
            path: "/MaterialManagement/ShopFloorIssue/IVListService/Closed",
            icon: <AiIcons.AiOutlineArrowRight />,
          },
        ],
      },
      {
        title: "IV List Profile Cutting",
        icon: <BiIcons.BiCut />,
        subNav: [
          {
            title: "Current",
            path: "/MaterialManagement/ShopFloorIssue/IVListProfileCutting/Current",
            icon: <AiIcons.AiOutlineArrowRight />,
          },
          {
            title: "Closed",
            path: "/MaterialManagement/ShopFloorIssue/IVListProfileCutting/Closed",
            icon: <AiIcons.AiOutlineArrowRight />,
          },
        ],
      },
    ],
  },
  {
    title: "Shop Floor Returns",
    // path: "/customer",
    icon: <BsIcon.BsListTask />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Pending IV List",
        path: "/MaterialManagement/ShoopFloorReturns/PendingList",
        icon: <AiIcons.AiOutlineArrowRight />,
      },
    ],
  },
  {
    title: "Reports",
    // path: "/customer",
    icon: <BsIcon.BsListTask />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Customer",
        icon: <AiIcons.AiFillCustomerService />,
        subNav: [
          {
            title: "Stock Report",
            path: "/MaterialManagement/Reports/Customer/StockList",
            icon: <MdIcon.MdOutlineSummarize />,
          },
          {
            title: "Parts Reports",
            path: "/MaterialManagement/Reports/Customer/PartList",

            icon: <MdIcon.MdOutlineSummarize />,
          },
        ],
      },
      {
        title: "Daily Report",
        path: "/MaterialManagement/Reports/DailyReports",
        icon: <MdIcon.MdOutlineSummarize />,
      },
      {
        title: " Monthly Report",
        path: "/MaterialManagement/Reports/MonthlyReports",
        icon: <MdIcon.MdOutlineSummarize />,
      },
    ],
  },
  {
    title: "Store Managemen",
    // path: "/customer",
    icon: <SiIcon.SiMaterialdesignicons />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Resize Sheets        ",
        path: "/MaterialManagement/StoreManagement/ResizeSheets",
        icon: <MdIcon.MdOutlineOtherHouses />,
      },
      {
        title: "Move Store",
        // path: "/materialmanagement/storemanagement/movestore",
        icon: <MdIcon.MdOutlineOtherHouses />,
        subNav: [
          {
            title: "Customer",
            path: "/MaterialManagement/StoreManagement/MoveStore/Customer",
            icon: <AiIcons.AiOutlineArrowRight />,
          },
          {
            title: "Change Location",
            path: "/MaterialManagement/StoreManagement/MoveStore/ChangeLocation",
            icon: <AiIcons.AiOutlineArrowRight />,
          },
          {
            title: "All",
            path: "/MaterialManagement/StoreManagement/MoveStore/All",

            icon: <AiIcons.AiOutlineArrowRight />,
          },
        ],
      },
      {
        title: " Location List",
        path: "/MaterialManagement/StoreManagement/LocationList",
        icon: <BiIcons.BiPurchaseTag />,
      },
      {
        title: " Stock",
        icon: <BiIcons.BiPurchaseTag />,
        subNav: [
          {
            title: "Stock List",
            path: "/MaterialManagement/StoreManagement/Stock/StockList",
            icon: <AiIcons.AiOutlineArrowRight />,
          },
          {
            title: "Stock Arrival",
            path: "/MaterialManagement/StoreManagement/Stock/StockArrival",

            icon: <AiIcons.AiOutlineArrowRight />,
          },
          {
            title: "Stock Dispatch",
            path: "/MaterialManagement/StoreManagement/Stock/StockDispatch",

            icon: <AiIcons.AiOutlineArrowRight />,
          },
          {
            title: "Stock Ledger",
            path: "/MaterialManagement/StoreManagement/Stock/StockLedger",

            icon: <AiIcons.AiOutlineArrowRight />,
          },
          {
            title: "Opening Stock",
            path: "/MaterialManagement/StoreManagement/Stock/OpeningStock",

            icon: <AiIcons.AiOutlineArrowRight />,
          },
        ],
      },
      {
        title: " Location Stock        ",
        path: "/MaterialManagement/StoreManagement/LocationStock",
        icon: <BiIcons.BiPurchaseTag />,
      },
    ],
  },
];

// export const adminSidebar = [
//   {
//     title: "Users",
//     icon: <FaIcon.FaUsers />,
//     iconClosed: <RiIcons.RiArrowDownSFill />,
//     iconOpened: <RiIcons.RiArrowUpSFill />,
//     subNav: [
//       {
//         title: "Roles",
//         path: "/admin/CreateRoles",
//         icon: <VscTypeHierarchySub />,
//       },

//       {
//         title: "Users",
//         path: "/admin/CreateUsers",
//         icon: <HiUsers />,
//       },
//     ],
//   },
//   {
//     title: "Access",
//     icon: <MdIcon.MdOutlineSecurity />,
//     iconClosed: <RiIcons.RiArrowDownSFill />,
//     iconOpened: <RiIcons.RiArrowUpSFill />,
//     subNav: [
//       {
//         title: "Menu Roles",
//         path: "/admin/menuRoles",
//         icon: <AiIcons.AiOutlineMenuFold />,
//       },
//       {
//         title: "Mapping",
//         path: "/admin/menuRoles",
//         icon: <AiIcons.AiOutlineMenuFold />,
//       },
//     ],
//   },
//   {
//     title: "Previous Menu",
//     path: "/Home",
//     icon: <MdIcon.MdPreview />,
//     iconClosed: <RiIcons.RiArrowDownSFill />,
//     iconOpened: <RiIcons.RiArrowUpSFill />,
//   },
// ];

export const adminSidebar = [
  {
    title: "Users",
    // path: "/customer",
    icon: <FaIcon.FaUsers />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Roles",
        path: "/admin/roles",
        icon: <VscTypeHierarchySub />,
      },
      {
        title: "Users",
        path: "/admin/users",
        icon: <HiUsers />,
      },
    ],
  },
  {
    title: "Access",
    // path: "/customer",
    icon: <FaIcon.FaUsers />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Menu Role Mapping",
        path: "/admin/mapping",
        icon: <VscTypeHierarchySub />,
      },
    ],
  },
  {
    title: "Previous Menu",
    path: "/home",
    icon: <MdIcon.MdPreview />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
];
