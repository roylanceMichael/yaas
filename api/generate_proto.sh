#!/usr/bin/env bash
#protoc -I=src/main/resources --proto_path=src/main/resources --java_out=src/main/java src/main/resources/*.proto
protoc -I=src/main/resources --proto_path=src/main/resources --swift_out=../swift/yaas/yaas src/main/resources/*.proto

#pushd ../javascript
#npm install
#node_modules/protobufjs/bin/pbjs ../api/src/main/resources/YaasModels.proto  > model.json
#node_modules/protobufjs/bin/pbjs ../api/src/main/resources/YaasModels.proto -t js > model.js
#node_modules/proto2typescript/bin/proto2typescript-bin.js --file model.json > model.d.ts
#popd