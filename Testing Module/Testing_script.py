# import libraries for plotting
import matplotlib.pyplot as plt
from ibm_watson import ApiException
from ibm_watson import DiscoveryV2
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator
import json
from datetime import date

API_KEY = 'WIgvKeM8B3zcEEgVwX99IdjYUlKv2eRzhQh4qi6bqiRe'
DISCOVERY_URL = 'https://api.eu-gb.discovery.watson.cloud.ibm.com/instances/881f601a-c215-493a-bd7e-1f94b5ce8f53'
PROJECT_ID = '09bc2bfb-2a8e-4795-9337-3c372422c40e'

NaturalLanguageQuery = "Who is Margaret?"

authenticator = IAMAuthenticator(API_KEY)
discovery = DiscoveryV2(
    version='2020-08-30',
    authenticator=authenticator
)

discovery.set_service_url(DISCOVERY_URL)
###############################################################################################################################
#FOR OMAID PART 1

list_of_queries = ["What is software engineering?",
                   "Who is Margaret Hamilton?",
                   "Is software seen as an industrial process?",
                   "Did Margaret Hamilton help in the moon landing?",
                   "What is the sweetback project?",
                   "What is software?",
                   "Did Mark Andriessen create netscape?",
                   "Do software engineers build their own tools?",
                   "Is there an exam in this module",
                   "What is agile development?",
                   "What is the textbook for this module?",
                   "What is Git?",
                   "Which IDE should I use?",
                   "Is VIM a good editor?",
                   "If I am on Mac, should I use Xcode?",
                   "Did programming in C exist in 1986?",
                   "Will these high level languages be replaced in the next few years?"]

list_of_keywords = ["software engineering",
                    "Margaret Hamilton",
                    "industrial",
                    "moon landing",
                    "sweetback project",
                    "software",
                    "netscape",
                    "engineers",
                    "exam",
                    "agile",
                    "textbook",
                    "Git",
                    "IDE",
                    "VIM",
                    "Mac",
                    "1986",
                    "high level languages"]

############################################################################################################################################################

list_of_accuracies = []

for index in range(len(list_of_queries)):
    NaturalLanguageQuery = list_of_queries[index]
    keyword = list_of_keywords[index]
    try:
        response = discovery.query(
            project_id=PROJECT_ID,
            count=10,
            return_=["Header", "TEXT", "TIME_STAMP"],

            natural_language_query=NaturalLanguageQuery
        ).get_result()

        text_list = []

        for item in response["results"]:
            result = item["TEXT"]
            text_list.append(result)

        totalItems = len(text_list)

        counter = 0

        for item in text_list:
            if((item[0].find(keyword) != -1) or (item[0].find(keyword.lower()) != -1)):
                counter += 1
            

        # print accuracy percent
        accuracy = (counter/totalItems)*100

        list_of_accuracies.append(accuracy)

        #print(json.dumps(response, indent=2))

    except ApiException as ex:
        print("Method failed with status code " + str(ex.code) + ": " + ex.message)
        
###############################################################################################################################################################3
#FOR OMAID PART 2

total_accuracies = 0

for x in list_of_accuracies:
    if x != 0:
        total_accuracies += 1


mean_accuracy = sum(list_of_accuracies)/total_accuracies
print("Mean accuracy: " + str(mean_accuracy))

with open("AccuracyLOG.txt",'r+',encoding = 'utf-8') as f:
    #got to the end of the file 
    f.seek(0,2)
    #write the data
    f.write("\n" + str(date.today()) + " Mean accuracy: " + str(mean_accuracy))
    
###############################################################################################################################################################
    
   