**Get Token JWT NODE**

---

## Instructions
```sh
1. npm i
2. nodemon src/index.js OR node src/index.js
```

** CURL

**GET TOKEN
```sh
curl --location --request POST 'http://localhost:5000/api/v1/auth-token/getToken' \
--header 'Content-Type: application/json' \
--data-raw '{
	"apiKey":"BYsCFqsFGdmSuVJmrLMav5FxB3dtsctUBSU4Qw72QPJ3dvKbwU"
}'
```
**VALIDATE TOKEN

```sh
curl --location --request GET 'http://localhost:5000/api/v1/auth-token/validateToken' \
--header 'Content-Type: application/json' \
--data-raw '{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NBcGkiOnsia2V5IjoiQllzQ0Zxc0ZHZG1TdVZKbXJMTWF2NUZ4QjNkdHNjdFVCU1U0UXc3MlFQSjNkdktid1UiLCJvcmlnZW4iOiJXRUIifSwiaWF0IjoxNjEwNjM2Njc4LCJleHAiOjE2MTA3MjMwNzh9.umJFmqUNuwmG-NV8W_Iot6XElAeWyw0x00Nj8RA_lJ4"
}'
```

**Swagger

```
http://localhost:5000/api/v1/auth-token/docs/
```