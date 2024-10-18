import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="hero-section px-4 md:px-40 h-screen flex flex-col justify-center items-center">
      <h1 className="text-center font-Metropolis text-gray-900 text-5xl font-bold leading-[142.5%] pb-2">
        Introducing{" "}
        <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text text-5xl font-Metropolis font-bold">
          {" "}
          CopyCat-AI
        </span>
      </h1>
      <p className="text-center text-gray-900 text-lg font-semibold leading-160 flex justify-center content-center gap-1">
        Ready to transform your social media? Let&apos;s create some magic together! 
        <Image src="/catai.svg" height="30" width="30" alt="maanjar emoji" />
      </p>

      <p>
        powered by GPT-4
      </p>

      <div className="text-center mt-8">
        <Link href="/dashboard" className="px-10 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-extrabold">Get Started Now!</Link>
      </div>
    </div>
  );
};

export default HeroSection;





// import Image from "next/image";
// import Link from "next/link";

// const HeroSection = () => {
//   return (
//     <div className="hero-section px-4 md:px-40 h-screen flex flex-col justify-center items-center">
//       <h1 className="text-center font-Metropolis text-gray-900 text-5xl font-bold leading-[142.5%] pb-2">
//         Introducing{" "}
//         <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text text-5xl font-Metropolis font-bold">
//           {" "}
//           CopyCat-AI
//         </span>
//       </h1>
//       <p className="text-center text-gray-900 text-lg font-semibold leading-160 flex justify-center content-center gap-1">
//         Ready to transform your social media? Let's create some magic together! 
//         <Image src="/catai.svg" height="30" width="30" alt="maanjar emoji" />
//       </p>

//       <p>
//         powered by GPT-4
//       </p>

//       <div className="text-center mt-8">
//         <Link href="/dashboard" className="px-10 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-extrabold ">Get Started Now!</Link>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
