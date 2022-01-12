const RESPONSE_TYPE_SUCCESS = 'success'
const RESPONSE_TYPE_ERROR = 'error'

const dataKeyMap = new Map([
    [RESPONSE_TYPE_SUCCESS, 'data'],
    [RESPONSE_TYPE_ERROR, 'message'],
])

function sendResponse(res, type, data, code = 200) {
    const validatedType = dataKeyMap.has(type)
        ? type
        : RESPONSE_TYPE_SUCCESS

    res.status(code)
        .json({
            type: validatedType,
            [dataKeyMap.get(validatedType)]: data,
        })
}

function sendSuccessResponse(res, data, code = 200) {
    sendResponse(res, RESPONSE_TYPE_SUCCESS, data, code)
}

function sendErrorResponse(res, data, code = 400) {
    sendResponse(res, RESPONSE_TYPE_ERROR, data, code)
}

module.exports = {
    sendResponse,
    sendSuccessResponse,
    sendErrorResponse,
}
