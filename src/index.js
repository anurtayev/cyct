import xs from 'xstream';
import {run} from '@cycle/xstream-run';
import {makeDOMDriver, h1} from '@cycle/dom';

function main() {
    return {
        DOM: xs.periodic(1000).map(i =>
            h1('' + i*2 + ' sec333o elapsed')
        )
    }
}

const drivers = {
    DOM: makeDOMDriver('#app')
};

run(main, drivers);
