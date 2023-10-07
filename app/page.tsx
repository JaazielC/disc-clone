import { getAuthSession } from '@/lib/nextauth';
import { Button } from '@/components/ui/button';

export default async function Home() {
  const session = await getAuthSession();
  return (
    <div>
      <p className="text-3xl font-bold text-indigo-600">
        Discord Home
      </p>
      {session?.user ? (
        <Button>Log out</Button>
      ) : (
        <Button>Log In</Button>
      )}
    </div>
  );
}
