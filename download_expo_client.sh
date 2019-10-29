#!/bin/sh

rm -Rf bin/Exponent.app
mkdir -p bin/Exponent.app
curl -L http://expo.io/--/api/v2/versions/download-ios-simulator-build | tar xvzf - -C bin/Exponent.app
