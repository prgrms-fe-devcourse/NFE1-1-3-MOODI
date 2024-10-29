const caculateEmotion = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;

    const firstDayOfMonth = new Date(year, today.getMonth(), 1);
    const dayOfWeek = firstDayOfMonth.getDay() || 7;

    const dayOfMonth = today.getDate();
    const weekNumber = Math.ceil((dayOfMonth + dayOfWeek - 1) / 7);

    return { year, month, week: weekNumber };
};

export default caculateEmotion;
