const { ethers, upgrades } = require("hardhat")

async function main() {
    const gnosisSafe = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"

    console.log("Transferring ownership of ProxyAdmin...")
    // The owner of the ProxyAdmin can upgrade our contracts
    //this function changes the owner of the contract to "gnosisSafe"
    await upgrades.admin.transferProxyAdminOwnership(gnosisSafe)
    console.log("Transferred ownership of ProxyAdmin to:", gnosisSafe)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })