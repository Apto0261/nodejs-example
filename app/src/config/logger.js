const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf, colorize, simple } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});

const logFormat = {
    file : combine(
        label({
            label:"백엔드 맛보기",
        }),
        timestamp({
            format: "YYYY-MM-DD HH:mm:dd",
        }),
        myFormat
    ),
    console : combine(
        colorize(),
        simple()
    ),
};



const option = {
    file: new transports.File({
        filename : "access.log",
        dirname: "./log",
        level : "info",
        format: logFormat.file
    }),
    console: new transports.Console({
        level: "info",
        format: logFormat.console,
    })
}

const logger = createLogger({
    transports: [option.file]
});


//실제 운영서버가 아니면 콘솔에  로그 출력하게끔
if(process.env.NODE_ENV !== "production"){
    logger.add(option.console)
}

module.exports = logger;