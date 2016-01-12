import json

with open('meat_consumption.csv', 'r') as f:
    content = f.readlines()[2:182]

python_list = []

for row in content:
    splitted = row.split(",")
    country = splitted[1]
    print country
    total_data = 0
    average_data = 0
    data = splitted[2:5]
    for i in range(len(data)):
        total_data += float(data[i])
        average_data = str((total_data / 3))
    print average_data
    python_list.append([country, average_data])
    print python_list

# convert python_list to json_list
json_list = json.dumps(python_list)
print json_list
# write json_list to file
with open('data.json', 'w') as outfile:
    json.dump(json_list, outfile)
