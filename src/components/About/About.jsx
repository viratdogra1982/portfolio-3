import React, { useState, useEffect, useRef } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import Profile3 from '../../assets/work_logo/Profile3.png';





const About = () => {
  const typingTexts = ['Fullstack Developer', 'Coder', 'Web Developer'];

  const [maxWidth, setMaxWidth] = useState(0);
  const hiddenTextRef = useRef(null);

  const longestText = typingTexts.reduce((a, b) => (a.length > b.length ? a : b));

  useEffect(() => {
    if (hiddenTextRef.current) {
      setMaxWidth(hiddenTextRef.current.offsetWidth);
    }
  }, []);

  return (
    <section
      id="about"
      className="py-0 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      {}
      <div className="flex flex-col-reverse md:flex-row md:items-center justify-between md:gap-x-16">

        {}
        <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left mt-8 md:mt-0">
          {}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          {}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Virat Dogra
          </h2>

          {}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight whitespace-nowrap flex justify-center md:justify-start">
            <span className="text-white">I am a&nbsp;</span>

            {}
            <span
              className="inline-block text-left"
              style={{ minWidth: maxWidth ? `${maxWidth}px` : 'auto' }}
            >
              <ReactTypingEffect
                text={typingTexts}
                speed={100}
                eraseSpeed={50}
                typingDelay={500}
                eraseDelay={2000}
                cursorRenderer={(cursor) => (
                  <span className="text-[#8245ec]">{cursor}</span>
                )}
              />
            </span>

            {}
            <span
              ref={hiddenTextRef}
              className="absolute opacity-0 pointer-events-none text-xl sm:text-2xl md:text-3xl font-semibold"
            >
              {longestText}
            </span>
          </h3>

          {}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mt-6 leading-relaxed">
            I am a full-stack developer building scalable web applications. Skilled in both front-end and
            back-end development, I specialize in the MERN stack and other modern technologies to create seamless
            user experiences and efficient solutions.
          </p>
        </div>

        {}
        <div className="md:w-1/2 flex justify-center md:justify-end items-center">
          <Tilt
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-[20rem] md:h-[20rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={Profile3}
              alt="Virat Dogra"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>

      {}
      <div className="flex justify-center mt-10">
        <a
          href="https://s3.amazonaws.com/attachments.angel.co/12932831-87430fa40dc4ef460b9b2ce4e95c8e3a.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIATAVHNKYQ7XHW3K64%2F20250909%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250909T064614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCm98tckoybAbNOjDLSZoIClzR1rgjjJ5Vtz6RHYKH0rQIgEHu360hrpPvgRQL%2Fda%2Fm%2BMBIYp3ZcRKJeSefMBX5vwMqlAUI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyMDc1ODMyNzA0MzMiDL4hMx3wmDFw2o46USroBPWArpXauljUAvax6tTCWnGbMAKZcOAkYcEsGsNiA2pgjcibbw7jaSbQwU%2FK%2FSaQh9ckRabRyE%2BSLL62EC1HKeSbOc7cMKt%2BrfWStogGUDpcenArR9UffkyhQV7vYovPdfptXERJODTL7bO%2Fhj9wpn8nS5cXgKbfTKWopIYoxZkOm9sbEQMu440SzPl7IrQlL%2BpbngajuZW1GviG8qawgINHzOEn6XVtidNtq0IpvIc%2FKjjMIx4j4X7Hk0KjQ9QMyhoKdCCCnXtvlXwan9xyyJgTeQzckUm8R9BcyCXeISJwe6YVfyEbKabkFQra%2FxG%2F8E8MO%2F4yI7uxET%2BFmB0seK0FhJj1mL2myWShfYtPP0%2B18%2F%2FA99nIq0Mc8XYwzG5iC2SqlbyaFy3YrCLB1fVKDpU4%2Brfogx9RXOwZJLJQHt3wzXtRjTkFm%2FlVrNgvgh11rC8y3G0R1%2FH8NwiLaRES814dQyF1KxoTKJmn4iFYyPWZOxNH88nXoNFuBUM5sRMmjZ4ycnzxOy%2FOcXN4WdxIg8JKfAXWmcAwMvPI%2FK2E6MWAAR99xoI%2BPlps6f%2BHdcKva70LDoEL7EB1QbS3aYfsHWCNIRElTNTWnzC3Bv3OiIggKJUCpsTLy9MTBTFTffjV8Ogr%2BKxB1r57xiUNngsJKmXPMCLSksV33NNjegt%2BtzOfxFqC6wa1LzsnsHknicMdimvdRCcJ2kuRvzhlkrhmZiLLtaMO5wjaiPfaYgCnrwGZ1MYhAWgBH64zQTTtLG9bqh2mcNn20pZIazktmMWlzSVjK36gctQ7%2FowgM%2BdZxZ%2BJq%2BGenFhgXJIwiJT%2FxQY6mgHOlZO%2FixZJt3hd1%2FpWcVpgo0MQQxzv7L%2BJz6GGq1kF%2BrEArYe%2Fh%2FKrP5ZRZtr25MDOapDd3OgpeihE3ods7UvQgyrIongUaJaZSUWNntahljckSo2jZzm4dM%2FYaKCeBZ6fCOJ0c9rhm8W8hBX8S51EBOlvfGugJWWm58ctTTMc7sXyaka1iVaMWDec%2BTbektZG1jNHbM0sQUHL&X-Amz-SignedHeaders=host&X-Amz-Signature=4bebffcbe25aaf547e17fa0c5e5a098593110006a740867b38d881c5f09c3256"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-white py-3 px-8 rounded-full text-lg font-bold transition duration-300 transform hover:scale-105"
          style={{
            background: 'linear-gradient(90deg, #8245ec, #a855f7)',
            boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
          }}
        >
          DOWNLOAD CV
        </a>
      </div>
    </section>
  );
};

export default About;