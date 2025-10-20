import { useState } from "react";
import UserDetailsModal from "../../components/superadmin/UserDetailsModal";
import UserManagementTable from "../../components/superadmin/UserManagementTable";
import UsersOverview from "../../components/superadmin/UsersOverview";

// const users = [
//   {
//     id: "USR001",
//     name: "John Doe",
//     role: "Landlord",
//     email: "john.doe@example.com",
//     phone: "+1 234 567 890",
//     image: "https://i.pravatar.cc/100?img=5",
//     documents: [
//       "ID Card",
//       "Property Documents",
//       "Business License",
//       "Tax Certificate",
//     ],
//     activities: [
//       { action: "Updated profile", time: "2 hours ago" },
//       { action: "Added new property", time: "1 day ago" },
//       { action: "Completed transaction", time: "3 days ago" },
//     ],
//   },
// ];
export default function UsersManagement() {
//   const [selectedUser, setSelectedUser] = useState(users[0]);
  return (
    <div className=" ">
      <h1 className="text-2xl font-bold mb-4">Users Management</h1>
      <UsersOverview />
      <UserManagementTable />

      {/* {selectedUser && (
        <UserDetailsModal
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )} */}
    </div>
  );
}
