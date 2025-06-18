import toast, { Toaster } from 'react-hot-toast';
import { useEffect, useRef } from 'react';

type Props = { message: string };

export const ErrorMessage = ({ message }: Props) => {
  const hasShown = useRef(false);

  useEffect(() => {
    if (!hasShown.current) toast.error(message);
    hasShown.current = true;
  }, [message]);

  return <Toaster position="top-right" />;
};
