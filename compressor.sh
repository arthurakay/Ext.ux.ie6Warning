#!/bin/bash

EXTJS="./ext-4.0.4/ext-all.js"
IE6WARNING = "Ext.ux.ie6Warning.js"

echo "Combining JS files..."

mkdir tmpjs
cat $EXTJS $IE6WARNING > ./tmpjs/tmp.js

echo "Removing old minified files..."
rm ./compressed/*

echo "Running YUI Compressor"
java -jar ./yuicompressor-2.4.2/build/yuicompressor-2.4.2.jar --type js -o ./compressed/Ext.ux.ie6Warning-all.js ./tmpjs/tmp.js