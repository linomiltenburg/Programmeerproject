import json

with open('meat_consumption.csv', 'r') as f:
    content = f.readlines()[2:182]

python_list = []

for row in content:
    splitted = row.split(",")
    country = splitted[1]
    print country
    average_data = []
    data = splitted[2:11]
