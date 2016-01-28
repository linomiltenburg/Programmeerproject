import json

with open('data/meat_consumption.csv', 'r') as f:
    content = f.readlines()[2:182]

dictionary = {}
index = 2
years = [1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002]

for year in range(len(years)):
    print years[year]
    python_list = []

    for row in content:
        splitted = row.split(",")
        country = splitted[1]
        data = splitted[index]
        python_list.append([country, data])
        dictionary[years[year]] = python_list

    index += 1

# convert  to json_list
json_list = json.dumps(dictionary)
print json_list
# write json_list to file
with open('data_meat_dictionary.json', 'w') as outfile:
    json.dump(json_list, outfile)
