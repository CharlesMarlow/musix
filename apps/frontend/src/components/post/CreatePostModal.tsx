import Modal from '../shared/Modal';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

interface CreatePostModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const CreatePostModal = ({ isOpen, setIsOpen }: CreatePostModalProps) => {
  const [postText, setPostText] = useState('');

  return (
    <Modal title='Create a New Post' open={isOpen} onOpenChange={setIsOpen}>
      <Textarea
        placeholder="What's on your mind?"
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
        className='mt-4'
      />
      <Button
        className='mt-4 w-full'
        disabled={!postText.trim()}
        onClick={() => setIsOpen(false)}
      >
        Post
      </Button>
    </Modal>
  );
};

export default CreatePostModal;
