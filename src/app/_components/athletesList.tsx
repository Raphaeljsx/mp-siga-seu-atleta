'use client';

import { AthleteWithSport } from "@/lib/athlete";
import { AthleteCard } from "./athleteCard";

interface AthleteListProps {
  initialData: AthleteWithSport[];
}

export default function AthletesList({ initialData }  : AthleteListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {initialData.map(athlete => (
        <AthleteCard key={athlete.id} athlete={athlete} />
      ))}
    </div>
  ); 
}