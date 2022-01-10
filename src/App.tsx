import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopPage from "./pages/TopPage";
import HotelListPage from "./pages/HotelListPage";

// 検索ボックスのContext
export const SearchContext = createContext({
  stayDate: new Date(),
  handleStayDate: (date: Date) => {},
  stayCount: 1,
  handleStayCount: (event: any) => {},
  personNum: 2,
  handlePersonNum: (event: any) => {},
  isLoading: false,
  handleIsLoading: (bool: boolean) => {},
});

function App() {
  // 検索ボックスの入力値を保持
  // datepicker
  const initialDate = new Date();
  const [stayDate, setStayDate] = useState(initialDate);
  const handleStayDate = (date: Date) => {
    setStayDate(date);
  };
  // 宿泊日数選択
  const [stayCount, setStayCount] = useState(1);
  const handleStayCount = (event: any) => {
    setStayCount(event.target.value);
  };
  // 宿泊人数（大人のみ）
  const [personNum, setPersonNum] = useState(2);
  const handlePersonNum = (event: any) => {
    setPersonNum(event.target.value);
  };
  // ローディングステートの管理
  const [isLoading, setIsLoading] = useState(false);
  const handleIsLoading = (bool: boolean) => {
    setIsLoading(bool);
  };

  return (
    <SearchContext.Provider
      value={{
        stayDate,
        handleStayDate,
        stayCount,
        handleStayCount,
        personNum,
        handlePersonNum,
        isLoading,
        handleIsLoading,
      }}
    >
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact>
              <TopPage />
            </Route>
            <Route path="/hotels">
              <HotelListPage></HotelListPage>
            </Route>
          </Switch>
        </div>
      </Router>
    </SearchContext.Provider>
  );
}

export default App;
