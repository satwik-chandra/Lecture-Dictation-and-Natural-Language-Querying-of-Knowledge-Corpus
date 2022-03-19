import json 
import sys

from typing import List

args: List[str] = sys.argv

transcriptContent = ""

with open (args[1], 'r') as f:
    data = json.load(f)
    transcriptString = ''
    for results in data['results']:
        transcript = results['alternatives'][0]['transcript']
        timeArr = results['alternatives'][0]['timestamps'][0]
        time = timeArr[1]
        seconds =   int(time% 60) 
        minutes = int((time/60))
        if (seconds < 10):
            secFill='0'
        else:
            secFill=''
        if (minutes < 10):
            minFill='0'
        else:
            minFill=''
        transcriptString+=('\n[' +minFill+ str(minutes)+':'+ secFill+str(seconds)+']' + transcript)

    
dictionary = { 
              "Header" : args[2],
              "Link" : args[3],
              "Transcript" : transcriptString
            }
with open (args[4], 'w') as f:
    json.dump(dictionary, f, indent=2)