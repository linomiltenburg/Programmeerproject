with open('data_cancer.csv', 'r') as f:
    data_cancer = f.readlines()[1:72]

with open('meat_consumption.csv', 'r') as f:
    data_meat = f.readlines()[2:182]

for row in data_cancer:
    splitted_cancer = row.split(",")
    country_1 = splitted_cancer[0]
    print country_1
    for line in data_meat:
        splitted_meat = line.split(",")
        country_2 = splitted_meat[0]
        print country_2
        if country_1 == country_2:
            print "equal"
