import React from "react";
export default function ChatInput() {
  return (
    <form className="mb-4">
      <input
        type="text"
        placeholder="Ask a research question..."
        className="border p-2 w-full rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded ml-2">
        Submit
      </button>
    </form>
  );
}
