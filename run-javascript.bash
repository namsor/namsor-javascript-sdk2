echo update openapi-generator
./bin/utils/openapi-generator-cli.sh
rm -Rf ./namsor/client/javascript/
echo run openapi-generator
java -jar modules/openapi-generator-cli/target/openapi-generator-cli.jar generate --git-repo-id namsor-javascript-sdk2 --git-user-id namsor --artifact-version 2.0.11 --group-id com.namsor --artifact-id namsor-sdk2 -i https://v2.namsor.com/NamSorAPIv2/api2/openapi.json -g javascript -o  namsor/client/javascript
cd ./namsor/client/javascript/
cp -R /home/namsor/codegen/openapi-generator/namsor/client/javascript/* /home/namsor/codegen/namsor-javascript-sdk2/
cp /home/namsor/codegen/openapi-generator/run-javascript.bash /home/namsor/codegen/namsor-javascript-sdk2/
#~/dropbox_uploader.sh upload namsor-sdk2-1.0.0.jar namsor-sdk2-1.0.0.jar
#~/dropbox_uploader.sh upload namsor-sdk2-1.0.0-javadoc.jar namsor-sdk2-1.0.0-javadoc.jar
#~/dropbox_uploader.sh upload namsor-sdk2-1.0.0-sources.jar namsor-sdk2-1.0.0-sources.jar
#~/dropbox_uploader.sh upload namsor-sdk2-1.0.0-tests.jar namsor-sdk2-1.0.0-tests.jar
