import db from '@/prisma/db';

export default async function Home() {
  const sports = await db.sport.findMany();
  return (
    <div>
      {sports.map((sport) => (<div key={sport.id}>{sport.name}</div>))}
    </div>
  );
}
