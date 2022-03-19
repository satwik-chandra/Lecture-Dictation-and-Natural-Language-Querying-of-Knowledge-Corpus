import json
from os.path import join, dirname
from ibm_watson import SpeechToTextV1
from ibm_watson.websocket import RecognizeCallback, AudioSource

from dotenv import load_dotenv
load_dotenv()
import os

url = os.getenv('URL')
key = os.getenv('KEY')
##########
# IBM CLOUD: Use the following code only to
# authenticate to IBM Cloud.
##########

from ibm_cloud_sdk_core.authenticators import IAMAuthenticator
authenticator = IAMAuthenticator(key)
speech_to_text = SpeechToTextV1(
    authenticator=authenticator
)
speech_to_text.set_service_url(url)

##########
# IBM CLOUD PAK FOR DATA: Use the following code
# only to authenticate to IBM Cloud Pak for Data.
##########

# from ibm_cloud_sdk_core.authenticators import CloudPakForDataAuthenticator
# authenticator = CloudPakForDataAuthenticator(
#     '{username}',
#     '{password}',
#     'https://{cpd_cluster_host}{:port}'
# )
# speech_to_text = SpeechToTextV1(
#     authenticator=authenticator
# )
# speech_to_text.set_service_url('{url}')

class MyRecognizeCallback(RecognizeCallback):
    def __init__(self):
        RecognizeCallback.__init__(self)

    def on_data(self, data):
        print(json.dumps(data, indent=2))
        with open ('transcript.json', 'w') as f:
            json.dump(data, f, indent=2)

    def on_error(self, error):
        print('Error received: {}'.format(error))

    def on_inactivity_timeout(self, error):
        print('Inactivity timeout: {}'.format(error))

myRecognizeCallback = MyRecognizeCallback()

with open(join(dirname(__file__), './.', 'GithubAPIPython5Mins.flac'),
              'rb') as audio_file:
    audio_source = AudioSource(audio_file)
    speech_to_text.recognize_using_websocket(
        audio=audio_source,
        content_type='audio/flac',
        recognize_callback=myRecognizeCallback,
        model='en-US_BroadbandModel',
        language_customization_id='22dafce9-7d1d-47f1-8cb3-b106e7f2ea7b',
        customization_weight=0.3,
        timestamps=True,
        end_of_phrase_silence_time=100
        )