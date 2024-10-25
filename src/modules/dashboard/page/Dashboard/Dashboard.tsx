import { DashboardView } from "@/modules/dashboard/components/DashboardView";
import { AppPage } from "@/shared/core/Page";
import { DASHBOARD_PATH } from "./Path";

export const DashboardPage = new AppPage({
  element: <DashboardView />,
  path: DASHBOARD_PATH,
});
