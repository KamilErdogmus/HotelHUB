import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="h-[20vh] md:h-[30vh] grid place-items-center relative bg-hero bg-center bg-cover rounded-3xl p-5">
      <div className="text-white text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          <Typewriter
            options={{
              strings: ["Book your stay with HotelHUB"],
              autoStart: true,
              cursor: "",
              delay: 100,
              deleteSpeed: Infinity,
            }}
          />
        </h1>
        <p>
          Over 1,340,057 rooms around the world are ready for
          you!
        </p>
      </div>
    </div>
  );
};

export default Hero;
