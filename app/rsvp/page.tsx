"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { motion } from "motion/react";

export default function RSVPPage() {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const submitData = async () => {
    const trimmed = name.trim();

    // Prevent blank input
    if (!trimmed) {
      toast.error("Name cannot be blank!");
      return;
    }

    // Prevent double click spam
    if (loading) return;

    setLoading(true);

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: trimmed }),
      });

      let payload: any = {};
      try {
        payload = await res.json();
      } catch {
        payload = { error: "Unexpected server response" };
      }

      if (!res.ok) {
        toast.error(payload.error || "Something went wrong!");
        return;
      }

      if (payload.success) {
        toast.success(payload.message || "Welcome! Your RSVP is confirmed.");
      } else {
        toast.error(
          payload.message || "Sorry, your name is not on the guest list."
        );
      }

      setName("");

      // Optional: auto–blur input after saving
      document?.activeElement instanceof HTMLElement &&
        document.activeElement.blur();
    } catch (error) {
      console.error("RSVP Submit Error:", error);
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center gap-10 p-10"
      initial={{ filter: "blur(20px)" }}
      animate={{ filter: "none" }}
      transition={{ duration: 1 }}
    >
      <div className="text-center">
        <h3 className="text-6xl">Kindly</h3>
        <h1 className="navigation-header text-8xl font-bold">RSVP</h1>
      </div>

      <Input
        placeholder="Please enter your name...."
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && submitData()}
        className="xl:w-100 text-lg guest-input"
      />

      <Button onClick={submitData} className="w-50 btn" disabled={loading}>
        {loading ? "Checking..." : "Submit"}
      </Button>
    </motion.div>
  );
}
