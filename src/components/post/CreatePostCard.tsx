import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Guitar } from 'lucide-react';

const CreatePostCard = () => {
  return (
    <Card className='w-[32rem]'>
      <CardHeader>
        <CardTitle className='text-white flex items-center gap-2'>
          Light the world with some music <Guitar size={24} />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className='grid w-full items-center gap-4'>
            <div className='flex flex-col space-y-1.5 '>
              <Input id='name' placeholder="Don't be shy now!" />
            </div>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='framework'>Framework</Label>
              <Select>
                <SelectTrigger id='addon'>
                  <SelectValue placeholder='Add some flair' className='text-white' />
                </SelectTrigger>
                <SelectContent position='popper'>
                  <SelectItem value='media'>Photo/Video</SelectItem>
                  <SelectItem value='emotion'>Emotion</SelectItem>
                  <SelectItem value='location'>Check-in</SelectItem>
                  <SelectItem value='gif'>GIF</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Button variant='outline'>Cancel</Button>
        <Button>Create!</Button>
      </CardFooter>
    </Card>
  );
};

export default CreatePostCard;
