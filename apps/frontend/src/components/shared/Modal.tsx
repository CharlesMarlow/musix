'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { X } from 'lucide-react';
import { ReactNode } from 'react';

interface ModalProps {
  title: string;
  children: ReactNode;
  open?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  trigger?: ReactNode;
}

const Modal = ({
  title,
  children,
  open,
  onOpenChange,
  trigger,
}: ModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}
      <DialogContent className='max-w-md p-6'>
        <DialogHeader className='flex justify-between items-center'>
          <DialogTitle>{title}</DialogTitle>
          <X
            size={18}
            className='cursor-pointer text-gray-500 hover:text-gray-700'
            onClick={() => onOpenChange?.(false)}
          />
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
