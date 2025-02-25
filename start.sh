#!/bin/bash

export FLASK_APP=warp
export FLASK_ENV=development
export WARP_DATABASE=postgresql://warp:warp@localhost:5432/warp

flask run
