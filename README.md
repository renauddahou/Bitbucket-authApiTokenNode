**Get Token JWT NODE**

---

## Instructions

1. npm i
2. nodemon src/index.js OR node src/index.js


##CURL

curl --location --request POST 'http://localhost:5000/auth-token/api/v1/getToken' \
--header 'Content-Type: application/json' \
--data-raw '{
	"apiKey":"BYsCFqsFGdmSuVJmrLMav5FxB3dtsctUBSU4Qw72QPJ3dvKbwU"
}'