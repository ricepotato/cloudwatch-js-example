import * as AWS from "@aws-sdk/client-ssm";

const ssmClient = new AWS.SSM({
  apiVersion: "2014-11-06",
  region: "ap-northeast-2",
});

const param = ssmClient.getParameter({
  Name: "/products/abcwallet_web/dev/event/stolantern2023/contract_address",
});
param.then((data) => console.log(data));

const params = ssmClient.getParametersByPath({
  Path: "/products/abcwallet_web/",
  Recursive: true,
});
params.then((data) => console.log(data));
