exports.config = {
    mysql      : {
        host            : "35.231.132.74",
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
