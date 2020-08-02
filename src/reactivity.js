const Reactivity = () => {
    const storage = [],
    depend = () => {
        if (target && !storage.includes(target))
        {
            storage.push(target);
        }
    },
    notify = () => {
        storage.forEach(run => {
            run();
        });
    }
}

export default Reactivity;