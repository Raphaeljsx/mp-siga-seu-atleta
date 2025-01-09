
import AthletesList from './_components/athletesList';
import { Suspense } from 'react';
import { findAthletes } from '@/lib/athlete';

export default async function Home() {
  // const sports = await findSports();
  const athletesData = await findAthletes();
  const athlestes = athletesData.map(athlete => ({
    ...athlete,
    sport: athlete.Sport
  }));

  return (
    <main className="p-4 flex flex-col gap-12">
      <Suspense key={""} fallback={<div>Carregando...</div>}>
        <AthletesList initialData={athlestes} />
      </Suspense>
    </main>
  );
}
