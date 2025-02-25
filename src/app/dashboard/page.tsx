import React from 'react'
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
import HistoryCard from '@/components/Dashboard/HistoryCard';
import QuizMeCard from '@/components/Dashboard/QuizMeCard';
import HotTopicsCard from '@/components/Dashboard/HotTopicsCard';
import RecentActivityCard from '@/components/Dashboard/RecentActivityCard';

type Props = {}

export const metadata = {
  title: "Dashboard | Quizzler",
  description: "Quiz yourself on anything!",
};

const Dashboard = async (props: Props) => {
  const session = await getAuthSession();
  if (!session?.user) {
    redirect("/");
  }

  return (
    <main className="p-8 mx-auto max-w-7xl">
      <div className="flex items-center">
        <h2 className="mr-2 text-3xl font-bold tracking-tight">Dashboard</h2>
        {/* <DetailsDialog /> */}
      </div>

      <div className="grid gap-4 mt-4 md:grid-cols-2">
        <QuizMeCard />
        <HistoryCard />
      </div>
      <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-7">
        <HotTopicsCard />
        <RecentActivityCard />
      </div>
    </main>
  );
};

export default Dashboard;