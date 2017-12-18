/*****************************************

Use: "Hello World!".encrypt("key")
=> "Wzk1NjgzMjIsMTM0MzY5MjgsMTQyODY5MTQsMTQzNTQ0MzIsMTQ2ODAxMzAsNDM5Mjk2MCwxMTUzNDQwMiwxNDc0NzY0OCwxNTA3MzM0NiwxNDM1NDQzMiwxMzIzODMzOF0="

******************************************/

String.prototype.encode = function() {
    let array = [];
    for (let i of this) {
        array.push(i.charCodeAt(0))
    }
    return array
}
Array.prototype.lastItem = function() {
    return this[this.length - 1]
}
String.prototype.encrypt = function(key) {
    const encoded = this.encode();
    const keyEncoded = key.encode();
    // console.log(keyEncoded)
    let array = encoded.map(x => {
        x = parseInt(x)
        for (let i of keyEncoded) {
            x = x + 1 << i % 12
        }
		keyEncoded.reverse()
        return x;
    })
    return new Buffer(JSON.stringify(array)).toString('base64')
}