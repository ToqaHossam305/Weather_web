import { useEffect, useState } from 'react';
import { Play, Pause } from 'lucide-react';
import img1 from '../assets/bdbbb7fb0bdf1208475a11d44a8d542d.jpg';        
import img2 from '../assets/6b4eb55d61612cd4231e3a49ce9be7a7.jpg';        
import img3 from '../assets/3a9cb93989a8957fccaee5fcc24a5e71.jpg';        
import WeatherForecast from './WeatherForecast'; 
import HeroContent from './HeroContent'; 

function Heroback() {
  const images = [img1, img2, img3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(imageInterval);
  }, [images.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      
      <div className="absolute inset-0 w-full h-full z-[-1]">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className="w-full h-full bg-black/40" />
          </div>
        ))}
      </div>

      <HeroContent />

      <div className="absolute bottom-0 md:top-0 right-0 w-full md:w-auto md:h-full z-20 flex flex-col justify-end">
        
    

        <WeatherForecast />
      </div>

      <div className="absolute bottom-[15px] left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {images.map((_, index) => {
          const isActive = index === currentImageIndex;
          return (
            <div
              key={index}
              className={`h-2.5 rounded-full transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) shadow-[0_2px_4px_rgba(0,0,0,0.2)] ${
                isActive ? 'w-6 bg-white' : 'w-2.5 bg-white/40'
              }`}
            />
          );
        })}
      </div>

      

    </div>
  );
}

export default Heroback;