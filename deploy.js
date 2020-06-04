var FtpDeploy = require("ftp-deploy");
var ftpDeploy = new FtpDeploy();
var config = {
    user: "deploy",
    // Password optional, prompted if none given
    password: "sbD#2k09",
    host: "aourivesariacosta.pt",
    port: 21,
    localRoot: __dirname + "/dist/aourivesariacosta",
    remoteRoot: "/",
    // include: ["*", "**/*"],      // this would upload everything except dot files
    include: ["*"],
    // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
    exclude: [],
    // delete ALL existing files at destination before uploading, if true
    deleteRemote: true,
    // Passive mode is forced (EPSV command is not sent)
    forcePasv: true
};
ftpDeploy
    .deploy(config)
    .then(res => console.log("finished:", res))
    .catch(err => console.log(err));