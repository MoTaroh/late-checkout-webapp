import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar/NavBar";
import NavBar2 from "../components/NavBar/NavBar2";
import SearchBox from "../components/SearchBox";

const TopPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleScrollState = () => {
    window.scrollY > window.innerHeight
      ? setIsScrolled(true)
      : setIsScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleScrollState);
    return () => {
      window.removeEventListener("scroll", toggleScrollState);
    };
  }, []);

  return (
    <>
      <div className="object-center bg-center bg-cover bg-hero-image">
        <div className="container flex flex-col max-h-screen min-h-screen lg:px-12">
          <NavBar></NavBar>
          <div className="flex items-center justify-center flex-1 lg:justify-start">
            <Hero />
          </div>
          <div className="flex justify-center mb-4 lg:mb-32">
            <SearchBox />
          </div>
        </div>
      </div>
      <div className="container flex mt-44 mb-60 w">
        {/* Content */}
        <div className="w-2/3">
          <div className="text-5xl font-bold">
            <span className="text-gray-800 ">What's </span>
            <span className="text-hotel-green">LongSty</span>
          </div>
          <div className="mt-12 text-2xl leading-10">
            <span className="font-bold text-hotel-green">
              夜18時など遅くまで滞在可能なレイトチェックアウトプラン
            </span>
            <span className="text-gray-700">
              を検索することができるサービスです。
              通常は朝11時などにホテルを出なければいけませんが、夕方までホテルでゆっくり過ごすことができます。
            </span>
          </div>
        </div>
        {/* Image */}
        <div className="flex justify-end w-1/3">
          {/* <img src="" alt="" /> */}
          <div className="h-48 transform translate-x-10 translate-y-8 bg-gray-200 shadow-xl w-80 rounded-xl"></div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container pt-10 pb-24">
          <h1 className="text-4xl font-bold text-center text-gray-800">
            How it works.
          </h1>
          <div className="grid grid-cols-3 gap-24 mt-9">
            <div className="flex flex-col items-center break-words">
              <div className="w-full h-56 bg-gray-300"></div>
              <h3 className="mt-6 text-2xl font-bold text-gray-800">
                ステイホテル
              </h3>
              <p className="mt-4 text-lg text-center text-gray-700">
                ホテルに滞在してコロナ禍を
              </p>
              <p className="text-lg text-center text-gray-700">
                安全に過ごそう
              </p>
            </div>
            <div className="flex flex-col items-center break-words">
              <div className="w-full h-56 bg-gray-300"></div>
              <h3 className="mt-6 text-2xl font-bold text-gray-800">
                遅くまでゆっくり
              </h3>
              <p className="mt-4 text-lg text-center text-gray-700">
                普段会えない恋人や友人と遅くまでゆっくり過ごそう
              </p>
            </div>
            <div className="flex flex-col items-center break-words">
              <div className="w-full h-56 bg-gray-300"></div>
              <h3 className="mt-6 text-2xl font-bold text-gray-800">
                ワーケーション
              </h3>
              <p className="mt-4 text-lg text-center text-gray-700">
                リモートワークに適したプランも
              </p>
              <p className="text-lg text-center text-gray-700">見つかるかも</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container pt-10 pb-24">
          <h1 className="text-4xl font-bold text-center text-gray-800">
            How to use.
          </h1>
          <div className="grid grid-rows-3 gap-16 mt-9">
            <div className="grid grid-cols-3 gap-6 break-words">
              <div className="w-full h-56 bg-gray-300"></div>
              <div className="flex flex-col col-span-2 pt-4 space-y-6 pl-11">
                <h3 className="text-2xl font-bold text-gray-800">
                  1. 検索する
                </h3>
                <div>
                  <p className="text-lg text-gray-700">
                    宿泊希望日と都道府県、宿泊人数を入力して検索しよう。
                  </p>
                  <p className="text-lg text-gray-600">
                    ※現在は大阪府のホテルしか検索できません。
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6 break-words">
              <div className="flex flex-col col-span-2 pt-4 space-y-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  2. プラン一覧をチェックする
                </h3>
                <div>
                  <p className="text-lg text-gray-700">
                    検索条件にマッチしたレイトチェックアウトプランがホテルごとに表示されます。
                  </p>
                  <p className="text-lg text-gray-700">
                    気に入ったプランをクリックして詳細を確認しよう。
                  </p>
                  <p className="text-lg text-gray-600">
                    ※じゃらん様のページへと遷移します。
                  </p>
                </div>
              </div>
              <div className="w-full h-56 bg-gray-300"></div>
            </div>
            <div className="grid grid-cols-3 gap-6 break-words">
              <div className="w-full h-56 bg-gray-300"></div>
              <div className="flex flex-col col-span-2 pt-4 space-y-6 pl-11">
                <h3 className="text-2xl font-bold text-gray-800">
                  3. ホテルをお気に入りに登録する
                </h3>
                <div>
                  <p className="text-lg text-gray-700">
                    ログインすれば、よく使うホテルをお気に入り登録することができます。
                  </p>
                  <p className="text-lg text-gray-700">
                    ホテル名の横のハートマークをポチッとしよう。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isScrolled && <NavBar2></NavBar2>}
      <Footer></Footer>
    </>
  );
};

export default TopPage;
