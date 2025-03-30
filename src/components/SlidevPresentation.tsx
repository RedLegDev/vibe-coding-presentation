
import React, { useEffect, useRef } from 'react';
import { useToast } from "@/components/ui/use-toast";

interface SlidevPresentationProps {
  isFullscreen: boolean;
}

const SlidevPresentation: React.FC<SlidevPresentationProps> = ({ isFullscreen }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  useEffect(() => {
    // This is a placeholder for where the actual Slidev presentation would be rendered
    // In a real implementation, you would either:
    // 1. Embed an iframe pointing to a Slidev instance
    // 2. Integrate the Slidev library directly (more complex)
    
    const mockSlides = [
      { title: "Vibe Coding with AI", content: "How LLMs & AI Agents are Transforming Development" },
      { title: "What is 'Vibe Coding'?", content: "A philosophy that prioritizes developer happiness..." },
      { title: "The AI Revolution in Coding", content: "Comparing traditional and AI-enhanced coding approaches..." },
      { title: "LLMs: Your Coding Companion", content: "Code completion, natural language to code..." },
      { title: "AI Agents: Beyond Simple Assistance", content: "Autonomous problem solving, continuous learning..." },
      { title: "Finding Your Coding Vibe with AI", content: "Personalized workflows, focus on creative aspects..." },
      { title: "Practical Examples", content: "Refactoring, debugging, API exploration, test generation..." },
      { title: "Embracing the AI-Human Partnership", content: "Complementary strengths, evolving developer skills..." },
      { title: "Thank You!", content: "Resources and next steps..." }
    ];
    
    // Simple slide navigation mock
    let currentSlide = 0;
    
    const renderSlide = (index: number) => {
      if (!containerRef.current) return;
      
      const slide = mockSlides[index];
      containerRef.current.innerHTML = `
        <div class="slide p-12 flex flex-col justify-center items-center h-full text-center transition-all">
          <h1 class="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">${slide.title}</h1>
          <p class="text-xl">${slide.content}</p>
          <div class="mt-12 text-sm text-gray-500">Slide ${index + 1} of ${mockSlides.length} (Use arrows to navigate)</div>
        </div>
      `;
    };
    
    renderSlide(currentSlide);
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        if (currentSlide < mockSlides.length - 1) {
          currentSlide++;
          renderSlide(currentSlide);
        }
      } else if (e.key === 'ArrowLeft') {
        if (currentSlide > 0) {
          currentSlide--;
          renderSlide(currentSlide);
        }
      }
    };
    
    if (isFullscreen) {
      window.addEventListener('keydown', handleKeyDown);
      toast({
        title: "Presentation Controls",
        description: "Use arrow keys or space to navigate between slides",
      });
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isFullscreen, toast]);
  
  return (
    <div 
      ref={containerRef}
      className={`slidev-container bg-gradient-to-br from-gray-50 to-gray-100 ${
        isFullscreen ? 'w-full h-full' : 'aspect-[16/9] w-full'
      }`}
    ></div>
  );
};

export default SlidevPresentation;
