"use client";
import React, { useState, ChangeEvent } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Label } from '../ui/label';

import * as actions from "@/actions";

interface MovieProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

const ShowMovie = ({ data }: { data: MovieProps }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [updatedMovie, setUpdatedMovie] = useState({ ...data });

  const handleUpdateMovie = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof MovieProps
  ) => {
    setUpdatedMovie((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <Card className="w-[300px] backdrop-blur-md bg-white/5 border border-white/20 text-white rounded-2xl p-5 shadow-xl transition-all transform duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(255,255,255,0.2)]">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-white/90">{data.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-44 object-cover rounded-xl border border-white/20 mb-4"
        />
        <p className="text-sm text-white/80 mb-4 line-clamp-3">{data.description}</p>

        {/* Delete Button */}
        <form action={actions.deleteMovie}>
          <Input type="hidden" name="movieID" value={data.id} />
          <Button
            type="submit"
            className="w-full mb-2 bg-red-600 text-white hover:bg-red-700 transition-colors"
          >
            🗑️ Delete
          </Button>
        </form>

        {/* Edit Dialog */}
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="w-full border-white/30 text-gray-500 hover:bg-white/10"
            >
              ✏️ Edit
            </Button>
          </DialogTrigger>

          <DialogContent className="backdrop-blur-md bg-white/5 border border-white/20 text-white rounded-xl">
            <DialogHeader>
              <DialogTitle className="text-white">Edit Movie</DialogTitle>
            </DialogHeader>
            <form action={actions.editMovie} className="space-y-4">
              <div>
                <Label className="text-white/80">Title</Label>
                <Input
                  type="text"
                  name="title"
                  value={updatedMovie.title}
                  onChange={(e) => handleUpdateMovie(e, 'title')}
                  className="bg-white/10 border border-white/20 text-white placeholder-white/50"
                />
              </div>
              <div>
                <Label className="text-white/80">Description</Label>
                <textarea
                  name="description"
                  value={updatedMovie.description}
                  onChange={(e) => handleUpdateMovie(e, 'description')}
                  className="w-full h-28 p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 resize-none"
                />
              </div>
              <div>
                <Label className="text-white/80">Image URL</Label>
                <Input
                  type="text"
                  name="imageUrl"
                  value={updatedMovie.image}
                  onChange={(e) => handleUpdateMovie(e, 'image')}
                  className="bg-white/10 border border-white/20 text-white placeholder-white/50"
                />
              </div>
              <Input type="hidden" name="movieID" value={data.id} />
              <Button
                type="submit"
                className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white"
              >
                💾 Save
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default ShowMovie;
