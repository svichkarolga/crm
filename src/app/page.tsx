import StatusLabel, { Status } from './Components/StatusLabel';

import AddCompanyButton from '@/app/Components/AddCompanyButton';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page </h1>

      <AddCompanyButton />
    </main>
  );
}
