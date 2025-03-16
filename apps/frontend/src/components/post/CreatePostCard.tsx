'use client';

import { useTranslations } from 'next-intl';
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
  const t = useTranslations('createPost');
  return (
    <Card className='w-[32rem] mt-10 sm:mt-0'>
      <CardHeader>
        <CardTitle className='text-white flex items-center justify-center gap-2'>
          {' '}
          <Guitar />
          <h3 className='text-[1.4rem]'>{t('title')}</h3>
          <Sparkles />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className='grid w-full items-center gap-4'>
            <div className='flex flex-col space-y-1.5'>
              <Input
                id='create-post'
                placeholder={t('inputPlaceholder')}
                className='rounded-2xl'
              />
            </div>
            <div className='flex justify-between gap-2'>
              <Button className='flex-1 flex items-center gap-x-2 bg-brandGold text-white'>
                <ImageIcon className='w-4 h-4' /> {t('addons.media')}
              </Button>
              <Button className='flex-1 flex items-center gap-x-2 bg-brandScarlet text-white '>
                <Smile className='w-4 h-4' /> {t('addons.emotion')}
              </Button>
              <Button className='flex-1 flex items-center gap-x-2 bg-brandGold text-white '>
                <MapPin className='w-4 h-4' /> {t('addons.checkIn')}
              </Button>
              <Button className='flex-1 flex items-center gap-x-2 bg-brandScarlet text-white '>
                <ImageIcon className='w-4 h-4' /> {t('addons.gif')}
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreatePostCard;
