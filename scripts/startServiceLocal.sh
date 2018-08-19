export APP_ENV=local-docker
export APP_IMAGE=dev-local/jenkinsuser/service-ignosis-view


if [ $? != 0 ]
then
	exit
fi

docker swarm init

echo "building ${APP_IMAGE}"
echo "docker build . -t ${APP_IMAGE} ..."

# pass any parameters through to deployService.sh to allow for extra spring profiles

if [ "$1" = "local" ]; then

	docker build . -t ${APP_IMAGE} -f Dockerfile.dev
else

	docker build . -t ${APP_IMAGE} -f Dockerfile
fi

. docker-compose/startService.sh $@
echo " "
echo "To tail the logs of the service:"
echo "docker service logs --follow ${MATRIX_NAME}_${SERVICE_DEPLOY_NAME}"
echo " "
