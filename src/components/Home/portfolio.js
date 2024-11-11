import portfolioImage from '../../assets/portfolio/portfolio.png';

export default function Component() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#f1ede4]">
      <div 
        className="absolute inset-0 bg-slate-300"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239CA3AF' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="relative h-full flex items-center justify-center">
        <div className="w-1/2 h-auto mx-auto transform translate-y-16">
          <img
            src={portfolioImage}
            alt="Portfolio image"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div 
        className="absolute inset-0 mix-blend-overlay opacity-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' fill='%23f1ede4'/%3E%3C/svg%3E")`, // Cambié el color de la textura directamente a #f1ede4
        }}
      />
    </div>
  );
}
