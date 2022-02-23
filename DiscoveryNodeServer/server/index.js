// server/index.js

const express = require("express");

let Discovery_url = "https://api.eu-gb.discovery.watson.cloud.ibm.com/instances/ee277a06-704d-45b4-a204-9dff9216fc9a";
let API_key = "umf4q-OA2qkJvgWZhkeLe8e0Q8vsCufrJgmEu0ocbfxu";

let collection_id = "665e9d8b-ff19-4ad8-93fd-eddee01884fe";
let configuration_id = "2883717b-0f6c-4aa5-852b-7c9f6c3d20b2";
let environment_id = "b2143037-e1b7-4a25-9273-da6a00d6beb1";

const PORT = process.env.PORT || 80;

const app = express();

const DiscoveryV1 = require('ibm-watson/discovery/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const discovery = new DiscoveryV1({
  version: '2019-04-30',
  authenticator: new IamAuthenticator({
    apikey: API_key,
  }),
  serviceUrl: Discovery_url,
});

//function to get send a query and get result from discovery api
async function get_result(query) {
  let result = await discovery.query({
    environmentId: environment_id,
    collectionId: collection_id,
    query: query,
    passages: true,
    count: 5,
    return: 'highlight,passages',
  }).catch(err => {
    console.log(err);
  });
  return result;
}

//function to get auto complete suggestions for a prefix using getAutocompletions()
async function get_autocomplete(prefix) {
  let result = await discovery.getAutocompletions({
    environmentId: environment_id,
    collectionId: collection_id,
    prefix: prefix,
    count: 5,
  }).catch(err => {
    console.log(err);
  });
  return result;
}




app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });
  
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

