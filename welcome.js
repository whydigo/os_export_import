import os from 'os'

function yourOS () {
    return `Твоя ос - это ${os.type()}!`
}

export {yourOS}