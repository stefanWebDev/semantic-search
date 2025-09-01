"use client";

import QuestionForm from "@/components/QuestionForm";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      Next App
      <QueryClientProvider client={queryClient}>
        <QuestionForm />
      </QueryClientProvider>
    </div>
  );
}
