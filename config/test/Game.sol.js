"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var Game = (function (_Pudding) {
    _inherits(Game, _Pudding);

    function Game() {
      _classCallCheck(this, Game);

      _get(Object.getPrototypeOf(Game.prototype), "constructor", this).apply(this, arguments);
    }

    return Game;
  })(Pudding);

  ;

  // Set up specific data for this class.
  Game.abi = [{ "constant": true, "inputs": [], "name": "num_species", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "x", "type": "uint256" }, { "name": "y", "type": "uint256" }, { "name": "_gas_deposits", "type": "uint8" }, { "name": "_gas_amount", "type": "uint256" }, { "name": "_starting_gas", "type": "uint256" }, { "name": "_creature_builder", "type": "address" }], "name": "initialize", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "starting_gas", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "board", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "valid_creature", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "_creature", "type": "address" }], "name": "register_creature", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "creature_builder", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [], "name": "gas_deposits", "outputs": [{ "name": "", "type": "uint8" }], "type": "function" }, { "constant": false, "inputs": [], "name": "_random_empty_location", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "brain", "type": "address" }], "name": "add_creature", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "admin", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [], "name": "gas_amount", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "inputs": [], "type": "constructor" }];
  Game.binary = "606060405260028054600160a060020a03191633179055611529806100246000396000f3606060405236156100985760e060020a60003504634bee472b811461009a5780634e15c376146100a35780636f9c494b146101ca5780637cd3229a146101d35780637d9383c3146101e557806386acb16d14610200578063965fd7b614610287578063a49c326e14610299578063c062ef86146102ac578063de72a6f31461041b578063f851a4401461049d578063fb794281146104af575b005b6104b860055481565b61009860043560243560443560643560843560a435600254600160a060020a039081169033168114156101c1576001805473ffffffffffffffffffffffffffffffffffffffff191683179055604051610c9a8061088f83398101819003906000f0600080546040805173ffffffffffffffffffffffffffffffffffffffff19909216939093178083557f3cb260b2000000000000000000000000000000000000000000000000000000008252600482018b9052602482018a90529251600160a060020a039390931692633cb260b292604483810193919291829003018183876161da5a03f1156100025750506002805474ff0000000000000000000000000000000000000000191660a060020a880217905550600384905560048390555b50505050505050565b6104b860045481565b6104ca600054600160a060020a031681565b6104b860043560066020526000908152604090205460ff1681565b61009860043530600160a060020a031633600160a060020a031614806102355750600254600160a060020a0390811633909116145b8061025b575033600160a060020a031660009081526006602052604090205460ff166001145b1561028457600160a060020a0381166000908152600660205260409020805460ff191660011790555b50565b6104ca600154600160a060020a031681565b6104e760025460a060020a900460ff1681565b6104b85b60008054604080517f0539c6d60000000000000000000000000000000000000000000000000000000081529051600019430140928492839283928392600160a060020a039190911691630539c6d691600481810192602092909190829003018187876161da5a03f1156100025750506040515194505083850692505b83821015610413578183019050600060009054906101000a9004600160a060020a0316600160a060020a031663f6a5414d826040518260e060020a028152600401808281526020019150506020604051808303816000876161da5a03f115610002575050604051516000149050801561040a5750600060009054906101000a9004600160a060020a0316600160a060020a0316638f8930da826040518260e060020a028152600401808281526020019150506020604051808303816000876161da5a03f11561000257505060405151600160a060020a031660001490505b15610883578095505b505050505090565b6100986004356005805460019081019091556040805191547fa2bcee8b00000000000000000000000000000000000000000000000000000000835290516000928392600160a060020a03169163a2bcee8b91600481810192602092909190829003018187876161da5a03f1156100025750506040515192506104fe90506102b0565b6104ca600254600160a060020a031681565b6104b860035481565b60408051918252519081900360200190f35b60408051600160a060020a03929092168252519081900360200190f35b6040805160ff929092168252519081900360200190f35b60408051600080547fba50f96500000000000000000000000000000000000000000000000000000000835260048301859052600160a060020a03878116602485015293519495509092169263ba50f96592604480840193919291829003018183876161da5a03f1156100025750505030600160a060020a03166386acb16d836040518260e060020a0281526004018082600160a060020a031681526020019150506000604051808303816000876161da5a03f1156100025750505081600160a060020a03166378cffc09826040518260e060020a028152600401808281526020019150506000604051808303816000876161da5a03f1156100025750505081600160a060020a03166314fefca160036040518260e060020a028152600401808281526020019150506000604051808303816000876161da5a03f11561000257505060408051600080547faeec6197000000000000000000000000000000000000000000000000000000008352600160a060020a0390811660048401529251928616935063aeec619792602483810193829003018183876161da5a03f1156100025750505081600160a060020a03166382b022e06005600050546040518260e060020a028152600401808281526020019150506000604051808303816000876161da5a03f115610002575050604080516001547f4f002522000000000000000000000000000000000000000000000000000000008252600160a060020a03908116600483015291519185169250634f002522916024828101926000929190829003018183876161da5a03f1156100025750505081600160a060020a03166345c5b8ac306040518260e060020a0281526004018082600160a060020a031681526020019150506000604051808303816000876161da5a03f115610002575050604080516002547fe9333fab000000000000000000000000000000000000000000000000000000008252600160a060020a0390811660048301529151918516925063e9333fab916024828101926000929190829003018183876161da5a03f11561000257505060408051600254600080546003547f1d18b85700000000000000000000000000000000000000000000000000000000855260a060020a90930460ff16600485015260248401929092529251600160a060020a03919091169350631d18b85792604483810193919291829003018183876161da5a03f11561000257505050505050565b6001919091019061032c5660606040526007805433600160a060020a031990911681179091556006805461010060a860020a031916610100909202919091179055610c57806100436000396000f3606060405236156101275760e060020a60003504630539c6d6811461012957806317a650cc146101335780631d18b857146101e057806324eb95fe1461026f5780633cb260b21461028757806345c5b8ac146102fc5780634edccd311461034557806352d4bb02146104215780635d7bb3571461042a57806361f2de501461049257806366ab88ee1461055e578063680f0eda1461056a578063705bd6f61461058e5780638f8930da146105b9578063b070bdc6146105ed578063b5a27a2114610686578063ba50f9651461072e578063c3fe3e2814610771578063ddc6326214610788578063e6f3ae3c14610860578063e9333fab14610892578063eecc3be8146108c8578063f0a45cff14610938578063f6a5414d146109e0578063f851a44014610a2c575b005b610a3e6002545b90565b610127600435600660019054906101000a9004600160a060020a0316600160a060020a0316637d9383c3336040518260e060020a0281526004018082600160a060020a031681526020019150506020604051808303816000876161da5a03f115610002575050604051516001141590506108c5573360026000508281548110156100025750600052600080516020610c178339815191529091018054600160a060020a0319169091179055565b610127600435602435600754600090819081908190600160a060020a03908116903316811415610b3c5743600019014094505b8660ff168460ff161015610b3c576001805461010087049660ff9081900695508582020493508791908490811015610002576000918252600080516020610c378339815191520190508054909101905560019390930192610213565b610a3e60043560038160028110156100025750015481565b610127600435602435600754600160a060020a03908116903316811415610b41576003839055600482905560018054838502808355919082908015829011610b46576000839052610b4690600080516020610c378339815191529081019083015b80821115610b8357600081556001016102e8565b610127600435600754600160a060020a039081169033168114156108c35760068054610100840274ffffffffffffffffffffffffffffffffffffffff0019919091161790555050565b610127600435602435604435606435600754600160a060020a0390811690331681141561041a578360006000508681548110156100025790805260208082047f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5630191066101000a81548160ff02191690830217905550826001600050868154811015610002576000918252600080516020610c3783398151915201905055600280548391908790811015610002575060005250600080516020610c1783398151915285018054600160a060020a031916831790555b5050505050565b610a3e60055481565b610a5060408051602081810183526000825282516001805480840283018401909552848252929390929183018282801561048657602002820191906000526020600020905b81600050548152602001906001019080831161046f575b50505050509050610130565b610127600435602435600660019054906101000a9004600160a060020a0316600160a060020a0316637d9383c3336040518260e060020a0281526004018082600160a060020a031681526020019150506020604051808303816000876161da5a03f1156100025750506040515160011490508061051e5750600754600160a060020a0390811633909116145b156108c35780600260005083815481101561000257600091909152600080516020610c17833981519152018054600160a060020a03191690911790555050565b610a3e60065460ff1681565b610127600435600754600160a060020a039081169033168114156108c35750600555565b610a3e6004356001805482908110156100025750600052600080516020610c37833981519152015481565b610a9a6004356002805482908110156100025750600052600080516020610c178339815191520154600160a060020a031681565b604080516020818101835260008083528351815480840282018401909552848152610a50949092830182828015610486579080526020028101907f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5639084905b825461010083900a900460ff1681526020600192830181810494850194909303909202910180841161064c57905050505050509050610130565b610127600435600660019054906101000a9004600160a060020a0316600160a060020a0316637d9383c3336040518260e060020a0281526004018082600160a060020a031681526020019150506020604051808303816000876161da5a03f115610002575050604051516001141590506108c5576000600260005082815481101561000257509052600080516020610c17833981519152018054600160a060020a0319169055565b610127600435602435806002600050838154811015610002575060005250600080516020610c178339815191529091018054600160a060020a0319169091179055565b610a9a6006546101009004600160a060020a031681565b610a3e6004356000600660019054906101000a9004600160a060020a0316600160a060020a0316637d9383c3336040518260e060020a0281526004018082600160a060020a031681526020019150506020604051808303816000876161da5a03f1156100025750506040515160011415905061085b5760055460018054849081101561000257508252600080516020610c378339815191528301541115610bc8576001805460055491908490811015610002575050600080516020610c3783398151915283018054919091039055506005545b919050565b610a3e60043560243560008160ff166000148015610882575060035483068114155b15610add57506000198201610ad7565b610127600435600754600160a060020a039081169033168114156108c35760078054600160a060020a031916831790555b505b50565b610a5060408051602081810183526000825260028054845181840281018401909552808552929392909183018282801561048657602002820191906000526020600020905b8154600160a060020a031681526001919091019060200180831161090d575b50505050509050610130565b61012760043560243533600160a060020a031660026000508381548110156100025750600052600080516020610c17833981519152830154600160a060020a031614156108c3576000600260005083815481101561000257600080516020610c1783398151915281018054600160a060020a031916905560018054859450909250811015610002575060005250600080516020610c3783398151915290910180549091019055565b610a3e6004356000805482908110156100025750805260208082047f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563015491066101000a900460ff1681565b610a9a600754600160a060020a031681565b60408051918252519081900360200190f35b60405180806020018281038252838181518152602001915080519060200190602002808383829060006004602084601f0104600302600f01f1509050019250505060405180910390f35b60408051600160a060020a03929092168252519081900360200190f35b8160ff166002148015610acb575060035483115b15610b08575060035482035b92915050565b8160ff166001148015610af95750600354600019810190840614155b15610ab7575060018201610ad7565b8160ff166003148015610b245750600354600454026000190183105b15610b3457506003548201610ad7565b506000610ad7565b505050505b505050565b50505050818302600260005081815481835581811511610b87576000839052610b8790600080516020610c178339815191529081019083016102e8565b5090565b50505050818302600060005081815481835581811511610b3c57601f016020900481601f01602090048360005260206000209182019101610b3c91906102e8565b6001805483908110156100025760008281528254600080516020610c37833981519152929092015493509190849081101561000257600080516020610c3783398151915201919091555061085b56405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5aceb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6";

  if ("0x5b40fbf3278a897dac706959381f9970eabbe212" != "") {
    Game.address = "0x5b40fbf3278a897dac706959381f9970eabbe212";

    // Backward compatibility; Deprecated.
    Game.deployed_address = "0x5b40fbf3278a897dac706959381f9970eabbe212";
  }

  Game.generated_with = "1.0.2";
  Game.contract_name = "Game";

  return Game;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.Game = factory;
}