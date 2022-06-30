import axios from "axios";
import { CookieOption } from "../types/types";
import { createCacheKey, isCached } from "../utils/cookie";
import { sleep } from "../utils/sleep";

type executePayload = {
  input: string;
};
type describePayload = {
  executionArn: string;
};
class HotelApi {
  MAX_RETRY = 12;
  SLEEP_COUNT = 5 * 1000;

  executeUrl: string;
  describeUrl: string;
  executePayload: executePayload;
  describePayload: describePayload;

  constructor() {
    this.executeUrl = `${process.env.REACT_APP_API_ENDPOINT}/search`;
    this.describeUrl = `${process.env.REACT_APP_API_ENDPOINT}/search/status`;
    this.executePayload = {
      input: "",
    };
    this.describePayload = {
      executionArn: "",
    };
  }

  setExecutePayload(payload: object) {
    this.executePayload.input = JSON.stringify(payload);
  }
  setDescribePayload(executionArn: string) {
    this.describePayload.executionArn = executionArn;
  }

  async callExecuteApi() {
    try {
      const executeRes = await axios.post(this.executeUrl, this.executePayload);
      const executeData = executeRes.data;

      return executeData.executionArn;
    } catch (error) {
      console.log(`HotelApi.callExecuteApi: ${JSON.stringify(error)}`);

      return "";
    }
  }

  async callDescribeApi() {
    if (this.describePayload.executionArn === "") {
      console.log("payload for decribeApi is not set");
      return [];
    }

    let retryCount = 0; // 1 minute
    while (retryCount < this.MAX_RETRY) {
      console.log(`try count: ${retryCount + 1}`);
      let describeData;
      try {
        const describeRes = await axios.post(
          this.describeUrl,
          this.describePayload
        );
        describeData = await describeRes.data;
      } catch (error) {
        console.log(`HotelApi.callDescribeApi: ${JSON.stringify(error)}`);
      }

      if (describeData.output) {
        const output = JSON.parse(describeData.output);
        const body = JSON.parse(output.body);

        return body.items;
      }
      if (describeData.status === "FAILED") {
        console.log("HotelApi.callDescribeApi: FAILED");

        return [];
      }
      retryCount += 1;
      await sleep(this.SLEEP_COUNT);
    }
  }
}

export const callHotelsApi = async (
  stayDate: Date,
  stayCount: number,
  adultNum: number,
  cookieOption: CookieOption
) => {
  const searchParam = {
    stayYear: stayDate.getFullYear(),
    stayMonth: stayDate.getMonth() + 1,
    stayDay: stayDate.getDate(),
    stayCount: stayCount,
    adultNum: adultNum,
  };
  // check cookie
  const searchKey = createCacheKey(searchParam);

  const hotelApi = new HotelApi();
  let executionArn;

  if (isCached(searchKey, cookieOption.cookies)) {
    console.log("cache found!");
    // get executionArn from cookie
    executionArn = cookieOption.cookies[searchKey];
  } else {
    console.log("cache not found");
    // search hotels from scratch
    hotelApi.setExecutePayload(searchParam);
    executionArn = await hotelApi.callExecuteApi();
  }
  const option = {
    path: "/",
    maxAge: 60 * 60 * 24,
  };
  cookieOption.handler(searchKey, executionArn, option);
  hotelApi.setDescribePayload(executionArn);

  return await hotelApi.callDescribeApi();
};
