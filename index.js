import * as AWS from "@aws-sdk/client-cloudwatch-logs";
import dotenv from "dotenv";
dotenv.config();

const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY;
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
const AWS_REGION = process.env.AWS_REGION;
const AWS_LOGGROUP_NAME = process.env.AWS_LOGGROUP_NAME;
const AWS_LOGSTREAM_NAME = process.env.AWS_LOGSTREAM_NAME;

const client = new AWS.CloudWatchLogs({ region: AWS_REGION });

console.log("AWS_REGION", AWS_REGION);
console.log("AWS_LOGGROUP_NAME", AWS_LOGGROUP_NAME);
console.log("AWS_LOGSTREAM_NAME", AWS_LOGSTREAM_NAME);

const params = {
  logGroupName: AWS_LOGGROUP_NAME,
  logStreamName: AWS_LOGSTREAM_NAME,
  logEvents: [
    {
      timestamp: Date.now(),
      message: "This is a log message1",
    },
    {
      timestamp: Date.now(),
      message: "This is a log message2",
    },
  ],
};

client.putLogEvents(params, function (err, data) {
  if (err) {
    console.log(err, err.stack);
  } else {
    console.log(data);
  }
});
