import csv
import json

with open('country_codes.json', 'r') as f:
    data_countrycodes = f.readlines()[0:249]

dictionary = {}
dictionary_reversed = {}

for row in data_countrycodes:
    python_list = []
    python_list_reversed = []
    splitted = row.split('"')
    code = splitted[3].strip()
    country = splitted[5].strip()
    python_list.append(country)
    dictionary[code] = python_list
    python_list_reversed.append(code)
    dictionary_reversed[country] = python_list_reversed


# convert  to json_list
json_list = json.dumps(dictionary)
# print json_list
# write json_list to file
with open('country_codes_converter.json', 'w') as outfile:
    json.dump(json_list, outfile)

# convert  to json_list
json_list_2 = json.dumps(dictionary_reversed)
print json_list_2
# write json_list to file
with open('country_codes_converter_ 2.json', 'w') as outfile:
    json.dump(json_list_2, outfile)
