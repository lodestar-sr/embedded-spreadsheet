#!/usr/bin/env bash
cd $(dirname $0)
set -e
echo "Transpiling Application..."
rm -rf dist/*
yarn run build
