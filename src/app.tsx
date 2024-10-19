import { DashboardView } from "./dashboard/components/DashboardView";
import Layout from "./Layout/Layout";

export function App() {
  return (
    <Layout>
      <div className="flex flex-col gap-2">
        <h1>Hello world</h1>

        <DashboardView />
      </div>
    </Layout>
  );
}
