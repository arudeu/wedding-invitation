"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Page() {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const submitData = async () => {
    if (!name.trim()) {
      toast.error("Name cannot be blank!");
      return;
    }

    const res = await fetch("/api/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });

    const payload = await res.json();

    if (res.ok) {
      toast.success("Saved successfully!");
      setName("");
    } else {
      toast.error(payload.message || "Something went wrong!");
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-10">
      <h3 className="">Kindly</h3>
      <h1 className="navigation-header">RSVP</h1>
      <Input
        placeholder="Please enter your name...."
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-100 text-lg guest-input"
      />

      <Button onClick={submitData} className="w-50 btn" disabled={loading}>
        {loading ? "Saving..." : "Submit"}
      </Button>
    </div>
  );
}
