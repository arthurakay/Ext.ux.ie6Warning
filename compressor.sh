#!/bin/bash

EXTJS="./ext-4.0.4/ext-all.js"
IE6WARNING="./Ext.ux.ie6Warning.js"

echo "Removing old minified files..."
rm ./compressed/*

echo "Combining JS files..."
cat $EXTJS $IE6WARNING > ./compressed/Ext.ux.ie6Warning-all.js

echo "Running YUI Compressor"
java -jar ./yuicompressor-2.4.2/build/yuicompressor-2.4.2.jar --type js -o ./compressed/Ext.ux.ie6Warning-min.js ./compressed/Ext.ux.ie6Warning-all.js

echo "Done!"