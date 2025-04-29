
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '@/components/Button';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="text-center max-w-md">
        <img 
          src="/lovable-uploads/9ceeaba1-4572-4e8a-aad2-6cac77f0d666.png" 
          alt="ReLeaf Logo" 
          className="h-16 w-16 mx-auto mb-6"
        />
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Oops! The page you're looking for doesn't exist.</p>
        <Button size="lg" onClick={() => window.location.href = '/'}>
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
