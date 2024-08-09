"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
  const xHandle = "/your_x_handle"; // 適切なハンドルに変更してください
  const githubHandle = "/your_github_handle"; // 適切なハンドルに変更してください

  return (
    <main className="flex flex-col items-center justify-between font-sans w-full">
      {/* Title */}
      <div className="text-center mt-20 mb-20 w-full">
        <h1 className="text-6xl">Okki-です!!これからよろしく!!</h1>
        <h2 className="text-4xl mt-4">Python&React勉強中!!</h2>
      </div>
      {/* Link */}
      <div className="flex flex-col items-center mb-20 w-full">
        <h3 className="text-5xl text-center font-bold text-gray-800">
          My Account
        </h3>
        <div className="mt-8 text-4xl w-1/2">
          <Link
            className="group border-solid border-2 p-4 rounded-lg border-gray-300 hover:border-blue-500 flex transition-all hover:bg-blue-50 hover:shadow-lg"
            href={`https://x.com${xHandle}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/x_logo.jpg"
              alt="x_logo"
              width={50}
              height={50}
              className="mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <p className="font-semibold text-gray-700 group-hover:text-blue-500 transition-colors duration-300">
              X &rarr;
            </p>
          </Link>
          <Link
            className="group border-solid border-2 p-4 rounded-lg border-gray-300 hover:border-blue-500 flex transition-all hover:bg-blue-50 hover:shadow-lg"
            href={`https://github.com${githubHandle}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/github_logo.jpg"
              alt="github_logo"
              width={50}
              height={50}
              className="mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <p className="font-semibold text-gray-700 group-hover:text-blue-500 transition-colors duration-300">
              GitHub &rarr;
            </p>
          </Link>
        </div>
      </div>

      {/* profile */}
      <div className="text-center mb-20 w-full">
        <h3 className="text-5xl font-bold text-gray-800">profile</h3>
        <div className="mt-3 relative">
          <Swiper
            modules={[Navigation, Pagination]}
            loop={false}
            speed={1500}
            slidesPerView={2} // Adjust this to show part of the next slide
            centeredSlides={true} // Center the slide when it comes into view
            spaceBetween={30}
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
