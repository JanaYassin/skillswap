import { useEffect, useState } from "react";

export default function App() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/listings")
      .then(r => r.json())
      .then(setListings)
      .catch(console.error);
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Listings</h1>
      <ul className="space-y-3">
        {listings.map(l => (
          <li key={l.id} className="p-4 rounded-xl border border-slate-200">
            <div className="font-semibold">{l.title}</div>
            <div className="text-sm text-slate-600">{l.teacher} — {l.location}</div>
            <div className="text-sm">Rating: {l.rating}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
