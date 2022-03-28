# import json libraries as json
import json
# import sys libraries as sys
import sys
# import os libraries as os
import os
# import shutil libraries as shutil
import shutil


# take a json file containing the header, link and transcript
# and return a json file containing the header, link and transcript where transcript is divided into individual paragraps seperated by new line
def divide_transcript(json_file):
    # open the json file
    with open(json_file, 'r') as f:
        # read the json file
        data = json.load(f)
        # get the transcript
        transcript = data['Transcript']
        # get the header
        header = data['Header']
        # get the link
        link = data['Link']
        # split the transcript into individual paragraps seperated by new line
        transcript_list = transcript.split('\n')
        # convert the lis ttrancript_list into a dictionary where the key of each entry is the timestamp at the start of each index in transcript_list and the value is the rest of the text in the transcript_list element
        transcript_dict = {}
        for i in range(len(transcript_list)):
            transcript_dict[transcript_list[i][1:6]] = transcript_list[i][7:]

        # for each element in transcript_list
        for element in transcript_list:
            # create a new json file
            new_json_file = json_file.replace('.json', '_edited.json')
            # create a new json file
            with open(new_json_file, 'w') as f:
                # create a dictionary
                new_data = {}
                # add the header, link and transcript to the dictionary
                new_data['Header'] = header
                new_data['Link'] = link
                new_data['Transcript'] = transcript_dict
                # write the dictionary to the json file
                json.dump(new_data, f)
    return new_json_file

# write a main function to do this again adn again for a list of jsons


def main():

    list_of_transcripts = ["C:\\Users\\Satwik Chandra\\Desktop\\Transcripts\\Lecture1IntroductionA.json",
                            "C:\\Users\\Satwik Chandra\\Desktop\\Transcripts\\Lecture2BuildingaToolChain.json",
                            "C:\\Users\\Satwik Chandra\\Desktop\\Transcripts\\Lecture_3_LCA_default.json",
                           "C:\\Users\\Satwik Chandra\\Desktop\\Transcripts\\Lecture2BuildingaToolChain.json",
                           "C:\\Users\\Satwik Chandra\\Desktop\\Transcripts\\Lecture6UnitTesting.json",
                           "C:\\Users\\Satwik Chandra\\Desktop\\Transcripts\\Lecture7AgileDevelopmentA.json",
                           "C:\\Users\\Satwik Chandra\\Desktop\\Transcripts\\Lecture7AgileDevelopmentB.json"]

    for transcript in list_of_transcripts:
        json_file = transcript
        # call the divide transcript function
        new_json_file = divide_transcript(json_file)
        # print the new json file
        print(new_json_file)


# run main function
if __name__ == '__main__':
    main()
