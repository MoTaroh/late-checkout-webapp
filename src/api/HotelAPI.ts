import axios from "axios";

const sleep = (waitTime: number) =>
  new Promise((resolve) => setTimeout(resolve, waitTime));

export const callHotelsApi = async (
  stayDate: Date,
  stayCount: number,
  adultNum: number
) => {
  const searchParam = {
    stayYear: stayDate.getFullYear(),
    stayMonth: stayDate.getMonth() + 1,
    stayDay: stayDate.getDate(),
    stayCount: stayCount,
    adultNum: adultNum,
  };
  const executePayload = {
    input: JSON.stringify(searchParam),
  };
  console.log(executePayload);

  const executeUrl = `${process.env.REACT_APP_API_ENDPOINT}/search`;
  const describeUrl = `${process.env.REACT_APP_API_ENDPOINT}/search/status`;
  console.log(executeUrl);

  try {
    const executeRes = await axios.post(executeUrl, executePayload);
    console.log(executeRes);
    const execiteData = executeRes.data;

    const describePayload = {
      executionArn: execiteData.executionArn,
    };

    await sleep(3000);
    while (true) {
      let describeRes = await axios.post(describeUrl, describePayload);
      console.log(describeRes);
      let describeData = await describeRes.data;
      console.log(describeData);

      if (describeData.output) {
        console.log(describeData.output);

        const output = JSON.parse(describeData.output);
        console.log(output);
        const body = JSON.parse(output.body);

        return body.items;
      }
      if (describeData.status === "FAILED") {
        console.log("FAILED.");
        return [];
      }
      await sleep(10000);
    }
  } catch (error) {
    console.log(error);
  }
};