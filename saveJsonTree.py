# -*-coding:Utf-8 -*

import os
import json

def path_to_dict( path, my_string = None ):

    dTree = {'name': os.path.basename(path)}

    if os.path.isdir(path):

        dTree['isFolder'] = True
        dTree['children'] = []

        dPaths = [os.path.join(path,x) for x in os.listdir(path)]

        # Just the children that contains at least a valid file
        for sPath in dPaths:

            dItem = path_to_dict(sPath, my_string)
            
            # If is not one of theirs folder
            if dItem is not None and dItem['name'] not in ('.git', 'node_modules', 'exemple', 'libs', 'content', 'tree'):
                                
                dItem['fullPath'] = sPath
                dTree['children'].append( dItem )

        if not dTree['children']:
            return None
    else:
        if my_string is not None:
            return None

        dTree['isFolder'] = False

    return dTree

resultDataJson = json.dumps( path_to_dict('./',), indent = 2 )

with open('content/tree.json', 'w') as outfile:
    json.dump( json.JSONDecoder().decode( resultDataJson ), outfile, sort_keys = True, indent = 4, ensure_ascii = False )