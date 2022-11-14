const { network } = require("hardhat")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    log("--------------")

    const box = await deploy("Box",  {
        from: deployer,
        args: [],
        waitConfirmations: network.config.blockConfirmations || 3,
        proxy:{
            proxyContract: "OpenZeppelinTransparentProxy",
            viaAdmin: {
                name: "BoxProxyAdmin",
                artifact: "BoxProxyAdmin"
            }
        }
    })
}
