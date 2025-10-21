import PropertiesTable from "../../components/superadmin/PropertiesTable";
import PropertyAnalytics from "../../components/superadmin/PropertyAnalytics";
import PropertyOverview from "../../components/superadmin/PropertyOverview";

export default function PropertiesManagement() {
  return (
    <div className="">
      <h1 className="text-2xl font-bold mb-4">Properties Management</h1>
      <PropertyOverview />
      <PropertyAnalytics />
      <PropertiesTable />
    </div>
  );
}
