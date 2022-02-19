from ibm_watson import DiscoveryV1
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator
from ibm_watson import ApiException
import json

authenticator = IAMAuthenticator('umf4q-OA2qkJvgWZhkeLe8e0Q8vsCufrJgmEu0ocbfxu')
discovery = DiscoveryV1(
    version='2019-04-30',
    authenticator=authenticator
)

discovery.set_service_url('https://api.eu-gb.discovery.watson.cloud.ibm.com/instances/ee277a06-704d-45b4-a204-9dff9216fc9a')

""" 
********WRAPPER FOR ALL FUNCTIONS(To Ensure error handling during coding)*********


try:
    
except ApiException as ex:
  print("Method failed with status code " + str(ex.code) + ": " + ex.message)


  
"""


#get the list of all collections in a particular environment (NAME SHOULD BE REPLACED BY THE ENBNVIRONMENT NAME)

""" environments = discovery.list_environments().get_result()
print(json.dumps(environments, indent=2))

system_environments = [x for x in environments['environments'] if x['name'] == 'byod']
system_environment_id = system_environments[0]['environment_id']

collections = discovery.list_collections(system_environment_id).get_result()
system_collections = [x for x in collections['collections']]
print(json.dumps(system_collections, indent=2)) """


#GET THE ENVIRONMENT INFORMATION

""" environment_info = discovery.get_environment(
    'b2143037-e1b7-4a25-9273-da6a00d6beb1').get_result()
print(json.dumps(environment_info, indent=2)) """


#list fields across collections

""" fields = discovery.list_fields('b2143037-e1b7-4a25-9273-da6a00d6beb1', ['426536f5-e1a3-4609-b0e7-176851a7a148']).get_result()
print(json.dumps(fields, indent=2)) """

#list all collections in an environment

""" collections = discovery.list_collections('b2143037-e1b7-4a25-9273-da6a00d6beb1').get_result()
print(json.dumps(collections, indent=2)) """


#get the collection details

""" collection = discovery.get_collection(
    'b2143037-e1b7-4a25-9273-da6a00d6beb1', 
    '426536f5-e1a3-4609-b0e7-176851a7a148').get_result()
print(json.dumps(collection, indent=2)) """





