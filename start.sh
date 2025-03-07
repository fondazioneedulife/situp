#!/bin/bash

export FLASK_APP=warp
export FLASK_ENV=development
export WARP_DATABASE=postgresql://postgres:pallina303@localhost:5432/warp

flask run --host=0.0.0.0 --port=5000