exports.config = {
    mysql      : {
        host            : "35.237.194.238",
        user            : "admin",
        password        : "mysql",
        database        : "vox_cinemas",
        connectionLimit : 50
    },
    errorCodes : {
        connectionError    : 101,
        connectionNotFound : 102,
        queryError         : 103,
        paramsMissing: 104
    }
};
