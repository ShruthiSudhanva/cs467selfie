#!/usr/bin/python

import time
import json

if __name__ == '__main__':
    json_data = open("Location.json")
    data = json.load(json_data)["data"]["items"]
    new_data = dict()
    for entry in data:
        timestamp = entry['timestampMs']/1000
        date = time.strftime('%Y-%m-%d', time.localtime(timestamp))
        location = dict()
        location['longitude'] = entry['longitude']
        location['latitude'] = entry['latitude']
        if date in new_data:
            new_data[date].append(location)
        else:
            new_data[date] = [location]
    output = open("MapsLocation.json","w")
    json.dump(new_data, output, indent=2)
    output.close()
    json_data.close()