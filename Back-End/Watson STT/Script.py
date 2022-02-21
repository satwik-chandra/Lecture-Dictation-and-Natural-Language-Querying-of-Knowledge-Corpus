from ibm_watson import SpeechToTextV1
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator

authenticator = IAMAuthenticator('QbYLYo-ZaBElYCTnvAVxgC7Qzzl1jqDID0Jsyp4J6eoH')
speech_to_text = SpeechToTextV1(
    authenticator=authenticator
)

speech_to_text.set_service_url('https://api.eu-gb.speech-to-text.watson.cloud.ibm.com/instances/871ebfc6-583e-4caa-9fa3-c2f55df33c4e')
