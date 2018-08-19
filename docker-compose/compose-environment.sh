#
# APP_ENV needs to be set ahead of time Jenkins gets uses the git branch name
#
echo " "
echo "APP_ENV=${APP_ENV}"
# Default log format to splunk
# export LOG_FORMAT="splunk"


export DOMAIN_NAME=objectmatrix


# if the service name has not been set then set these variables
if [ -z "${SERVICE_NAME}" ]
then
	echo "setting service name, version, and deploy name"
	export SERVICE_NAME=`node ./utils/build-helper.js --service-name`
	export SERVICE_VERSION=`node ./utils/build-helper.js --service-version`
	export SERVICE_DEPLOY_NAME=`node ./utils/build-helper.js --service-deploy-name`
fi

export MATRIX_NAME=${DOMAIN_NAME}-${APP_ENV}
export NETWORK_NAME=${MATRIX_NAME}_backend

export APP_NAME=${SERVICE_DEPLOY_NAME}
export DOCKER_NODE_ROLE_CONSTRAINT="node.role != manager"

if [ $APP_ENV = "local-docker" ];
then
	export DOCKER_NODE_ROLE_CONSTRAINT="node.role == manager"
    export LOG_FORMAT="json-file"
fi

echo "DOMAIN_NAME=${DOMAIN_NAME}"
echo "MATRIX_NAME=${MATRIX_NAME}"
echo "NETWORK_NAME=${NETWORK_NAME}"
echo "SERVICE_NAME=${SERVICE_NAME}"
echo "SERVICE_VERSION=${SERVICE_VERSION}"
echo "SERVICE_DEPLOY_NAME=${SERVICE_DEPLOY_NAME}"
echo "LOG_FORMAT=${LOG_FORMAT}"
echo "DOCKER_NODE_ROLE_CONSTRAINT=${DOCKER_NODE_ROLE_CONSTRAINT}"
echo " "
