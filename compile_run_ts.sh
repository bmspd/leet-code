#!/bin/bash

file=$1
size=${#file}
pre_last_index=$(( $size - 1 ))
tsc "$file" --target es2017

js_file=`echo $file | sed s/./j/$pre_last_index`

node --es-module-specifier-resolution=node "$js_file"