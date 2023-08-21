import io from '@actions/io';
import core from '@actions/core';

try {
    const paths = core.getMultilineInput('path', {required: true});
    console.log('paths:', paths);

    paths.map(T => {
        console.log('rm:', T);
        return io.rmRF(T).catch((error: any) => {
            core.setFailed(error.message);
        });
    });
} catch (e: any) {
    console.error(e);
    core.setFailed(e.message);
}
