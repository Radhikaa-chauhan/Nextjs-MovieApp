// For UI
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

// For actions
import * as actions from '@/actions';

const AddMovie = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black/90 text-white px-4 py-12">
      <div className="w-full max-w-2xl backdrop-blur-md bg-white/5 border border-white/20 shadow-lg rounded-xl p-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white/90 mb-8 text-center">
          🎬 Add a New Movie
        </h1>

        <form action={actions.createMovie} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Label htmlFor="title" className="text-white/80 text-lg">
              Title
            </Label>
            <Input
              type="text"
              name="title"
              placeholder="Enter movie title"
              required
              className="bg-white/10 border border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="description" className="text-white/80 text-lg">
              Movie Description
            </Label>
            <textarea
              name="description"
              placeholder="Write a short summary..."
              required
              className="w-full h-32 rounded-md bg-white/10 border border-white/20 text-white p-3 placeholder-white/50 resize-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="imageUrl" className="text-white/80 text-lg">
              Image URL
            </Label>
            <Input
              name="imageUrl"
              type="text"
              placeholder="https://image.url"
              required
              className="bg-white/10 border border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <Button
            type="submit"
            className="mt-6 text-lg font-semibold px-6 py-4 bg-white/10 text-white border border-white/30 backdrop-blur-sm rounded-xl hover:bg-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 ease-in-out"
          >
            ➕ Add Movie
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
