const { ethers } = require("hardhat")

async function main() {
    const box = await ethers.getContract("Box")

    //The deployProxy function validates that the implementation is safe, deploy a proxy admin,
    //deploys the implementation contract & create and intialize the proxy contract
    const proxy = await upgrades.deployProxy(box, [42], { initializer: "store" })
    console.log("Proxy of Box deployed to:", proxy.address)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
