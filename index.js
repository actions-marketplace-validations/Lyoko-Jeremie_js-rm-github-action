const io = require('@actions/io');
const core = require('@actions/core');

try {
    const paths = core.getMultilineInput('path', {required: true});

    paths.map(T => {
        console.log('rm:', T);
        return io.rmRF(T).catch((error) => {
            core.setFailed(error.message);
        });
    });
} catch (e) {
    core.setFailed(e.message);
}
