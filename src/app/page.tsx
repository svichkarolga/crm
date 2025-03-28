import AddCompanyButton from '@/app/Components/AddCompanyButton';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-pink-200">
      <div className="text-center p-6 bg-white rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-4xl font-semibold text-blue-600 mb-6">
          Welcome to the Home Page
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Here you can manage your companies and perform other actions.
        </p>

        <AddCompanyButton />
      </div>
    </main>
  );
}
