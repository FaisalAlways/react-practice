const ExpenseItem = ({ expenses, onDelete }) => {
  return (
    <div className="mt-10">
      <h2 className="text-black font-semibold mb-4">All Expenses</h2>

      <div className="space-y-3">
        {expenses.length === 0 ? (
          <p className="text-gray-500">No expenses added yet.</p>
        ) : (
          expenses.map((expense) => (
            <div
              key={expense.id}
              className="flex justify-between items-center bg-white/90 p-4 rounded-xl shadow-md"
            >
              <span className="font-medium text-gray-700">{expense.title}</span>
              <span className="text-red-500 font-semibold">
                ৳ {expense.amount}
              </span>
              <button
                className="ml-4 px-3 py-1 bg-red-500 text-white rounded cursor-pointer"
                onClick={() => onDelete(expense.id)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ExpenseItem;
