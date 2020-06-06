import React from "react";
import $ from "jquery";

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() => import("./Demo/Dashboard/Default"));
const JanTv = React.lazy(() => import("./Demo/Other/JanTv"));
const Mplad = React.lazy(() => import("./Demo/Other/Mplad"));
const Update = React.lazy(() => import("./Demo/Other/Update"));
const Calendar = React.lazy(() => import("./Demo/Other/Calendar"));
// const AddModerator = React.lazy(() => import("./Demo/Other/AddModerator"));
const TicketInfo = React.lazy(() => import("./Demo/Other/TicketInfo"));

const routes = [
  { path: "/", exact: true, name: "Default", component: DashboardDefault },
  { path: "/jantv", exact: true, name: "Sample Page", component: JanTv },
  { path: "/mplad", exact: true, name: "Sample Page", component: Mplad },
  { path: "/update", exact: true, name: "Sample Page", component: Update },
  { path: "/calendar", exact: true, name: "Sample Page", component: Calendar },
  // {
  //   path: "/add-moderator",
  //   exact: true,
  //   name: "Sample Page",
  //   component: AddModerator,
  // },
  {
    path: "/ticket-info",
    exact: true,
    name: "Ticket Info",
    component: TicketInfo,
  },
];

export default routes;
