function withMonthNameDateAndTime(unixTime) {
    const date = new Date(unixTime);
    return `${date.toLocaleDateString('en-US', {
        weekday: 'long',
    })}  ${date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })}`;
};

export default withMonthNameDateAndTime;