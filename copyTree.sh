#!/bin/bash

echo Copy all files in tree and rename to .txt

rm -r tree/components
rm -r tree/screens

cp -r components tree/components
cp -r screens tree/screens

for file in $(find tree -name '*.html')
do
    mv "$file" "${file}.txt"
done

for file in $(find tree -name '*.css')
do
    mv "$file" "${file}.txt"
done

for file in $(find tree -name '*.js')
do
    mv "$file" "${file}.txt"
done

cp index.html tree/index.html.txt
cp app.js tree/app.js.txt
cp package.json tree/package.json.txt
cp webpack.config.js tree/webpack.config.js.txt

exit 0