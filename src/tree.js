const { MerkleTree } = require('merkletreejs')
const keccak256 = require("keccak256")
class Tree {
    constructor(list) {
        this.leaves = list.map(item => {
            return "0x" + keccak256(item).toString('hex')
        })
        this.tree = new MerkleTree(this.leaves,keccak256,{
            sortPairs:true
        })
    }

    toHex(uint8Array) {
      return Array.prototype.map
        .call(uint8Array, (x) => ('00' + x.toString(16)).slice(-2))
        .join('');
    }
    root() {
        let root = this.tree.getRoot().toString('hex')
        return "0x" + root
    }
    leaf(target) {
        return "0x" + keccak256(target).toString('hex')
    }
    proof(target) {
        let leaf = keccak256(target)
        return this.tree.getProof(leaf).map(item => {
            return "0x" + this.toHex(item.data)
        })
    }
    verify(target) {
        let leaf = keccak256(target)
        let proof = this.tree.getProof(leaf)
        let root = this.tree.getRoot().toString('hex')
        return this.tree.verify(proof, leaf, root)
    }
}

module.exports = Tree