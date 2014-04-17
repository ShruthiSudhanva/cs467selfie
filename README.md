cs467selfie
===========

Download json file

Run the script location_history_json_converter.py inside folder "python" with the downloaded file

python python/location_history_json_converter.py inputjson outputjson -f json

This will filter out unwanted data from the json

There is another step of modifying the json to fit our vis. 

python python/epoch_to_datetime.py User2 json_from_previous_step

The username has to be "User2" and "User3"

This one's output will be in a "data.js" file in the same folder.

Next, we need to append this into the js/data.js file

I have my data already in that file. Copy paste the data into the variable (append to mine)


Let me know if you have any problems!