import Analytics from "../../components/superadmin/Analytics";
import DashboardOverview from "../../components/superadmin/DashboardOverview";
import RecentTransactions from "../../components/superadmin/RecentTransactions";

export default function DashboardContent() {
  return (
    <div className="">
      <DashboardOverview />
      <Analytics />
      <RecentTransactions />
    </div>
  );
}
