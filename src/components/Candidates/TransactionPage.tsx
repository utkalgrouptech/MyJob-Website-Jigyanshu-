import Visibility from '@mui/icons-material/Visibility';

const transactions = [
  { id: 1, transactionId: '#12453', date: 'Oct 22, 2024', amount: '$1,569', status: 'Paid' },
  { id: 2, transactionId: '#12454', date: 'Oct 22, 2024', amount: '$1,569', status: 'Paid' },
  { id: 3, transactionId: '#12455', date: 'Oct 22, 2024', amount: '$1,569', status: 'Paid' },
  { id: 4, transactionId: '#12456', date: 'Oct 22, 2024', amount: '$1,569', status: 'Paid' },
  { id: 5, transactionId: '#12457', date: 'Oct 22, 2024', amount: '$1,569', status: 'Paid' },
];

export default function TransactionPage() {
  return (
    <section className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Transactions</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200 text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 border border-gray-200">No</th>
                <th className="p-4 border border-gray-200">Transaction ID</th>
                <th className="p-4 border border-gray-200">Date</th>
                <th className="p-4 border border-gray-200">Amount</th>
                <th className="p-4 border border-gray-200">Status</th>
                <th className="p-4 border border-gray-200">Action</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr
                  key={transaction.id}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                >
                  <td className="p-4 border border-gray-200">{index + 1}</td>
                  <td className="p-4 border border-gray-200">{transaction.transactionId}</td>
                  <td className="p-4 border border-gray-200">{transaction.date}</td>
                  <td className="p-4 border border-gray-200">{transaction.amount}</td>
                  <td className="p-4 border border-gray-200">
                    <span className="px-3 py-1 text-sm font-medium text-green-700 bg-green-100 rounded">
                      {transaction.status}
                    </span>
                  </td>
                  <td className="p-4 border border-gray-200 text-center">
                    <button className="text-blue-500 hover:text-blue-700">
                      <Visibility className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
