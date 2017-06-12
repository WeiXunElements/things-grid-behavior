(function() {

	function dataEncode(key, iv, message) {
		var encrypted = CryptoJS.AES.encrypt(message, key, { 
			iv: iv, mode : CryptoJS.mode.CBC, padding : CryptoJS.pad.ZeroPadding
		});
		return encrypted.toString();
	}

	function dataDecode(key, iv, encrypted) {
		var decrypted = CryptoJS.AES.decrypt(encrypted, key, {
			iv: iv, padding: CryptoJS.pad.ZeroPadding
		});
		return decrypted.toString(CryptoJS.enc.Utf8);
	}

	var key = CryptoJS.enc.Utf8.parse(CryptoJS.MD5("[xjv9gdmnj779t]"));
	var iv  = CryptoJS.enc.Utf8.parse('1234567812345678');
	var kcrypt = dataDecode(key, iv, "ZLxkO1HvoaHz3KYa5eJ7BA==");
	key = CryptoJS.enc.Utf8.parse(CryptoJS.MD5("[8213i]"));
	vcrypt = dataDecode(key, iv, "tZQkuieBdmdEEj+wi/chxw==");
	window[kcrypt] = vcrypt;

})();