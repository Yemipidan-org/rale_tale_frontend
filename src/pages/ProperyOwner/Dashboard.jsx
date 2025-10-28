import PropertyManagerOverview from "../../components/PropertyOwner/PropertyManagerOverview";
import RecentActivities from "../../components/PropertyOwner/RecentActivities";

export default function DashboardContent() {
  return (
    <div className="">
      <PropertyManagerOverview />
      <RecentActivities />
    </div>
  );
}
