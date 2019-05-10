# Exercise - Reading a File
def count_else(file_name):
    file = open(file_name)
    count = 0
    for line in open(file_name):
        if "else" in line:
            count +=1
    file.close()
    return count

file_name = "syntax.js"
print(f"number of lines: {len(open(file_name).readlines())}")
print(f"number of characters: {len(open(file_name).read())}")
print(f"number of else's: {count_else(file_name)}")


# Exercise - Reading Directories
import os
from os import listdir
from pathlib import Path

my_path = Path("C:/Users/laure/Documents/evolveu/python")
all_files = os.listdir(my_path)

for file in all_files:
    print(f"file name: {file}, file size: {os.path.getsize(file)}")


# Exercise - Working with Data
census_data = "Census_by_Community_2018.csv"
line_data = open(census_data).readlines()
num_lines = len(line_data)

split_list = []
class_list = []
class_dict = {}

for line in line_data:
    split_data = line.split(",")
    split_list.append(split_data)

# print(split_list[0])

# *** add functionality to search header list to find index of desired criteria
count = 0
for item in split_list:
    if count == 0:
        header_list = split_list[count]
    else:
        class_list.append(split_list[count][0])
    count = count + 1

# print(f"header: {header_list}")
# print(f"keys: {class_list}")
class_keys = set(class_list)
# print(class_keys)

for key in class_keys:
    class_dict[key] = 0
print(f"class dict: {class_dict}")

print(split_list[0])
res_cnt = 0
for item in split_list:
    if split_list[0] == "Residential":
        res_cnt = res_cnt + split_list[9]
print(res_cnt)