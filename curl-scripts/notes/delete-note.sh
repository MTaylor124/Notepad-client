#!/bin/bash

curl --include "https://mtaylor-notepad.herokuapp.com/notes/${ID}" \
--include \
--request DELETE
echo
