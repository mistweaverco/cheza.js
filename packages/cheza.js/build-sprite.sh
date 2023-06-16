#!/usr/bin/env bash

cd ./icons && ./../../../node_modules/.bin/svg-sprite -s --di --symbol-dest=./sprite --ss=icons.svg ./*.svg
