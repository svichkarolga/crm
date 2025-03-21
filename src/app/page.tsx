import ActiveLabel from '../app/Components/ActiveLabel';
import NotActiveLabel from './Components/NotActiveLabel';

export default function Home() {
  return (
      <main>
        <h1 className="text-xl">Home page </h1>
        <ActiveLabel>Active</ActiveLabel>
        <NotActiveLabel>Not Active</NotActiveLabel>
      </main>
  );
}
