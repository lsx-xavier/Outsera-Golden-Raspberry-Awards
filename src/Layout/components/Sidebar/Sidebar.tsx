import { Link, useLocation } from "react-router-dom";
import { DashboardPage } from "@/dashboard/page/Dashboard";
import { sidebarLinkStyles, sidebarStyles } from "./styles/Sidebar";

export function Sidebar() {
  const { pathname } = useLocation();

  return (
    <div className={sidebarStyles()}>
      <Link
        className={sidebarLinkStyles({
          active: pathname === DashboardPage.path,
        })}
        to={DashboardPage.path}
      >
        Dashboard
      </Link>
      <Link
        className={sidebarLinkStyles({
          active: pathname === "/list",
        })}
        to="/list"
      >
        List
      </Link>
    </div>
  );
}
