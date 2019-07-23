# VARIABLE=VALUE sh curl-scripts/auth/sign-out.sh

curl "https://mtaylor-notepad.herokuapp.com/sign-out" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}"
  echo
