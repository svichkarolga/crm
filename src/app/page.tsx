import StatusLabel, { Status } from './Components/StatusLabel';

import AddCompanyButton from '@/app/Components/AddCompanyButton';


export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page </h1>

      <AddCompanyButton />
      {/*<StatusLabel status={Status.Active}>Active</StatusLabel>*/}
      {/*<StatusLabel status={Status.NotActive}>NotActive</StatusLabel>*/}
      {/*<StatusLabel status={Status.Pending}>Pending</StatusLabel>*/}
      {/*<StatusLabel status={Status.Suspended}>Suspended</StatusLabel>*/}

    </main>
  );
}
