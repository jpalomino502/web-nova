import portfolioImage from '../../assets/portfolio/portfolio.png';

export default function Component() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Textured background */}
      <div 
        className="absolute inset-0 bg-slate-300"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239CA3AF' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Main content container */}
      <div className="relative h-full flex items-center justify-center">
        {/* Left text */}
        <div className="absolute left-0 transform -translate-x-1/4">
          <h1 className="text-[20vw] font-black text-white leading-none" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
            PORT
          </h1>
        </div>

        {/* Center collage area */}
        <div className="relative w-[40vw] h-[40vw] mx-auto">
          <div className="absolute inset-0 bg-black/5 rounded-full mix-blend-overlay"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-emerald-600 rounded-full transform -rotate-12"></div>
          </div>
          <img
            src={portfolioImage}
            width={400}
            height={400}
            alt="Decorative portfolio element"
            className="absolute top-1/4 left-1/4 w-1/2 h-1/2 object-cover mix-blend-multiply transform rotate-12"
          />
        </div>

        {/* Right text */}
        <div className="absolute right-0 transform translate-x-1/4">
          <h1 className="text-[20vw] font-black text-white leading-none" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
            FOLIO
          </h1>
        </div>
      </div>

      {/* Grain overlay */}
      <div 
        className="absolute inset-0 mix-blend-overlay opacity-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
