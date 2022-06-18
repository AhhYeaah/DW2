import { EventInterface } from './utils/interface';
import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

export async function sendMessage({ body }: { body: string }) {
  const s3 = new AWS.S3({
    region: 'us-east-1',
  });

  const { screenshot, type, comment }: EventInterface = JSON.parse(body);

  if (screenshot) {
    const buffer = Buffer.from(screenshot.replace(/^data:image\/\w+;base64,/, ''), 'base64');

    const data = {
      Key: `${type}-${uuidv4()}`,
      Body: buffer,
      Bucket: 's3-customers-screenshots-1234321',
      ContentEncoding: 'base64',
      ContentType: 'image/png',
    };

    await s3.upload(data).promise();
  }

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
  };
}
