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
          href="https://s3.amazonaws.com/attachments.angel.co/12700401-643a902d4773521b6b13606e02441845.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIATAVHNKYQ72TUKYEB%2F20250905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250905T190259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCICP9J34JQ3eoTF9vC02dhKVna5yDvP6lElklXWjHthQJAiAHN6BCZwdeiLNQKlEKppB4zpjlri17NJjmCiD0OH%2BSRSqLBQh8EAAaDDIwNzU4MzI3MDQzMyIMZpCU8nhQcsfbLhXCKugEoeD5RCLm5HCI1ECUZSI6xExgcTvMdLiX3WKSztPFd7bdGJZjozNP7YoMilhrg%2BlbLBrTd4ft8nf4KdvSuJATzA3kprRR1qSaZZQNr90IhFk68Y3me%2BFxS3fOAB%2FNfTh8rTYjqoGHdKN7SCX8kVWTDoD2y%2BjobsND%2B0Eyp6nbB%2FIwrhRdGX7De06sb0qcyvCcHE%2BoXY3tRdfdxK0N9jVKrOaYUatnUEsf61dPQ8irUj3KZM27rrkIhJLXUYCR5GZZm2B0ls%2BaZddqjXA7Eyy72VGYDSQr0bEFtJPx53h1Dpx4W7CjcPYAteGXxNif1dJNWZPfjr3arQ27N8uZFXS2YiE1Fyzz702hOjQAiGFkuvvDTzoEjVLnLflt6byKhrvcYD1BHjKz6OUlYCdgHAP9R9pe7fm%2BfHuBJrL%2Fl4dkmuZ9agPjDDgq9O7C2CkayEnz6IPW1qBO%2B0Tt63SwIPdTk2uhX1sL0tB6VTCC4wOOcz5auVKUlNBZ1Q0Tb%2BwqDBw0wsuSnLMBKPcEwT8lfJKeAMkTh5ULyxP18WaZ97PtgTAEwSknX8OtkPH4Aq16BiWpAip9ziTnCndcCpbT1B4oU0uTZn69dYYetdAu2Xq%2B5fj83pA6rCzfriBz8kW9lEEWObNIMrKHo2MVXmGzehvypfl%2BggvsLM5%2FWZ77AHcGqopFSNbYXWOF4PFyqRj1XTJS8yy9r71jjaLxKhp1NRvb9bvy85QnZcqJGJHIk%2BU8UhSmB4e0A7IaY%2F%2BgsAmO%2F9gkz%2F4Vbkg339oz%2BQ%2F6LPacBmIKskzLinQjwmBE%2BBiztV6LWq5PICz2MzCi4OzFBjqbAR2hsAN5TrWzt6hZXDr5t7uK6SuJ8GMb0tyTUfzZN3bLmgALR4tWL%2FPt0wIJAco33C1rmxXYgvZa6zVYh%2F%2FrHFvXpvp5fXvTL0geue%2B6Il4G6AILnWHjsnOUszsUtOheg196In2KmdM5gnL1ztEQFFG2NlD906S%2BRXPO1TyQ%2BlF04fz23oYKMmvDLN%2FIO9DSBgT6t4An87K7BZ%2BN&X-Amz-SignedHeaders=host&X-Amz-Signature=62460771aec4fb4d1f204ec336f36bd5e6edcb5cdb72bf8028657f3b77601729"
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