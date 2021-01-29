var express = require('express');
var router = express.Router();
const request  = require('request');

const headers = {
  'Content-Type': 'application/json'
}

router.get('/summary', function(req, res, next) {
  const options = {
    headers: headers,
    url : 'https://api.quarantine.country/api/v1/summary/latest',
    json: true
  }
  request(options, (error, response, body) => {
    if (body) {
      res.json(body);
    } else {
      res.json({});
    }
  });
});

router.get('/spots', function(req, res, next) {
  const options = {
    headers: headers,
    url : 'https://api.quarantine.country/api/v1/spots/summary',
    json: true
  }
  request(options, (error, response, body) => {
    if (body) {
      res.json(body);
    } else {
      res.json({});
    }
  });
});

router.get('/news', function(req, res, next) {
  const options = {
    headers: headers,
    url : 'https://tools.cdc.gov/api/v2/resources/media',
    json: true
  }
  request(options, (error, response, body) => {
    if (body) {
      console.log(body)
      res.json(body.results);
    } else {
      res.json({});
    }
  });
});

router.get('/geojson', function(req, res, next) {
  const options = {
    headers: headers,
    url : 'https://api.quarantine.country/geojson.json',
    json: true
  }
  request(options, (error, response, body) => {
    if (body) {
      res.json(body);
    } else {
      res.json({});
    }
  });
});

module.exports = router;