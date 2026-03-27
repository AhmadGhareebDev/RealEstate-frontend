export const normalizeApiError = (error) => {

    const status = error?.response?.status;
    const data  = error?.response?.data
    if (data && typeof data === 'object') {
        return {
            status,
            code: data.errorCode,
            message: data.message || 'Request failed.'
        }
    }

    if (error?.request) {
        return {
            status,
            code: 'NETWORK_ERROR',
            message: 'Network error. Please check your connection'
        }
    }

    return {
        status,
        code: 'UNKNOWN_ERROR',
        message: error?.message || 'Something went wrong.'
    }
}