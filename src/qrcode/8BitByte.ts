import mode from './mode'

export default function QR8bitByte(this: any, data) {
    this.mode = mode.MODE_8BIT_BYTE
    this.data = data
}

QR8bitByte.prototype = {
    getLength: function () {
        return this.data.length
    },

    write: function (buffer: {put: (arg0: any, arg1: number) => void}) {
        for (var i = 0; i < this.data.length; i++) {
            // not JIS ...
            buffer.put(this.data.charCodeAt(i), 8)
        }
    },
}
