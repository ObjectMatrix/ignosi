
. docker-compose/compose-environment.sh

echo "Removing ${SERVICE_DEPLOY_NAME} from ${MATRIX_NAME}"
docker service rm ${HONEYCOMB_NAME}_${SERVICE_NAME}
