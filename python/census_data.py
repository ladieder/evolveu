# Exercise - Working with Data
def census_data(criteria_1, criteria_2, criteria_sum):
    census_data = open("Census_by_Community_2018.csv", "r")
    line_data = census_data.readlines()
    num_lines = len(line_data)

    split_list = []
    class_dict = {}
    sector_dict = {}

    for line in line_data:
        split_data = line.split(",")
        split_list.append(split_data)

    for count, item in enumerate(split_list):
        if count == 0:
            print(item)
            index_1 = item.index(criteria_1)
            print(index_1)
            index_2 = item.index(criteria_2)
            index_sum = item.index(criteria_sum)
        else:
            if item[index_1] in class_dict and item[index_2] in sector_dict:
                class_dict[item[index_1]] += int(item[index_sum])
                sector_dict[item[index_2]] += int(item[index_sum])
            elif item[index_1] in class_dict:
                class_dict[item[index_1]] += int(item[index_sum])
                sector_dict[item[index_2]] = int(item[index_sum])
            elif item[index_2] in sector_dict:
                class_dict[item[index_1]] = int(item[index_sum])
                sector_dict[item[index_2]] += int(item[index_sum])
            else:
                class_dict[item[index_1]] = int(item[index_sum])
                sector_dict[item[index_2]] = int(item[index_sum])
    
    census_data.close()

    report_file = open("census_report.txt", "w+")
    report_file.write(str(num_lines) + " lines of data in the source data file\n")
    report_file.write("\n") 
    report_file.write(criteria_1 + " Resident Count Breakdown \n")
    for key in class_dict:
        report_file.write(str(class_dict[key]) + " residents in " + key + "\n")

    report_file.write("\n")    
    report_file.write(criteria_2 + " Resident Count Breakdown\n")
    for key in sector_dict:
        report_file.write(str(sector_dict[key]) + " residents in " + key + "\n")
    report_file.close()

    return [class_dict, sector_dict]