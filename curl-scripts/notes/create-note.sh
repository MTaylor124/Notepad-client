curl "https://mtaylor-notepad.herokuapp.com/notes" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "note": {
      "title": "'"${TITLE}"'",
      "body": "'"${BODY}"'",
      "priority": "'"${PRIORITY}"'",
      "user_id": "'"${USER_ID}"'"
    }
  }'

echo
