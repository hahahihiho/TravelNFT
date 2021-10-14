HARDHAT_RPATH=../hardhat
DEPLOY_RPATH=scripts/deploy_metadium.js

cd $HARDHAT_RPATH
npx hardhat run $DEPLOY_RPATH --network metadium_test