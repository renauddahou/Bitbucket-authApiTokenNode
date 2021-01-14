**Get Token JWT NODE**

---

## Instructions

1. npm i
2. nodemon src/index.js OR node src/index.js


##CURL

GET TOKEN
curl --location --request POST 'http://localhost:5000/auth-token/api/v1/getToken' \
--header 'Content-Type: application/json' \
--data-raw '{
	"apiKey":"BYsCFqsFGdmSuVJmrLMav5FxB3dtsctUBSU4Qw72QPJ3dvKbwU"
}'

VALIDATE TOKEN

curl --location --request GET 'http://localhost:5000/auth-token/api/v1/validateToken' \
--header 'Content-Type: application/json' \
--data-raw '{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NBcGkiOnsia2V5IjoiQllzQ0Zxc0ZHZG1TdVZKbXJMTWF2NUZ4QjNkdHNjdFVCU1U0UXc3MlFQSjNkdktid1UiLCJvcmlnZW4iOiJXRUIifSwiaWF0IjoxNjEwNjM2Njc4LCJleHAiOjE2MTA3MjMwNzh9.umJFmqUNuwmG-NV8W_Iot6XElAeWyw0x00Nj8RA_lJ4"
}'