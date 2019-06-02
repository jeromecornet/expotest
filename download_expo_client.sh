#!/bin/sh

rm -Rf bin/expo.app
mkdir -p bin/expo.app
curl -L http://expo.io/--/api/v2/versions/download-ios-simulator-build | tar xvzf - -C bin/expo.app
