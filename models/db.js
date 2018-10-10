let config      = require('./../config').config,
    mysql       = require('mysql'),
    mysqlConfig = config.mysql,
    pool        = mysql.createPool(mysqlConfig);

let getConnection = (cb) => {
    if (pool) {
        pool.getConnection(function (err, connection) {
            cb(err, connection);
        });
    }
    else {
        cb(new Error('pool_undefined'), null);
    }
};

exports.getConnection = getConnection;

exports.getSeats = (query, cb) => {
    getConnection(function (err, conn) {
        if (err) {
            console.error("[db][getSeats][Connection][Error]", err);
            return cb({
                success   : false,
                error     : err,
                errorCode : config.errorCodes.connectionError,
                msg       : "Failed to connect database."
            });
        }
        else if (!conn) {
            console.info("[db][getSeats][No Connection]");
            return cb({
                success   : false,
                errorCode : config.errorCodes.connectionNotFound,
                msg       : "Failed to connect database."
            });
        }
        else {
            conn.query(query, function (err, records, fields) {
                if (err) {
                    console.info("[db][getSeats][Query]");
                    return cb({
                        success   : false,
                        error     : err,
                        errorCode : config.errorCodes.queryError,
                        msg       : "Invalid query."
                    });
                    conn.release();
                    return cb({
                        success : false,
                        msg     : err
                    });
                } else {
                    conn.release();

                    let arr = [];
                    for (let i =0; i<records.length; i++){
                        arr.push(records[i].seat_number);
                    }

                    return cb({
                        success : true,
                        data : arr
                    });
                }
            });
        }

    });
};

exports.readOperation = (query, cb) => {
    getConnection(function (err, conn) {
        if (err) {
            console.error("[db][readOperation][Connection][Error]", err);
            return cb({
                success   : false,
                error     : err,
                errorCode : config.errorCodes.connectionError,
                msg       : "Failed to connect database."
            });
        }
        else if (!conn) {
            console.info("[db][readOperation][No Connection]");
            return cb({
                success   : false,
                errorCode : config.errorCodes.connectionNotFound,
                msg       : "Failed to connect database."
            });
        }
        else {
            conn.query(query, function (err, records, fields) {
                if (err) {
                    console.info("[db][readOperation][Query]");
                    return cb({
                        success   : false,
                        error     : err,
                        errorCode : config.errorCodes.queryError,
                        msg       : "Invalid query."
                    });
                    conn.release();
                    return cb({
                        success : false,
                        msg     : err
                    });
                } else {
                    conn.release();
                    return cb({
                        success : true,
                        data : records
                    });
                }
            });
        }
    });
};

exports.insertBulk = (query, values , cb) => {
    getConnection(function (err, conn) {
        if (err) {
            console.error("[db][insertBulk][Connection][Error]", err);
            return cb({
                success   : false,
                error     : err,
                errorCode : config.errorCodes.connectionError,
                msg       : "Failed to connect database."
            });
        }
        else if (!conn) {
            console.info("[db][insertBulk][No Connection]");
            return cb({
                success   : false,
                errorCode : config.errorCodes.connectionNotFound,
                msg       : "Failed to connect database."
            });
        }
        else {
            conn.query(query, [values] , function (err) {
                if (err) {
                    console.info("[db][insertBulk][Query]");
                    return cb({
                        success   : false,
                        error     : err,
                        errorCode : config.errorCodes.queryError,
                        msg       : "Invalid query."
                    });
                    conn.release();
                    return cb({
                        success : false,
                        msg     : err
                    });
                } else {
                    conn.release();
                    return cb({
                        success : true,
                    });
                }
            });
        }
    });
};