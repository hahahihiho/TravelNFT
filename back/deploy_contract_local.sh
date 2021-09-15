HARDHAT_RPATH=../hardhat
DEPLOY_RPATH=scripts/deploy.js
cd $HARDHAT_RPATH
npx hardhat run $DEPLOY_RPATH --network localhost