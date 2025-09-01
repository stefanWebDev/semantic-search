import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";

async function fetchAnswer(question: string) {
  console.log("Fetching answer for question:", question);
  const res = await fetch("/api/get-post", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: question }),
  });
  return res.json();
}

export default function QuestionForm() {
  const [question, setQuestion] = useState("");
  const mutation = useMutation({
    mutationFn: fetchAnswer,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(question);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask a question..."
        required
      />
      <button type="submit" disabled={mutation.isPending}>
        Submit
      </button>
      {mutation.isSuccess && (
        <pre>{JSON.stringify(mutation.data, null, 2)}</pre>
      )}
      {mutation.isError && <div>Error: {mutation.error.message}</div>}
    </form>
  );
}
