import React, { useState } from 'react';
import AWS from 'aws-sdk';

const AwsS3Page = () => {
  const [bucketContents, setBucketContents] = useState([]);

  const listObjects = async () => {
    AWS.config.update({ region: 'MY_AWS_REGION' });

    const s3 = new AWS.S3();

    const params = {
      Bucket: 'MY_S3_BUCKET_NAME',
    };

    try {
      const data = await s3.listObjectsV2(params).promise();
      setBucketContents(data.Contents);
    } catch (error) {
      console.error('Error listing objects: ', error);
    }
  };

  return (
    <div>
      <h1>AWS S3 Integration with Next.js</h1>
      <button onClick={listObjects}>List Objects</button>
      <ul>
        {bucketContents.map((object) => (
          <li key={object.Key}>{object.Key}</li>
        ))}
      </ul>
    </div>
  );
};

export default AwsS3Page;
