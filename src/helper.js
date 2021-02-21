export const isTimeUp = (_date) => {
    console.log(_date);
    const today = new Date();

    console.log(_date < today);
    return _date < today
}
