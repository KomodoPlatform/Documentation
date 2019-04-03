#!/usr/bin/env python3.6

import os
for filename in os.listdir('../docs/basic-docs/customconsensus/'):
    with open('../docs/basic-docs/customconsensus/'+filename, "r") as f, open(filename, 'w+') as g:
        flag = 0
        for currLine in f:
            if currLine.startswith("Response"):
                flag = 1
                g.write('\n<collapse-text hidden title="Response">\n\n')
            elif flag == 1 and currLine == "```\n":
                g.write("```\n" + "\n" + "</collapse-text>\n\n")
                flag = 0
            else:
                g.write(currLine)
