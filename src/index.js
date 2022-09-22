let Tree = require("./tree")


/* let wallet_list = [
    // LV1
    "0xBD68CaA247c54fa65D287f507B90a6C3E1B932b1",
    "0xAFCe2aE13Af7e6A8f651B32dD930DC9c58682796",
    "0x55959f0D5e1b7DC57fe4079e596b8BBafFF123B1",
    // LV2
    "0xDe126800f0dd36013B1C903aCb3a736e1762e1Dc",
    "0x15BD7e948EBCb56B385dEF5581E8AD3736406bc0",
    // LV3
    "0xFf4034B578Bb8b602F7a05580adD918A59Fd71CA",
    "0x40DC122EC96B0DF17E2DaD57a505B4316c92c11E",
    // LV4
    "0x40b5e9B8519f7D563E877A692c1F14D89008F463",
    "0xb8A70564B34AE4f01961D3512911ECa9BE4CC483",
    // LV5
    "0xF62d08ea9461337123A8939576140ff469c8A7c6",
    "0xEBCABA9A33Bb411bB7f6902A7BC6fcd725C126F4"
]
let tree = new Tree(wallet_list)
console.log("root:",tree.root())
console.log("leaf:",tree.leaf("0xFf4034B578Bb8b602F7a05580adD918A59Fd71CA"))
let proof = tree.proof("0xFf4034B578Bb8b602F7a05580adD918A59Fd71CA")
console.log("proof:",proof)
console.log(tree.verify("0xEBCABA9A33Bb411bB7f6902A7BC6fcd725C126F1")) */
if(window) {
    window.Tree = Tree
}

module.exports = Tree