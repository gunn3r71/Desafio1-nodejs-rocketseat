let getFlags = (arg) => {
    let indexFlagName = arg.indexOf('--name');
    let indexFlagGreeting = arg.indexOf('--greeting');

    let flags = {
        flagName: arg[indexFlagName+1],
        flagGreeting: arg[indexFlagGreeting+1]
    };

    return flags; 
};

exports.getFlags = getFlags;