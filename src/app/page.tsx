import StatusLabel, { Status } from './Components/StatusLabel';
<<<<<<< Updated upstream
import AddCompanyButton from '@/app/Components/AddCompanyButton';
=======
>>>>>>> Stashed changes

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page </h1>
<<<<<<< Updated upstream
      <AddCompanyButton />
      {/*<StatusLabel status={Status.Active}>Active</StatusLabel>*/}
      {/*<StatusLabel status={Status.NotActive}>NotActive</StatusLabel>*/}
      {/*<StatusLabel status={Status.Pending}>Pending</StatusLabel>*/}
      {/*<StatusLabel status={Status.Suspended}>Suspended</StatusLabel>*/}
=======
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>NotActive</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
>>>>>>> Stashed changes
    </main>
  );
}
