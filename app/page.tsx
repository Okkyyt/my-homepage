"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SampleSVG from "../public/svg/blue-rod.svg";
import CircleSVG from "../public/svg/red-circle.svg";

interface Detail {
  label: string;
  value: string;
}

interface ProfileType {
  title: string;
  details: Detail[];
}

const profiles = [
  {
    title: "main",
    details: [
      { label: "名前", value: "Okki-" },
      { label: "年齢", value: "19" },
      { label: "出身地", value: "神戸" },
      { label: "趣味", value: "プログラミング,ゲーム" },
    ],
  },
  {
    title: "programing",
    details: [
      { label: "技術", value: "Python,JS,Go" },
      { label: "好きな言語", value: "Python" },
      { label: "興味のある技術", value: "GraphQL,Nextjs" },
      { label: "やりたいこと", value: "ハッカソン,Kaggle" },
    ],
  },
  {
    title: "free time",
    details: [
      { label: "すること", value: "寝る,ゲーム,配信見る" },
      { label: "睡眠時間", value: "夜2時間,昼6時間" },
      { label: "好きなゲーム", value: "FPS,LoL,スマホゲー(学マス)" },
      { label: "推し", value: "あくシオ,ここフレ" },
    ],
  },
];

const ProfileCard: React.FC<{ profile: ProfileType }> = ({ profile }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden p-4 m-4 h-80">
      <h3 className="text-2xl font-bold mb-4 text-center">{profile.title}</h3>
      <table className="border-collapse border border-gray-200 table-fixed w-full">
        <tbody>
          {profile.details.map((detail, index) => (
            <tr key={index} className="border border-gray-200">
              <td className="p-2 border border-gray-200 break-words text-lg">
                {detail.label}
              </td>
              <td className="p-2 border border-gray-200 break-words text-lg">
                {detail.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default function Home() {
  const xHandle = process.env.NEXT_PUBLIC_X_URL;
  const githubHandle = process.env.NEXT_PUBLIC_GITHUB_URL;

  return (
    <main className="bg-gray-300 flex flex-col items-center justify-between font-sans w-full overflow-hidden">
      {/* Title */}
      <div className="text-center mt-10 sm:mt-20 mb-10 sm:mb-20 w-full font-bold text-gray-800 relative z-10">
        <h1 className="text-4xl sm:text-6xl">
          Okki-です!!<span>これからよろしく!!</span>
        </h1>
        <h2 className="text-2xl sm:text-4xl mt-4">Python&React勉強中!!</h2>
      </div>

      {/* Link */}
      <div className="group flex flex-col items-center mb-10 sm:mb-20 w-full relative">
        <div className="relative w-full max-w-full h-[200px] sm:h-[300px] overflow-hidden">
          <Image
            src={SampleSVG}
            alt="React Logo"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 opacity-0 transition-all duration-500 transform translate-x-full translate-y-full group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"
          />
          <div className="flex flex-col items-center w-full relative">
            <h3 className="text-3xl sm:text-5xl text-center font-bold text-gray-800 relative z-10">
              My Account
            </h3>
            <div className="mt-4 sm:mt-8 text-2xl sm:text-4xl w-3/4 sm:w-1/2 relative z-10">
              <Link
                className="group/link border-solid border-2 p-2 sm:p-4 rounded-lg border-gray-300 hover:border-blue-500 flex transition-all hover:bg-blue-50 hover:shadow-lg"
                href={`https://x.com/${xHandle}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/x_logo.jpg"
                  alt="x_logo"
                  width={40}
                  height={40}
                  className="mr-2 sm:mr-4 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"
                />
                <p className="font-semibold text-gray-700 group-hover/link:text-blue-500 transition-colors duration-300">
                  X &rarr;
                </p>
              </Link>
              <Link
                className="group/link border-solid border-2 p-2 sm:p-4 rounded-lg border-gray-300 hover:border-blue-500 flex transition-all hover:bg-blue-50 hover:shadow-lg"
                href={`https://github.com/${githubHandle}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/github_logo.jpg"
                  alt="github_logo"
                  width={40}
                  height={40}
                  className="mr-2 sm:mr-4 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"
                />
                <p className="font-semibold text-gray-700 group-hover/link:text-blue-500 transition-colors duration-300">
                  GitHub &rarr;
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* profile */}
      <div className="group text-center mb-10 sm:mb-20 w-full relative">
        <div
          className="
          absolute 
          inset-0 
          opacity-0
          transform 
          scale-100
          transition-all 
          duration-500 
          group-hover:opacity-100 
          group-hover:scale-150
        "
        >
          <Image
            src={CircleSVG}
            alt="red_Circle"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <h3 className="text-3xl sm:text-5xl font-bold text-gray-800 relative z-10">
          profile
        </h3>
        <div className="mt-3 relative z-10">
          <Swiper
            modules={[Navigation, Pagination]}
            loop={false}
            speed={1500}
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={10}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}
          >
            {profiles.map((profile, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <ProfileCard profile={profile} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-next text-black w-8 h-8 absolute right-2 top-1/2 transform -translate-y-1/2"></div>
          <div className="swiper-button-prev text-black w-8 h-8 absolute left-2 top-1/2 transform -translate-y-1/2"></div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </main>
  );
}
