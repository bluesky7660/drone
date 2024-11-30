// axios를 사용해 API 요청을 보내는 서버리스 함수 예시
const axios = require('axios');

exports.handler = async (event, context) => {
  try {
    const response = await axios.post(
      'https://api.daily.co/v1/rooms',
      {},
      {
        headers: {
          'Authorization': `Bearer ${process.env.DAILY_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ roomUrl: response.data.url }),
    };
  } catch (error) {
    console.error('방 생성 중 에러 발생:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: '방 생성 실패' }),
    };
  }
};
