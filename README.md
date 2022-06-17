# Currency-Converter

## Description

Simple API that converts currency amounts, using a third party API for currency data.
The data is updating every 6 hours.

## How To Use

- clone the repository
- run `npm install`
- create .env file at the root directory that contains the following:

  ```text
    MONGODB_URI=your_db_uri
    ENV=dev
    apikey=your_conversion_API_key

  ```

- run `npm run start`
- use the endpoit: `/api/convert/:fromCurrency/:toCurrency/:amount`
- for manualy updating the data do a get request to: `/api/updatedb`
- to run tests: `npm run test`
