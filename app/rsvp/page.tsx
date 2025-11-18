"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

interface DataItem {
  id: number;
  name: string;
  age: number;
}

export default function RSVPPage() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [data, setData] = useState<DataItem[]>([]);

  // Fetch data from API
  const fetchData = async () => {
    const res = await fetch("/api/data");
    const result = await res.json();
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Add new item
  const handleAdd = async () => {
    if (!name || !age) return;

    const res = await fetch("/api/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, age: Number(age) }),
    });

    const newItem = await res.json();
    setData([...data, newItem]);

    setName("");
    setAge("");
  };

  return (
    <div className="p-8 space-y-6 max-w-lg mx-auto">
      <Card>
        <CardContent className="space-y-4">
          <CardTitle>Add Person</CardTitle>
          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Age"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <Button onClick={handleAdd}>Add</Button>
        </CardContent>
      </Card>

      <div className="space-y-2">
        {data.map((item) => (
          <Card key={item.id}>
            <CardContent>
              {item.name} — {item.age} years old
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
