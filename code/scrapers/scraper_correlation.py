import csv

with open('data/data_cancer1.csv', 'r') as f:
    data_cancer = f.readlines()[1:73]

with open('data/meat_consumption.csv', 'r') as f:
    data_meat = f.readlines()[2:182]

data = []

for row in data_cancer:
    splitted_cancer = row.split(",")
    country_1 = splitted_cancer[0]
    value_cancer = splitted_cancer[1].strip()
    for line in data_meat:
        splitted_meat = line.split(",")
        country_2 = splitted_meat[0]
        # Get the avrage data of meat of 3 years
        total_data = 0
        average_data = 0
        value_meat = splitted_meat[2:5]
        for i in range(len(value_meat)):
            total_data += float(value_meat[i])
            average_data = str((total_data / 3))
        if country_1 == country_2:
            line = [country_1,value_cancer,average_data]
            data.append(line)


with open('data/scatterplot_data.csv', 'wb') as fp:
    for line in data:
        a = csv.writer(fp,delimiter=',')
        a.writerows(data)
