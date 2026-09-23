import { Link, useLocation } from 'react-router-dom';

export default function PageNotFound() {
  const { pathname } = useLocation();
  return <main className="min-h-screen flex items-center justify-center bg-bone text-ink p-6">
    <div className="text-center"><p className="text-7xl font-light">404</p><h1 className="mt-4 text-2xl">Page not found</h1>
      <p className="mt-2 text-ink/60">The page “{pathname}” could not be found.</p>
      <Link to="/" className="inline-block mt-6 underline">Return home</Link></div>
  </main>;
}
