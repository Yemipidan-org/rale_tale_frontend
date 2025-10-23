import TransactionAnalytics from "../../components/superadmin/TransactionAnalytics";
import TransactionTable from "../../components/superadmin/TransactionTable";

export default function TransactionsManagement() {
  return (
    <div className="">
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>
          <TransactionAnalytics />
          <TransactionTable />
    </div>
  );
}
