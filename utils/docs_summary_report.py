#!/usr/bin/env python3
import os
import csv
import time
import json
import jsonfinder

doc_path = os.getcwd().replace("utils","docs")

nav_files = ["atomicDEX-sidebar.js", "navbar.js", "sidebar.js", "sidebar-extra.js"]




def get_file_list():
    file_list = list()
    for (dirpath, dirnames, filenames) in os.walk(doc_path):
        file_list += [os.path.join(dirpath, file) for file in filenames]
    return file_list



def get_doc_files(file_list):
    doc_files = list()
    nav_path_files = list()
    for file in file_list:
        if file.endswith(".md"):
            doc_files.append(file)
        if file.split("/")[-1] in nav_files:
            nav_path_files.append(file)
    return doc_files, nav_path_files

file_list = get_file_list()
doc_files = get_doc_files(file_list)[0]
for x in doc_files:
    file = x.split("/")[-1]
    path = x.replace(file, "")
    print(f"{path} {file}")

        
'''
print(f"{len(file_list)} files in {doc_path}")
print(f"{len(doc_files)} doc files in {doc_path}")
print(nav_path_files)

json_bits = []

with open(f"report_{int(time.time())}.csv", "w") as csv_file:
    csv_writer = csv.writer(csv_file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
    for file in nav_path_files:
        raw = ""
        json_data = []
        with open(file, "r") as f:
            lines = f.readlines()
            for line in lines:
                line = line.replace('items:', '"items":')
                line = line.replace('text:', '"text":')
                line = line.replace('link:', '"link":')
                line = line.replace('title:', '"title":')
                line = line.replace('collapsable:', '"collapsable":')
                line = line.replace('children:', '"children":')
                line = line.strip()

                raw += str(line)
            raw = raw.replace(",}", "}")
            raw = raw.replace(",]", "]")
            raw = raw.replace(";", "")
            for start, end, obj in jsonfinder.jsonfinder(raw):
                if obj is not None:
                    json_data = json.loads(raw[start:end])
            for item in json_data:
                if "items" in item:
                    for sub_item in item["items"]:
                        print(item)
                        print(json_data)
                        print(type(json_data))
                        csv_writer.writerow([file, sub_item["item"], sub_item["text"]])
                elif isinstance(item, list):
                    csv_writer.writerow([file, item[0], item[1]])
                elif "children" in item:
                    for sub_item in item["children"]:
                        if isinstance(item, list):
                            csv_writer.writerow([file, sub_item[0], sub_item[1]])
                else:
                    if "text" in item:
                        csv_writer.writerow([file, item["text"], item["link"]])
                    else:
                        print(item)
                        print(json_data)
                        print(type(json_data))
                        csv_writer.writerow([file, item["item"], item["text"]])
                    
                    





for bit in json_bits:
    print(json.loads(bit))
'''