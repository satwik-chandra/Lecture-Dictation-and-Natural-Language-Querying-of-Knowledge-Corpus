from ibm_watson import DiscoveryV1
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator
from ibm_watson import ApiException

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



