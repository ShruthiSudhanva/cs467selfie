#!/usr/bin/python

import time
import json
import sys

#Add username/id to json

if __name__ == '__main__':
    if len(sys.argv)!=3:
        print "Usage: python epoch_to_datetime.py <username> <inputjsonfile>"
        sys.exit(0)
    username = sys.argv[1]
    inputjsonfile = sys.argv[2]
    json_data = open(inputjsonfile)
    data = json.load(json_data)["data"]["items"]
    output_data = dict()
    output_data[username] = dict()
    new_data = output_data[username]
    for entry in data:
        timestamp = entry['timestampMs']/1000
        date = time.strftime('%Y-%m-%d', time.localtime(timestamp))
        hour = time.strftime("%H", time.localtime(timestamp))
        location = dict()
        location['longitude'] = entry['longitude']
        location['latitude'] = entry['latitude']
        if date in new_data:
            if hour in new_data[date]:
                new_data[date][hour].append(location)
            else:
                new_data[date][hour] = [location]
        else:
            new_data[date] = dict()
            new_data[date][hour] = [location]
    output = open("data.js","w")
    json.dump(output_data, output, indent=2)
    output.close()
    json_data.close()