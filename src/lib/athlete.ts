import db from '@/prisma/db';
import type { Athlete } from '@prisma/client';
export type AthleteWithSport = Athlete & {
  sport: { name: string };
};

export function findAthletes() {
  return db.athlete.findMany({
    take: 20,
    skip: 0,
    include: { Sport: { select: { name: true } } },
  });
}
