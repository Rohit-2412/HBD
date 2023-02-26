import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { useEffect, useRef, useState } from "react";

import Head from "next/head";
import type { NextPage } from "next";
import Script from "next/script";
import Typewriter from "typewriter-effect";
import TypewriterComponent from "typewriter-effect";

const Home: NextPage = () => {
    const headerRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(true); // true
    const [gallery, setGallery] = useState(false);
    const [msg, setMsg] = useState(false);
    const [scroll, setScroll] = useState(false);

    let photos = [
        "/1.jpeg",
        "/2.jpeg",
        "/3.jpeg",
        "/4.jpeg",
        "/11.jpeg",
        "/5.jpeg",
        "/6.jpeg",
        "/7.jpeg",
        "/8.jpeg",
        "/9.jpeg",
        "/10.jpeg",
        "/12.jpeg",
        "/13.jpeg",
        "/16.jpeg",
        "/14.jpeg",
    ];

    const galleryRef = useRef<HTMLHeadingElement>(null);

    // on scroll make the gallery visible
    useEffect(() => {
        const handleScroll = () => {
            if (galleryRef.current) {
                let top = galleryRef.current.getBoundingClientRect().top;
                if (top <= 10) {
                    galleryRef.current.classList.remove("hidden");
                    setGallery(true);
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const lastMsg = useRef<HTMLHeadingElement>(null);

    // on scroll make the last message visible
    useEffect(() => {
        const handleScroll = () => {
            if (lastMsg.current) {
                const top = window.scrollY;
                if (top >= 1900) {
                    lastMsg.current.classList.remove("hidden");
                    setMsg(true);
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // display date and time and refresh every second
    const [time, setTime] = useState(
        new Date().toLocaleString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
        })
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(
                new Date().toLocaleString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: true,
                })
            );
        }, 1000);

        // after 28feb2023 and time 12:00:00 am make the visible false
        const date = new Date();
        if (
            date.getFullYear() > 2023 ||
            (date.getFullYear() === 2023 &&
                date.getMonth() > 1 &&
                date.getDate() > 28)
        ) {
            setVisible(false);
        }
        return () => clearInterval(interval);
    }, []);

    // time left
    const [timeLeft, setTimeLeft] = useState(
        new Date("Feb 28, 2023 00:00:00").getTime() - new Date().getTime()
    );
    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(
                new Date("Feb 28, 2023 00:00:00").getTime() -
                    new Date().getTime()
            );
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // display date and month
    const [date, setDate] = useState(
        new Date().toLocaleString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
            weekday: "long",
        })
    );
    useEffect(() => {
        const interval = setInterval(() => {
            setDate(
                new Date().toLocaleString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                    weekday: "long",
                })
            );
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen p-5">
            <Head>
                <title>Happy Birthday Sonali</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {visible ? (
                <div
                    className={`flex h-[90vh] items-center justify-center flex-col gap-8`}
                >
                    <h1 className="text-center text-4xl text-blue-500 font-bold font-shantell my-5">
                        {date}
                    </h1>
                    {/* display date and month along with hh mm ss */}
                    <h1 className="text-center text-6xl font-bold my-5 text-indigo-500 font-roboto-slab">
                        {time}
                    </h1>

                    {/* display time left */}
                    <div className="text-center text-4xl  font-bold gap-4">
                        {/* days left */}
                        <p className="text-amber-500">
                            {timeLeft > 0 && (
                                <>
                                    <h1 className="text-4xl md:text-5xl sm:text-3xl font-serif text-center inline">
                                        {Math.floor(
                                            timeLeft / (1000 * 60 * 60 * 24)
                                        ) + " Days "}
                                        {Math.floor(
                                            (timeLeft / (1000 * 60 * 60)) % 24
                                        ) + " Hours "}
                                        {Math.floor(
                                            (timeLeft / (1000 * 60)) % 60
                                        ) + " Minutes "}
                                        {Math.floor((timeLeft / 1000) % 60) +
                                            " Seconds "}
                                    </h1>
                                </>
                            )}
                        </p>
                        <p>
                            {timeLeft <= 0 && (
                                <>
                                    <h1 className="text-center text-6xl text-pink-400 font-bold font-mynerve my-10">
                                        Happy Birthday Sonali
                                    </h1>
                                    <h1 className="text-4xl md:text-5xl sm:text-3xl font-apple text-center text-violet-400 inline-block mt-5">
                                        <TypewriterComponent
                                            onInit={(typewriter) => {
                                                typewriter
                                                    .typeString("<Loading ")
                                                    .typeString(" />")
                                                    .pauseFor(500)
                                                    .callFunction(() => {
                                                        setVisible(true); // make the visible false
                                                    })
                                                    .start();
                                            }}
                                        />
                                    </h1>
                                </>
                            )}
                        </p>
                    </div>
                </div>
            ) : (
                <>
                    <div className="h-5"></div>

                    <ParallaxProvider>
                        <Parallax speed={15}>
                            {!visible && (
                                <div
                                    className="flex gap-x-5 transition-shadow h-screen"
                                    ref={headerRef}
                                >
                                    <div className="flex-row md:flex-col flex-auto items-center justify-center ml-8 w-[50vw] max-w-2xl">
                                        <div className="flex items-center justify-center">
                                            <img
                                                src="/15.jpeg"
                                                alt="logo"
                                                className="md:hidden rounded-full shadow-2xl shadow-indigo-300 mb-10 h-40 w-40"
                                            />
                                        </div>
                                        <div className="relative">
                                            <h1 className="text-center text-4xl md:text-5xl font-bold align-middle h-screen">
                                                <TypewriterComponent
                                                    onInit={(typewriter) => {
                                                        typewriter
                                                            .pauseFor(200)
                                                            .typeString(
                                                                `<span class="text-xl"><span class="text-indigo-700">System</span>.<span class="text-blue-500">out</span>.<span class="text-indigo-700">println(</span><span class="text-black">"Hey, Sonali"</span><span class="text-indigo-700">)</span>;</span>`
                                                            )
                                                            .pauseFor(200)
                                                            .deleteChars(34)
                                                            .typeString("Hey, ")
                                                            .typeString(
                                                                `<span style="color:rgb(59 130 246)" class="font-extrabold">Sonali!</span> <br />`
                                                            )
                                                            .typeString(
                                                                "<br />"
                                                            )
                                                            .typeString(
                                                                `<span style="font-size:1.5rem;">echo $wish`
                                                            )
                                                            .pauseFor(200)
                                                            .deleteChars(10)
                                                            .typeString(
                                                                "Wishing you a birthday that's just as wonderful as you are!"
                                                            )
                                                            .typeString(
                                                                "<br />"
                                                            )
                                                            .typeString(
                                                                "<br />"
                                                            )
                                                            .typeString(
                                                                '<span style="color:rgb(251 146 60)">Enjoy Your Day!</span> <br />'
                                                            )
                                                            .typeString(
                                                                '<span style="color:rgb(251 146 60); font-size:2rem;">Keep Smiling ;)</span>'
                                                            )
                                                            .callFunction(
                                                                () => {
                                                                    setScroll(
                                                                        true
                                                                    );
                                                                }
                                                            )
                                                            .start();
                                                    }}
                                                />
                                            </h1>
                                            <div
                                                className={`${
                                                    scroll ? "flex" : "hidden"
                                                } items-center justify-center absolute bottom-20 left-[50%] transform -translate-x-1/2 duration-150`}
                                            >
                                                <div className="flex flex-col items-center justify-center">
                                                    <h1 className="text-3xl font-bold text-center">
                                                        S C R O L L
                                                    </h1>
                                                    <h1 className="text-2xl font-bold text-center">
                                                        D O W N
                                                    </h1>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-6 w-6 animate-bounce mt-2"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={5}
                                                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* image */}
                                    <div className="flex-1 hidden md:block">
                                        <img
                                            src="/13.jpeg"
                                            alt="sonali"
                                            className="rounded-3xl shadow-2xl h-[85vh]"
                                        />
                                    </div>
                                </div>
                            )}
                        </Parallax>
                    </ParallaxProvider>

                    <h1
                        className="text-2xl md:text-5xl font-bold text-center my-16 hidden"
                        ref={galleryRef}
                    >
                        <Typewriter
                            options={{
                                strings: [
                                    "Let's have a look on her. . .",
                                    '<span class="text-indigo-400">Beautiful Photos</span>',
                                    '<span class="text-orange-400">Cheerful Smile</span>',
                                    '<span class="text-pink-400">Beauty</span>',
                                    '<span class="text-gray-500">Long Curly Hairs</span>',
                                    '<span class="text-lime-400">Random Poses</span>',
                                    '<span class="text-sky-500">and many more things . . .</span>',
                                ],
                                autoStart: gallery,
                                loop: true,
                            }}
                        />
                    </h1>

                    <div
                        className={`${
                            gallery ? "grid" : "hidden"
                        } grid grid-cols-1 md:grid-cols-3 gap-5`}
                    >
                        {photos.map((photo) => (
                            <div className="flex justify-center ">
                                <img
                                    src={photo}
                                    alt={`sonali-${Math.random() * 100}}`}
                                    key={Math.random() * 100}
                                    className="rounded-3xl shadow-2xl h-[50vh] md:h-[70vh] hover:scale-105 transition-all duration-300"
                                />
                            </div>
                        ))}
                    </div>

                    <h1
                        className="text-3xl md:text-4xl text-center font-bold my-16 hidden"
                        ref={lastMsg}
                    >
                        L A S T L Y . . .
                    </h1>

                    <h1 className="text-2xl md:text-3xl text-center font-medium my-10">
                        <Typewriter
                            options={{
                                strings: [
                                    `<span style="color:rgb(59 130 246)">Wishing a veryyy veryyy Happppyyy Birthdayyy!!!</span>`,
                                ],
                                autoStart: msg,
                                loop: true,
                            }}
                        />
                    </h1>

                    {/* created by */}
                    <div className="flex items-center justify-center">
                        <h1 className="text-2xl font-bold text-center text-slate-400">
                            Made with ❤️ for{" "}
                            <span className="text-pink-400">
                                <a href="https://www.instagram.com/sonalisingh.19/">
                                    Sonali
                                </a>
                            </span>
                        </h1>
                    </div>
                </>
            )}
        </div>
    );
};
export default Home;
