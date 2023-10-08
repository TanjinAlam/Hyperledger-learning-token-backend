#!/bin/bash

# Get the absolute path to the directory containing this script
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

osascript -e 'tell app "Terminal"
    activate
    do script "cd '${SCRIPT_DIR}/learning-token-backend' && yarn start:dev; read -p \"Press Enter to exit...\""
end tell'


osascript -e 'tell app "Terminal"
    activate
    do script "cd '${SCRIPT_DIR}/hyperledger-admin' && yarn dev; read -p \"Press Enter to exit...\""
end tell'


osascript -e 'tell app "Terminal"
    activate
    do script "cd '${SCRIPT_DIR}/learning-token' && npx hardhat node; read -p \"Press Enter to exit...\""
end tell'

sleep 10  # Sleep for 10 seconds

osascript -e 'tell app "Terminal"
    activate
    do script "cd '${SCRIPT_DIR}/learning-token' && npx hardhat run '${SCRIPT_DIR}/learning-token/scripts/DeployLearningToken.ts' --network localhost; read -p \"Press Enter to exit...\""
end tell'
