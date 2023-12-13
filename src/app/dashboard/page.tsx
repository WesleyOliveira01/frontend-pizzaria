"use client";
import { useAuthContext } from "@/contexts/AuthContext";
import { useEffect } from "react";

const Dashboard = () => {
  const {setLoading } = useAuthContext();
  useEffect(() => {
    setLoading(false);
  }, [setLoading]);
  return (
    <main>
      <h1 className="text-4xl text-center text-tomato"></h1>
    </main>
  );
};

export default Dashboard;
