#!/usr/bin/env bash
protoc -I=src/main/resources --proto_path=src/main/resources --java_out=src/main/java src/main/resources/*.proto
#protoc -I=src/main/resources --proto_path=src/main/resources --swift_out=../swift/yaas/yaas src/main/resources/*.proto

echo "compiling javascript models"
pushd javascript
npm install
node_modules/protobufjs/bin/pbjs ../src/main/resources/yaas_models.proto  > model.json
node_modules/protobufjs/bin/pbjs ../src/main/resources/yaas_models.proto -t js > model.js
node_modules/proto2typescript/bin/proto2typescript-bin.js --file model.json > model.d.ts
node_modules/@mroylance/protobuftshelper/run.sh model.js model_factories.ts ./model.d.ts YaasModels
rm -rf model.json
rm -rf model.js
popd

echo "building java client (capi), java server (sapi), and typescript services"
./gradlew build
echo "publishing typescript"
pushd javascript
npm publish
popd

gradle artifactoryPublish

echo "building and publishing capi"
pushd ../capi
chmod -R 777 .
gradle build
gradle artifactoryPublish
popd

echo "building sapi (no need to publish)"
pushd ../sapi
chmod -R 777 .
mvn compile
mvn package

