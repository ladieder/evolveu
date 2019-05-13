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