import React from 'react';
import { db } from '../utils/prisma';
import ShowMovie from '@/components/custom-components/ShowMovie';

const AllMovies = async () => {
  const movies = await db.movie.findMany();
  console.log('------- all movies', movies);

  return (
    <div className="min-h-screen bg-black/95 text-white px-6 py-12">
      <div className="w-10/12 mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center text-white/90">
           All Movies
        </h1>

        {movies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {movies.map((m) => (
              <ShowMovie key={m.id} data={m} />
            ))}
          </div>
        ) : (
          <p className="text-center text-white/70">No movies added yet.</p>
        )}
      </div>
    </div>
  );
};

export default AllMovies;
