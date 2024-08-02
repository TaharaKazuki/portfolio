import React from 'react';

type ErrorMessageProps = {
  message?: string;
};

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className="min-h-8">
      {message && <span className="px-2 text-xs text-accent">{message}</span>}
    </div>
  );
};
