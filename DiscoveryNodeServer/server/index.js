// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

const DiscoveryV1 = require('ibm-watson/discovery/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const discovery = new DiscoveryV1({
  version: '2018-12-03',
  authenticator: new IamAuthenticator({
    apikey: 'umf4q-OA2qkJvgWZhkeLe8e0Q8vsCufrJgmEu0ocbfxu',
  }),
  serviceUrl: 'https://api.eu-gb.discovery.watson.cloud.ibm.com/instances/ee277a06-704d-45b4-a204-9dff9216fc9a',
});

var queryParams = {
  environmentId: 'system',
  collectionId: 'news-en',
  naturalLanguageQuery: "",  //this is the query that is passed to the discovery service
  passages: true,
  count: 3,
  passagesCharacters: 200,
  deduplicate: false,
};

var auto_complete_prams = {
  environmentId: 'system',
  collectionId: 'news-en',
  count: 3,
  prefix: "",  //this is the query that is passed to the discovery service
};



//function that takes in a string as natural language query and then send the natural language query to the discovery service and returns the response
async function getResponse(query) {
  queryParams.naturalLanguageQuery = query;
  const response = await discovery.query(queryParams);
  return response;
}


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