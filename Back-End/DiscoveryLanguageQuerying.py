from ibm_watson import DiscoveryV1
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator
from ibm_watson import ApiException
import json

API_key = "umf4q-OA2qkJvgWZhkeLe8e0Q8vsCufrJgmEu0ocbfxu"
Collection_ID = "665e9d8b-ff19-4ad8-93fd-eddee01884fe" #to be changed to teh lecture transcripts collection ID
Configuration_ID = "2883717b-0f6c-4aa5-852b-7c9f6c3d20b2" #to be changed to the lecture transcripts configuration ID
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