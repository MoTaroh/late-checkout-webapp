import { useContext } from "react";
import NavBar2 from "../components/NavBar/NavBar2";
import Footer from "../components/Footer";
import HotelList from "../components/HotelList";
import { SearchContext } from "../App";

const HotelListPage = () => {
  const { isLoading, hotels } = useContext(SearchContext);

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar2></NavBar2>
      <div className="container flex flex-col mt-16 md:mt-20">
        {!isLoading && (
          <div className="grid gap-6 mt-6 md:mt-8 lg:mt-10 lg:grid-cols-3">
            {/* <div className="flex items-start justify-between">
                            <h2 className="text-lg font-bold text-gray-800 ">ホテル一覧</h2>
                            <SelectList regions={regions}></SelectList>
                        </div>
                        <RegionName region={hotelDB.result[0].regName} className=""></RegionName>
                        <div className="grid grid-cols-1 gap-3 mb-6 lg:gap-6">
                            {
                                hotelList.map(hotelInfo => (
                                    <HotelListItem key={hotelInfo.hotelName} hotelInfo={hotelInfo} searchInfo={searchInfo}></HotelListItem>
                                ))
                            }
                        </div> */}
            <HotelList hotels={hotels} />
            <div className="hidden mt-5 lg:block">
              <h2 className="text-lg font-bold text-gray-800 ">人気のホテル</h2>
              <div className="flex items-center justify-center h-64 p-3 mt-3 bg-white border border-gray-300 rounded-xl">
                <h3 className="font-bold truncate">只今準備中です。</h3>
              </div>
              <div className="flex items-center justify-center h-64 p-3 mt-6 font-bold bg-opacity-25 border border-gray-300 bg-hotel-green rounded-xl">
                ここに広告を入れたいです。
              </div>
            </div>
          </div>
        )}
        {isLoading && (
          <div className="flex flex-col p-8 mt-6 bg-white border border-gray-300 md:mt-8 lg:mt-10 rounded-xl">
            <div className="font-bold text-gray-700">
              小人さんがせっせと探しています
            </div>
            <div className="mt-2 font-bold text-gray-700">
              温かく応援してあげてください
            </div>
            <div className="flex justify-center mt-8">
              <div className="w-2 h-2 rounded-full bg-hotel-green animate-ping"></div>
            </div>
          </div>
        )}
        <Footer></Footer>
      </div>
    </div>
  );
};

export default HotelListPage;
