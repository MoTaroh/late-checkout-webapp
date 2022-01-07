import { useContext, useEffect } from "react";
import NavBar2 from "../components/NavBar/NavBar2";
import Footer from "../components/Footer";
// import HotelListItem from '../components/HotelListItem'
// import SelectList from '../components/SelectList'
// import RegionName from '../components/RegionName'
import HotelList from "../components/HotelList";
import { SearchContext } from "../App";
import axios from "axios";

// const hotelList = [
//     {"hotelName": "アインズ・イン梅田東","hotelNo": "345754"},
//     {"hotelName": "アパホテル〈御堂筋本町駅前〉","hotelNo": "386787"},
//     {"hotelName": "アパホテル〈御堂筋本町駅東〉（全室禁煙）","hotelNo": "386585"},
//     {"hotelName": "アパホテル〈大阪肥後橋駅前〉（全室禁煙）","hotelNo": "346744"},
//     {"hotelName": "アパホテル〈東梅田 南森町駅前〉","hotelNo": "323812"},
//     {"hotelName": "アパホテル〈淀屋橋 北浜駅前〉","hotelNo": "369184"},
//     {"hotelName": "アパホテル＆リゾート〈御堂筋本町駅タワー〉（全室禁煙）","hotelNo": "376554"},
//     {"hotelName": "イビス大阪梅田","hotelNo": "339535"},
//     {"hotelName": "スーパーホテルPremier大阪・本町　天然温泉　四季彩の湯","hotelNo": "308796"},
//     {"hotelName": "スーパーホテル梅田・肥後橋","hotelNo": "328798"},
//     {"hotelName": "プレミアホテル－CABIN－大阪","hotelNo": "328778"},
//     {"hotelName": "ホテルＷＢＦ本町","hotelNo": "377707"},
//     {"hotelName": "ホテルマイステイズプレミア堂島","hotelNo": "334326"},
//     {"hotelName": "ホテルマイステイズ御堂筋本町","hotelNo": "314648"},
//     {"hotelName": "ホテルマイステイズ堺筋本町","hotelNo": "304638"},
//     {"hotelName": "東急ステイ大阪本町（2020年2月27日グランドオープン）","hotelNo": "307894"},
//     {"hotelName": "ホテルグレイスリー大阪なんば","hotelNo": "330578"},
//     {"hotelName": "ホテルヒラリーズ心斎橋","hotelNo": "363847"},
// ]

const hotelDB = {
  result: [
    {
      hotelNo: "345754",
      hotelName: "アインズ・イン梅田東",
      prefNo: "270000",
      prefName: "大阪府",
      regionNo: "272000",
      regionName: "大阪駅・梅田駅・福島・淀屋橋・本町",
      planList: [
        {
          planNo: "",
          planName:
            "【室数限定36時間ステイ】8：00～翌20：00の36時間滞在可能！　■アパは映画もアニメも見放題■",
          checkInTime: "15:00",
          checkOutTime: "20:00",
          roomList: [
            {
              roomNo: "",
              roomName: "スタンダードルーム 2名利用 【禁煙室】",
              roomPrice: 4000,
            },
            {
              roomNo: "",
              roomName: "スタンダードルーム 2名利用 【喫煙室】",
              roomPrice: 4200,
            },
          ],
        },
      ],
    },
    {
      hotelNo: "345754",
      hotelName: "アインズ・イン梅田東",
      prefNo: "270000",
      prefName: "大阪府",
      regionNo: "272000",
      regionName: "大阪駅・梅田駅・福島・淀屋橋・本町",
      planList: [
        {
          planNo: "",
          planName:
            "【室数限定36時間ステイ】8：00～翌20：00の36時間滞在可能！　■アパは映画もアニメも見放題■",
          checkInTime: "15:00",
          checkOutTime: "20:00",
          roomList: [
            {
              roomNo: "",
              roomName: "スタンダードルーム 2名利用 【禁煙室】",
              roomPrice: 4000,
            },
          ],
        },
      ],
    },
    {
      hotelNo: "345754",
      hotelName: "アインズ・イン梅田東",
      prefNo: "270000",
      prefName: "大阪府",
      regionNo: "272000",
      regionName: "大阪駅・梅田駅・福島・淀屋橋・本町",
      planList: [
        {
          planNo: "",
          planName:
            "【室数限定36時間ステイ】8：00～翌20：00の36時間滞在可能！　■アパは映画もアニメも見放題■",
          checkInTime: "15:00",
          checkOutTime: "20:00",
          roomList: [
            {
              roomNo: "",
              roomName: "スタンダードルーム 2名利用 【禁煙室】",
              roomPrice: 4000,
            },
          ],
        },
      ],
    },
    {
      hotelNo: "345754",
      hotelName: "アインズ・イン梅田東",
      prefNo: "270000",
      prefName: "大阪府",
      regionNo: "272000",
      regionName: "大阪駅・梅田駅・福島・淀屋橋・本町",
      planList: [
        {
          planNo: "",
          planName:
            "【室数限定36時間ステイ】8：00～翌20：00の36時間滞在可能！　■アパは映画もアニメも見放題■",
          checkInTime: "15:00",
          checkOutTime: "20:00",
          roomList: [
            {
              roomNo: "",
              roomName: "スタンダードルーム 2名利用 【禁煙室】",
              roomPrice: 4000,
            },
          ],
        },
      ],
    },
    {
      hotelNo: "345754",
      hotelName: "アインズ・イン梅田東",
      prefNo: "270000",
      prefName: "大阪府",
      regionNo: "272000",
      regionName: "大阪駅・梅田駅・福島・淀屋橋・本町",
      planList: [
        {
          planNo: "",
          planName:
            "【室数限定36時間ステイ】8：00～翌20：00の36時間滞在可能！　■アパは映画もアニメも見放題■",
          checkInTime: "15:00",
          checkOutTime: "20:00",
          roomList: [
            {
              roomNo: "",
              roomName: "スタンダードルーム 2名利用 【禁煙室】",
              roomPrice: 4000,
            },
          ],
        },
      ],
    },
    {
      hotelNo: "345754",
      hotelName: "アインズ・イン梅田東",
      prefNo: "270000",
      prefName: "大阪府",
      regionNo: "272000",
      regionName: "大阪駅・梅田駅・福島・淀屋橋・本町",
      planList: [
        {
          planNo: "",
          planName:
            "【室数限定36時間ステイ】8：00～翌20：00の36時間滞在可能！　■アパは映画もアニメも見放題■",
          checkInTime: "15:00",
          checkOutTime: "20:00",
          roomList: [
            {
              roomNo: "",
              roomName: "スタンダードルーム 2名利用 【禁煙室】",
              roomPrice: 4000,
            },
          ],
        },
      ],
    },
    {
      hotelNo: "345754",
      hotelName: "アインズ・イン梅田東",
      prefNo: "270000",
      prefName: "大阪府",
      regionNo: "272000",
      regionName: "大阪駅・梅田駅・福島・淀屋橋・本町",
      planList: [
        {
          planNo: "",
          planName:
            "【室数限定36時間ステイ】8：00～翌20：00の36時間滞在可能！　■アパは映画もアニメも見放題■",
          checkInTime: "15:00",
          checkOutTime: "20:00",
          roomList: [
            {
              roomNo: "",
              roomName: "スタンダードルーム 2名利用 【禁煙室】",
              roomPrice: 4000,
            },
          ],
        },
      ],
    },
    {
      hotelNo: "363847",
      hotelName: "ホテルグレイスリー大阪なんば",
      prefNo: "270000",
      prefName: "大阪府",
      regionNo: "272900",
      regionName: "心斎橋・なんば・四ツ橋",
      planList: [
        {
          planNo: "",
          planName:
            "【室数限定36時間ステイ】8：00～翌20：00の36時間滞在可能！　■アパは映画もアニメも見放題■",
          checkInTime: "15:00",
          checkOutTime: "20:00",
          roomList: [
            {
              roomNo: "",
              roomName: "スタンダードルーム 2名利用 【禁煙室】",
              roomPrice: 4000,
            },
          ],
        },
      ],
    },
    {
      hotelNo: "363847",
      hotelName: "ホテルグレイスリー大阪なんば",
      prefNo: "270000",
      prefName: "大阪府",
      regionNo: "272900",
      regionName: "心斎橋・なんば・四ツ橋",
      planList: [
        {
          planNo: "",
          planName:
            "【室数限定36時間ステイ】8：00～翌20：00の36時間滞在可能！　■アパは映画もアニメも見放題■",
          checkInTime: "15:00",
          checkOutTime: "20:00",
          roomList: [
            {
              roomNo: "",
              roomName: "スタンダードルーム 2名利用 【禁煙室】",
              roomPrice: 4000,
            },
          ],
        },
      ],
    },
    {
      hotelNo: "363847",
      hotelName: "ホテルグレイスリー大阪なんば",
      prefNo: "270000",
      prefName: "大阪府",
      regionNo: "272900",
      regionName: "心斎橋・なんば・四ツ橋",
      planList: [
        {
          planNo: "",
          planName:
            "【室数限定36時間ステイ】8：00～翌20：00の36時間滞在可能！　■アパは映画もアニメも見放題■",
          checkInTime: "15:00",
          checkOutTime: "20:00",
          roomList: [
            {
              roomNo: "",
              roomName: "スタンダードルーム 2名利用 【禁煙室】",
              roomPrice: 4000,
            },
          ],
        },
      ],
    },
    {
      hotelNo: "363847",
      hotelName: "ホテルグレイスリー大阪なんば",
      prefNo: "270000",
      prefName: "大阪府",
      regionNo: "272900",
      regionName: "心斎橋・なんば・四ツ橋",
      planList: [
        {
          planNo: "",
          planName:
            "【室数限定36時間ステイ】8：00～翌20：00の36時間滞在可能！　■アパは映画もアニメも見放題■",
          checkInTime: "15:00",
          checkOutTime: "20:00",
          roomList: [
            {
              roomNo: "",
              roomName: "スタンダードルーム 2名利用 【禁煙室】",
              roomPrice: 4000,
            },
          ],
        },
      ],
    },
  ],
};

// const regions = ["大阪駅・梅田駅・福島・淀屋橋・本町", "心斎橋・なんば・四ツ橋"]

const HotelListPage = () => {
  // stateから検索情報を取り出す
  const { stayDate, stayCount, personNum } = useContext(SearchContext);
  const searchInfo = {
    stayYear: stayDate.getFullYear(),
    stayMonth: stayDate.getMonth() + 1,
    stayDay: stayDate.getDate(),
    dayofweek: stayDate.getDay(),
    stayCount: stayCount,
    prefecture: "大阪府",
    personNum: personNum,
  };
  console.log(searchInfo);
  const searchParam = {
    stayYear: stayDate.getFullYear(),
    stayMonth: stayDate.getMonth() + 1,
    stayDay: stayDate.getDate(),
    stayCount: stayCount,
    adultNum: personNum,
  };

  // ページを読み込んだときにAPI呼び出しをする
  // ポーリングして結果を待つ処理も必要
  // あとでNavBarの検索ボタンを押したときも呼び出したい
  useEffect(() => {
    const payload = {
      // "input": "{\"stayYear\": 2022, \"stayMonth\": 1, \"stayDay\": 8, \"stayCount\": 1, \"adultNum\": 2}"
      input: JSON.stringify(searchParam),
    };
    console.log(payload);
    const describePayload = {
      executionArn:
        "arn:aws:states:ap-northeast-1:375348692286:execution:sfn-late-checkout:64f6edad-7458-4e6c-b339-9e3cbbbd2936",
    };
    // const targetUrl = `${process.env.REACT_APP_API_ENDPOINT}/search`;
    const targetUrl = `${process.env.REACT_APP_API_ENDPOINT}/search/status`;
    console.log(targetUrl);

    axios
      .post(targetUrl, describePayload)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar2></NavBar2>
      <div className="container flex flex-col mt-16 md:mt-20">
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
          <HotelList
            hotels={hotelDB.result}
            searchInfo={searchInfo}
            className="mt-5"
          />
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
        <Footer></Footer>
      </div>
    </div>
  );
};

export default HotelListPage;
