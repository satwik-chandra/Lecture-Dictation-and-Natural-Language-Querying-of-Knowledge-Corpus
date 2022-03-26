// server/index.js
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

const projectID = '0a77a092-4243-4c59-a8fb-0bf9cd0a6678'; 

const DiscoveryV2 = require('ibm-watson/discovery/v2');
const { IamAuthenticator } = require('ibm-watson/auth');

const discovery = new DiscoveryV2({
  version: '2020-08-30',
  authenticator: new IamAuthenticator({
    apikey: 'WIgvKeM8B3zcEEgVwX99IdjYUlKv2eRzhQh4qi6bqiRe',
  }),
  serviceUrl: 'https://api.eu-gb.discovery.watson.cloud.ibm.com/instances/881f601a-c215-493a-bd7e-1f94b5ce8f53',
});

var queryParams = {
  projectId: projectID,
  naturalLanguageQuery: "",  //this is the query that is passed to the discovery service
};

var auto_complete_prams = {
  projectId: projectID,
  count: 7,
  prefix: "",  //this is the query that is passed to the discovery service
};



//function that takes in a string as natural language query and then send the natural language query to the discovery service and returns the response
async function getResponse(query) {
  queryParams.naturalLanguageQuery = query;
  const response = await discovery.query(queryParams);
  return response;
}

   app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3005');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
}); 

//API endpoint that uses getResponse function to get the response for a natural language query
app.get("/api/discovery/query/:query", async (req, res) => {
  const query = req.params.query;
  const response = await getResponse(query);
  res.json(response);
});


//API endpoint that takes in a string as prefix and then send the prefix to the discovery service and returns the response(NOT WORKING)
app.get("/api/autocomplete/prefix/:prefix", async (req, res) => {
  auto_complete_prams.prefix = req.params.prefix;
  const response = await discovery.getAutocompletion(auto_complete_prams);
  res.json(response);
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});