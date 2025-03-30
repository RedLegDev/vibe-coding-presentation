
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import SlidevPresentation from '@/components/SlidevPresentation';

const Index = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Vibe Coding with AI</h1>
          <p className="text-sm opacity-80">A Slidev Presentation on AI-Assisted Development</p>
        </div>
      </header>

      <main className="flex-1 container mx-auto p-4">
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">Presentation Preview</h2>
            <p className="text-gray-600">Exploring how LLMs and AI agents are transforming development</p>
          </div>
          <Button 
            onClick={toggleFullscreen}
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
          >
            {isFullscreen ? "Exit Fullscreen" : "View Fullscreen"}
          </Button>
        </div>

        <div className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${
          isFullscreen ? "fixed inset-0 z-50" : "relative"
        }`}>
          <SlidevPresentation isFullscreen={isFullscreen} />
          
          {isFullscreen && (
            <Button
              onClick={toggleFullscreen}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white z-10"
            >
              Exit Fullscreen
            </Button>
          )}
        </div>

        {!isFullscreen && (
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-purple-600 mb-2">About This Presentation</h3>
              <p className="text-gray-700 mb-4">
                This interactive presentation explores the concept of "vibe coding" and how AI tools are revolutionizing the way we write code. Navigate through slides to learn about LLMs, AI agents, and practical applications in modern development.
              </p>
              <p className="text-gray-700">
                Built with Slidev - a modern presentation tool for developers that uses Markdown and Vue components.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-blue-600 mb-2">Key Topics</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 p-1 rounded mr-2">•</span>
                  <span>What is "vibe coding" and its benefits</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-100 text-purple-800 p-1 rounded mr-2">•</span>
                  <span>How LLMs function as coding companions</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 p-1 rounded mr-2">•</span>
                  <span>AI agents for autonomous problem solving</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-pink-100 text-pink-800 p-1 rounded mr-2">•</span>
                  <span>Practical examples and implementation techniques</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-gray-100 p-4 text-center text-gray-600">
        <p>Created with Slidev and React • Explore AI-assisted development</p>
      </footer>
    </div>
  );
};

export default Index;
