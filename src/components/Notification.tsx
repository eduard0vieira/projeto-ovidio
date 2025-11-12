import React, { useEffect } from 'react';
import type { NotificationState } from '../types';

interface NotificationProps {
  notification: NotificationState;
  onClose: () => void;
}

export const Notification: React.FC<NotificationProps> = ({ notification, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [notification, onClose]);

  const baseClasses = 'fixed top-24 right-5 p-4 rounded-lg shadow-xl text-white transition-all duration-300 transform';
  const typeClasses = notification.type === 'success'
    ? 'bg-green-500'
    : 'bg-red-500';

  return (
    <div className={`${baseClasses} ${typeClasses}`}>
      <span>{notification.message}</span>
      <button onClick={onClose} className="ml-4 font-bold">X</button>
    </div>
  );
};