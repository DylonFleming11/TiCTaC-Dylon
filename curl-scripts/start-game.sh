curl "https://library-express-api.herokuapp.com/movies/" \
  --include \
  --request POST \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-type: application/json" \
    }
  }'

echo
