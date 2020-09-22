export default {
  s3: {
    REGION: 'ap-southeast-1',
    BUCKET: 'notes-serverless-fathisiddiqi',
  },
  apiGateway: {
    REGION: 'us-east-1',
    URL: 'https://t76w6owhd8.execute-api.us-east-1.amazonaws.com/{stage_name}/',
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_6mFR1QKqb',
    APP_CLIENT_ID: '6atq3jmsut5ob26526sfjbe1e6',
    IDENTITY_POOL_ID: 'us-east-1_6mFR1QKqb',
  },
}
