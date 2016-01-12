import json

with open('data_cancer.csv', 'r') as f:
    content = f.readlines()[0:72]
print content
python_list = []

for row in content:
    splitted = row.split(",")
    country = splitted[0].strip()
    print country
    data = splitted[1].strip()
    print data
    python_list.append([country,data])
    print python_list

# convert python_list to json_list
json_list = json.dumps(python_list)
print json_list
# write json_list to file
with open('data_cancer.json', 'w') as outfile:
    json.dump(json_list, outfile)
