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
      <div className="py-24 bg-bottom bg-cover bg-wave-image lg:transform-none lg:pt-44 lg:pb-60 flip-updown">
        <div className="container flex flex-col-reverse h-full px-6 flip-updown lg:transform-none lg:flex-row lg:justify-between">
          {/* Content */}
          <div className="lg:w-2/3">
            <div className="text-2xl font-bold text-center lg:text-left lg:text-5xl">
              <span className="text-slate-800">What's </span>
              <span className="text-hotel-green">LongSty</span>
            </div>
            <div className="mt-6 text-base leading-7 lg:leading-loose lg:mt-12 lg:text-2xl">
              <span className="font-bold text-hotel-green">
                夜18時など遅くまで滞在可能なレイトチェックアウトプラン
              </span>
              <span className="text-slate-700">
                を<br />
                検索することができるサービスです。
                <br />
                通常は朝11時などにホテルを出なければいけませんが、夕方までホテルでゆっくり過ごすことができます。
              </span>
            </div>
          </div>
          {/* Image */}
          <div className="flex justify-center mb-10 lg:justify-end">
            <div className="h-[491px] rounded-xl shadow-xl border-4 border-b-8 bg-mobile-ui-image w-80 border-slate-100 image-base"></div>
          </div>
        </div>
      </div>
      <div className="bg-slate-100">
        <div className="container px-0 pt-10 lg:px-4 lg:pb-24">
          <h1 className="h1">How it works.</h1>
          <div className="flex w-full gap-6 px-10 pb-10 mt-6 overflow-x-auto lg:pb-0 lg:px-0 snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:gap-24">
            <div className="relative flex flex-col items-center flex-shrink-0 overflow-hidden break-words w-72 lg:w-full snap-center">
              <div className="lp-image bg-hotel-image"></div>
              <h3 className="mt-3 lg:mt-6 h3">ステイホテル</h3>
              <p className="mt-2 text-slate-700 lg:mt-4 description">
                ホテルに滞在してコロナ禍を
              </p>
              <p className="text-slate-700 description">安全に過ごそう</p>
            </div>
            <div className="relative flex flex-col items-center flex-shrink-0 overflow-hidden break-words w-72 lg:w-full snap-center">
              <div className="lp-image bg-evening-image"></div>
              <h3 className="mt-3 lg:mt-6 h3">遅くまでゆっくり</h3>
              <p className="mt-2 text-slate-700 lg:mt-4 description">
                普段会えない恋人や友人と遅くまでゆっくり過ごそう
              </p>
            </div>
            <div className="relative flex flex-col items-center flex-shrink-0 overflow-hidden break-words w-72 lg:w-full snap-center">
              <div className="lp-image bg-workation-image"></div>
              <h3 className="mt-3 lg:mt-6 h3">ワーケーション</h3>
              <p className="mt-2 text-slate-700 lg:mt-4 description">
                リモートワークに適したプランも
              </p>
              <p className="text-slate-700 description">見つかるかも</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container px-6 pt-10 pb-10 lg:pb-24">
          <h1 className="h1">How to use.</h1>
          <div className="flex flex-col gap-8 mt-6 lg:grid lg:grid-rows-3 lg:gap-16">
            <div className="flex flex-col items-center space-y-3 break-words lg:items-start lg:grid lg:grid-cols-3 lg:gap-6">
              <div className="lp-image bg-search-image"></div>
              <div className="flex flex-col items-center space-y-2 lg:items-start lg:col-span-2 lg:pt-4 lg:space-y-6 lg:pl-11">
                <h3 className="h3 first-letter:text-3xl first-letter:font-perisienne text-hotel-green">
                  1. 検索する
                </h3>
                <div>
                  <p className="text-slate-700 description lg:text-left">
                    宿泊希望日と都道府県、宿泊人数を入力して検索しよう。
                  </p>
                  <p className="text-slate-500 description lg:text-left">
                    ※ 現在は大阪府のホテルしか検索できません。
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col-reverse items-center space-y-3 space-y-reverse break-words lg:items-start lg:grid lg:grid-cols-3 lg:gap-6">
              <div className="flex flex-col items-center mt-3 space-y-2 lg:items-start lg:col-span-2 lg:pt-4 lg:space-y-6">
                <h3 className="h3 first-letter:text-3xl first-letter:font-perisienne text-hotel-green">
                  2. プラン一覧をチェックする
                </h3>
                <div>
                  <p className="text-slate-700 description lg:text-left">
                    検索条件にマッチしたレイトチェックアウトプランがホテルごとに表示されます。
                  </p>
                  <p className="text-slate-700 description lg:text-left">
                    気に入ったプランをクリックして詳細を確認しよう。
                  </p>
                  <p className="text-slate-500 description lg:text-left">
                    ※ じゃらん様のページへと遷移します。
                  </p>
                </div>
              </div>
              <div className="lp-image bg-planlist-image"></div>
            </div>
            <div className="flex flex-col items-center space-y-3 break-words lg:items-start lg:grid lg:grid-cols-3 lg:gap-6">
              <div className="lp-image bg-favorite-image"></div>
              <div className="flex flex-col items-center space-y-2 lg:items-start lg:col-span-2 lg:pt-4 lg:space-y-6 lg:pl-11">
                <h3 className="h3 first-letter:text-3xl first-letter:font-perisienne text-hotel-green">
                  3. ホテルをお気に入りに登録する
                </h3>
                <div>
                  <p className="text-slate-700 description lg:text-left">
                    ログインすれば、よく使うホテルをお気に入り登録することができます。
                  </p>
                  <p className="text-slate-700 description lg:text-left">
                    ホテル名の横のハートマークをポチッとしよう。
                  </p>
                  <p className="text-slate-500 description lg:text-left">
                    ※ お気に入り機能は未実装です。
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
