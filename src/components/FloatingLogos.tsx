import logoSymbol from '@/assets/logo-symbol-white-transparent.png';

export const FloatingLogos = () => {
  const logos = [
    { top: '10%', left: '5%', size: 80, delay: 0 },
    { top: '30%', right: '8%', size: 100, delay: 2 },
    { top: '60%', left: '3%', size: 60, delay: 4 },
    { top: '75%', right: '5%', size: 90, delay: 6 },
    { top: '20%', left: '85%', size: 70, delay: 8 },
    { top: '50%', left: '90%', size: 50, delay: 10 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logoSymbol}
          alt=""
          className="floating-logo"
          style={{
            top: logo.top,
            left: logo.left,
            right: logo.right,
            width: logo.size,
            height: logo.size,
            animationDelay: `${logo.delay}s`,
          }}
        />
      ))}
    </div>
  );
};
