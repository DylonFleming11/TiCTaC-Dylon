curl "https://tic-tac-toe-api-production.herokuapp.com/start-game" \
  --include \
  --request POST \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-type: application/json" \

echo
