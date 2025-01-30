import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Guitar, Sparkles, Smile, MapPin, ImageIcon } from 'lucide-react';

const CreatePostCard = () => {
  return (
    <Card className='w-[32rem]'>
      <CardHeader>
        <CardTitle className='text-white flex items-center justify-center gap-2'>
          {' '}
          <Guitar />
          <h3 className='text-[1.4rem]'>Light the world with some music!</h3>
          <Sparkles />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className='grid w-full items-center gap-4'>
            <div className='flex flex-col space-y-1.5'>
              <Input
                id='create-post'
                placeholder="Don't be shy, yeah?"
                className='rounded-2xl'
              />
            </div>
            <div className='flex justify-between gap-2'>
              <Button className='flex-1 flex items-center gap-x-2 bg-brandGold text-white'>
                <ImageIcon className='w-4 h-4' /> Photo/Video
              </Button>
              <Button className='flex-1 flex items-center gap-x-2 bg-brandScarlet text-white '>
                <Smile className='w-4 h-4' /> Emotion
              </Button>
              <Button className='flex-1 flex items-center gap-x-2 bg-brandGold text-white '>
                <MapPin className='w-4 h-4' /> Check-in
              </Button>
              <Button className='flex-1 flex items-center gap-x-2 bg-brandScarlet text-white '>
                <ImageIcon className='w-4 h-4' /> GIF
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreatePostCard;
