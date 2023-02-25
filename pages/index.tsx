import { useEffect, useRef, useState } from "react";

import Head from "next/head";
import type { NextPage } from "next";
import Typewriter from "typewriter-effect";
import TypewriterComponent from "typewriter-effect";

const Home: NextPage = () => {
    const headerRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    const [gallery, setGallery] = useState(false);
    const [msg, setMsg] = useState(false);
    setTimeout(() => {
        setVisible(false);
    }, 4500);
    let photos = [
        "/3.jpeg",
        "/4.jpeg",
        "/5.jpeg",
        "/6.jpeg",
        "/7.jpeg",
        "/8.jpeg",
        "/9.jpeg",
        "/10.jpeg",
        "/11.jpeg",
        "/12.jpeg",
        "/13.jpeg",
        "/14.jpeg",
    ];

    const galleryRef = useRef<HTMLHeadingElement>(null);

    // on scroll make the gallery visible
    useEffect(() => {
        const handleScroll = () => {
            if (galleryRef.current) {
                const top = galleryRef.current.getBoundingClientRect().top;
                if (top <= 5) {
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

            <div
                className={`flex h-screen items-center justify-center ${
                    !visible ? "hidden" : ""
                }`}
            >
                {visible && (
                    <h1 className="text-6xl font-serif text-center text-blue-400">
                        <TypewriterComponent
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("Loading ")
                                    .typeString(".")
                                    .typeString(" .")
                                    .typeString(" .")
                                    .deleteAll()
                                    .start();
                            }}
                        />
                    </h1>
                )}
            </div>

            {/* header */}

            {!visible && (
                <div className="flex gap-x-5 transition-shadow" ref={headerRef}>
                    <div className="flex flex-auto items-center justify-center ml-8 w-[50vw] max-w-2xl my-auto">
                        <h1 className="text-center text-5xl font-bold align-middle">
                            <TypewriterComponent
                                onInit={(typewriter) => {
                                    typewriter
                                        .pauseFor(200)
                                        .typeString("Hey, ")
                                        .pauseFor(150)
                                        .typeString(
                                            `<span style="color:rgb(59 130 246)">Sonali!</span> <br />`
                                        )
                                        .pauseFor(50)
                                        .typeString("<br />")
                                        .typeString(
                                            `
                                            Wishing you a birthday that's just as wonderful as you are!
                                            `
                                        )
                                        .pauseFor(50)
                                        .typeString("<br />")
                                        .typeString("<br />")
                                        .typeString(
                                            `<span style="color:rgb(251 146 60)">Enjoy Your Day!</span>`
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
                            className="rounded-3xl shadow-2xl h-[95vh]"
                        />
                    </div>
                </div>
            )}

            {/* display gallery as heading for all devices */}
            <h1
                className="text-2xl md:text-5xl font-bold text-center mt-20 my-10 hidden"
                ref={galleryRef}
            >
                <Typewriter
                    options={{
                        strings: [
                            "Let's have a look on . . .",
                            "Her Gallery",
                            "Her Beauty",
                            "Her Smile",
                            "Her Poses",
                            "Her Aesthetic look",
                            "and so on . . .",
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
                            key={Math.random()}
                            className="rounded-3xl shadow-2xl h-[50vh] md:h-[70vh] hover:scale-105 transition-all duration-300"
                        />
                    </div>
                ))}
            </div>

            {/* footer */}

            <h1
                className="text-3xl text-center font-bold my-10 hidden"
                ref={lastMsg}
            >
                Last Message:
            </h1>

            <h1 hidden={!msg} className="text-3xl text-center font-light my-10">
                <TypewriterComponent
                    onInit={(typewriter) => {
                        typewriter
                            .pauseFor(150)
                            .typeString(
                                `<span style="color:rgb(59 130 246)">Again, wishing a veryyy veryyy Happppyyyyyy Birthdayyyyyy to you!!!</span>`
                            )
                            .pauseFor(1500)
                            .deleteAll()
                            .typeString("BYEEEEEEE BYEEEEEEEE <br />")
                            .typeString("Soooooo Jaoooooooooooo ")
                            .start();
                    }}
                />
                <br />
            </h1>
        </div>
    );
};
// Again, wishing a veryyy veryyy Happppyyyyyy Birthdayyyyyy to you!!!
export default Home;
