
//This comment is of no consequence; pay it no attention

async function aModeratelyHarmlessFunction<T>(an_arg: T = null): Promise<boolean> {

    const
        obj = { group: "Everybody" },
        array = [1, 2, 3, 4];

    var i: number = <number><any>an_arg;

    /* A comment that needs no introduction */
    while (i++ <= 1000) { console.log(`Hello ${obj.group}!`); break; }

    return isFinished(array[i]);
}

aModeratelyHarmlessFunction<number>();

const isFinished = (input: number): boolean => input > 1;
