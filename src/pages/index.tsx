import React from "react";
import ChatInput from "../components/ChatInput";
import ChatMessages from "../components/ChatMessages";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">AI Research Tool</h1>
      <ChatInput />
      <ChatMessages />
    </div>
  );
}
