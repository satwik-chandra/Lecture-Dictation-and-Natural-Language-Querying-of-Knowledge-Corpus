from ibm_watson import DiscoveryV1
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator
from ibm_watson import ApiException
import json

API_key = "umf4q-OA2qkJvgWZhkeLe8e0Q8vsCufrJgmEu0ocbfxu"
Collection_ID = "426536f5-e1a3-4609-b0e7-176851a7a148" #to be changed to teh lecture transcripts collection ID
Configuration_ID = "d0155eb1-6897-4759-8fd2-ac657e03b007" #to be changed to the lecture transcripts configuration ID
Environment_ID = "b2143037-e1b7-4a25-9273-da6a00d6beb1" #to be changed to the lecture transcripts environment ID


authenticator = IAMAuthenticator(API_key)
discovery = DiscoveryV1(
    version='2019-04-30',
    authenticator=authenticator
)

discovery.set_service_url('https://api.eu-gb.discovery.watson.cloud.ibm.com/instances/ee277a06-704d-45b4-a204-9dff9216fc9a')



def nlp_query(query):
    try:
        print("query is: ",query)
        response = discovery.query(environment_id=Environment_ID,
                                   collection_id=Collection_ID,
                                   natural_language_query=query,
                                   passages=True,
                                   count=5,
                                   passages_count=5,
                                   passages_characters=5000,
                                   highlight=True,
                                   deduplicate=True,
                                   deduplicate_field='title'
                                   ).get_result()
        return response
    except ApiException as ex:
        print("Method failed with status code " + str(ex.code) + ": " + ex.message)
        return "Error"


#Not working: sort it out later

""" 
def autocomplete_query(term):
    try:
        response = discovery.get_autocompletion(environment_id = Environment_ID,collection_id = Collection_ID,prefix = term)
        return response
    except ApiException as ex:
        print("Method failed with status code " + str(ex.code) + ": " + ex.message)
        return "Error"
 """