import { useRef, useState } from "react";

const ExpenseForm = ({ onAddExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const titleRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount) return alert("Please fill in all fields");
    const newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
    };
    onAddExpense(newExpense);
    setTitle("");
    setAmount("");
    titleRef.current.focus();
  };
  return (
    <div>
      <form
        className="flex flex-col md:flex-row gap-4 items-center"
        onSubmit={handleSubmit}
      >
        <div className="w-full">
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            ref={titleRef}
            placeholder="Enter expense title"
            className="w-full px-4 py-3 rounded-xl bg-white/90 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md"
          />
        </div>

        <div className="w-full">
          <input
            type="number"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount ৳"
            className="w-full px-4 py-3 rounded-xl bg-white/90 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md"
          />
        </div>

        <div className="w-full ">
          <button
            type="submit"
            className="w-full  px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-lg transition duration-300 cursor-pointer"
          >
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
