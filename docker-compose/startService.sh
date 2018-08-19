export EXTRA_PROFILES=

if [ $# -gt 0 ]
then
	# Convert any command line parameters to be comma delimited and add them to EXTRA_PROFILES
	echo "Adding extra spring profiles: $@"
    export EXTRA_PROFILES=`IFS=","; echo "$*"`
    export EXTRA_PROFILES=",${EXTRA_PROFILES}"
fi

. docker-compose/compose-environment.sh

echo "Deploying ${SERVICE_DEPLOY_NAME} to ${HONEYCOMB_NAME}"

if [ "$1" = "local" ]; then
  echo ------------DEPLOYING LOCAL------------;
	docker stack deploy -c docker-compose/dev-docker-compose.yml ${MATRIX_NAME}
else
  echo ------------DEPLOYING PROD------------;
	docker stack deploy -c docker-compose/docker-compose.yml ${MATRIX_NAME}
fi
