import csv
import json

locations = {}

with open('./tools/oot.csv') as f:
    reader = csv.reader(f)
    node = None
    for line in reader:
        if line[0] and not line[1]:
            node = line[0]
            locations[node] = []
        elif line[0] and line[1]:
            locations[node].append({
                "origin": line[0],
                "vanilla": line[1]
            })
    
with open("oot-locations.json", 'w') as f:
    f.write(json.dumps(locations, indent=2))
