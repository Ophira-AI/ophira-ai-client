import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 py-24">
      <div className="mb-6">
        <img src="/images/Logo.svg" alt="Logo Icon" className="h-16 w-16" />
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-4 font-orbitron">WELCOME TO OPHIRA</h1>
      <p className="text-lg md:text-xl max-w-2xl text-gray-300 mb-8">
        With cutting-edge AI forecasting, Ophira empowers you to predict outcomes, plan smarter, and optimize your strategy
      </p>
      <Button href='/signup'>Get Started with Ophira</Button>
    </section>
  );
};

export default Hero;