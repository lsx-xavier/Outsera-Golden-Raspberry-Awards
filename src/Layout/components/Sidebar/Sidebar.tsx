import { Link, useLocation } from "react-router-dom";
import { DashboardPage } from "@/dashboard/page/Dashboard";
import { ListMoviesPage } from "@/ListMovies/page";
import { sidebarLinkStyles, sidebarStyles } from "./styles/Sidebar";
import { SidebarProps } from "./types/Sidebar";

export function Sidebar({ className }: SidebarProps) {
  const { pathname } = useLocation();

  return (
    <div
      className={sidebarStyles({
        className,
      })}
    >
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
          active: pathname === ListMoviesPage.path,
        })}
        to={ListMoviesPage.path}
      >
        List
      </Link>
    </div>
  );
}
