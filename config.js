exports.config = {
    mysql      : {
        host            : "192.187.98.12",
        user            : "danish",
        password        : "danish123",
        database        : "vox_cinema",
        connectionLimit : 50
    },
    errorCodes : {
        connectionError    : 101,
        connectionNotFound : 102,
        queryError         : 103,
        paramsMissing: 104
    }
};
