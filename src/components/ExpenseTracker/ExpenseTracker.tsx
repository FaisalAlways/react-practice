import { useEffect, useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseItem from "./ExpenseItem";
const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-blue-200">
      <div className="w-full max-w-3xl bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/30">
        <h1 className="text-2xl font-bold text-black text-center mb-8">
          Expense Tracker
        </h1>
        <h3 className="text-lg font-semibold text-black mb-4">
          Total Expense: ৳{" "}
          {expenses.reduce(
            (total, expense) => total + Number(expense.amount),
            0,
          )}
        </h3>
        <ExpenseForm onAddExpense={addExpense} />
        <ExpenseItem expenses={expenses} onDelete={deleteExpense} />
      </div>
    </div>
  );
};

export default ExpenseTracker;
