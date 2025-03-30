
import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const PresentationView = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 bg-black">
        <iframe
          src="/slides"
          className="w-full h-full border-none"
          title="Slidev Presentation"
        ></iframe>
      </div>
      
      <div className="p-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold">Vibe Coding with AI Presentation</h1>
          <Button 
            variant="outline" 
            onClick={() => navigate('/')}
            className="text-white border-white hover:bg-white/20"
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PresentationView;
