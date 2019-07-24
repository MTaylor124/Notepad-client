#!/bin/bash

curl --include "https://mtaylor-notepad.herokuapp.com/notes" \
--include \
--request DELETE
echo
