import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { useEffect, useRef, useState } from "react";

import Head from "next/head";
import type { NextPage } from "next";
import Typewriter from "typewriter-effect";
import TypewriterComponent from "typewriter-effect";

const Home: NextPage = () => {
    const headerRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(true);
    const [gallery, setGallery] = useState(false);
    const [msg, setMsg] = useState(false);
    setTimeout(() => {
        setVisible(false);
    }, 4500);
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
                const top = galleryRef.current.getBoundingClientRect().top;
                if (top <= 0) {
                    galleryRef.current.classList.remove("hidden");
                    setGallery(true);
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const lastMsg = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (lastMsg.current) {
                const top = lastMsg.current.getBoundingClientRect().top;
                if (top <= 5) {
                    lastMsg.current.classList.remove("hidden");
                    setMsg(true);
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="min-h-screen p-5">
            <Head>
                <title>Happy Birthday Sonali</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {visible ? (
                <div className={`flex h-[90vh] items-center justify-center`}>
                    <span className="md:text-6xl text-3xl text-blue-400 font-bold">
                        {"{ "}{" "}
                    </span>
                    <h1 className="text-5xl md:text-6xl sm:text-3xl font-serif text-center text-blue-400 inline">
                        <TypewriterComponent
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString(" Loading ")
                                    .typeString(".")
                                    .typeString(" .")
                                    .typeString(" . ")
                                    .deleteAll()
                                    .start();
                            }}
                        />
                    </h1>
                    <span className="md:text-6xl text-3xl text-blue-400 font-bold">
                        {"}"}
                    </span>
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
                                        <h1 className="text-center text-4xl md:text-5xl font-bold align-middle">
                                            <TypewriterComponent
                                                onInit={(typewriter) => {
                                                    typewriter
                                                        .pauseFor(200)
                                                        .typeString("Hey, ")
                                                        .typeString(
                                                            `<span style="color:rgb(59 130 246)">Sonali!</span> <br />`
                                                        )
                                                        .typeString("<br />")
                                                        .typeString(
                                                            "Wishing you a birthday that's just as wonderful as you are!"
                                                        )
                                                        .typeString("<br />")
                                                        .typeString("<br />")
                                                        .typeString(
                                                            '<span style="color:rgb(251 146 60)">Enjoy Your Day!</span> <br />'
                                                        )
                                                        .typeString(
                                                            '<span style="color:rgb(251 146 60); font-size:2rem;">Keep Smiling ;)</span>'
                                                        )
                                                        .start();
                                                }}
                                            />
                                        </h1>
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

                    <div
                        className={`${
                            visible ? "hidden" : ""
                        } flex items-center justify-center`}
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
                    <h1
                        className="animate-pulse text-2xl md:text-5xl font-bold text-center my-16 hidden"
                        ref={galleryRef}
                    >
                        <Typewriter
                            options={{
                                strings: [
                                    "Let's have a look on . . .",
                                    "Her Photos",
                                    "Her Beauty",
                                    "Her Smile",
                                    "Her Poses",
                                    "Her Aesthetic look",
                                    "and many more . . .",
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
                                    alt="sonali"
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
