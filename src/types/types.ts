export type Hotel = {
  hotelNo: number;
  hotelName: string;
  regionName: string;
  planList: Array<Plan>;
};

export type Plan = {
  planName: string;
  checkInTime: string;
  checkOutTime: string;
  roomList: Array<Room>;
};

export type Room = {
  roomName: string;
  roomURL: string;
  roomPrice: string;
};

// type for cookies
type handleCookie = (key: string, value: string, options?: object) => void;

export type CookieOption = {
  cookies: any;
  handler: handleCookie;
};
