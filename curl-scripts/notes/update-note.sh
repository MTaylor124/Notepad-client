#!/bin/bash

curl "https://mtaylor-notepad.herokuapp.com/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --data '{
    "note": {
      "title": "'"${TITLE}"'",
      "body": "'"${BODY}"'",
      "priority": "'"${PRIORITY}"'"
    }
  }'

echo
