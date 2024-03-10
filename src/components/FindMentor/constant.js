
export async function fetchAllData(endPoints) {
    try {
        const response = await fetch(`https://decentraclassesbackend.onrender.com/mentorship/${endPoints}`)
        const data = await response.json();
        return data;
    } catch (error) {
        return [];
    }
}


export function getMonthAbbreviationWithDate(dateString) {
    const dateObject = new Date(dateString);
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

    return `${dateObject.getDate()} ${months[dateObject.getMonth()]}`
}

export function getDayAbbreviation(dateString) {
    const dateObject = new Date(dateString);
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    return days[dateObject.getDay()];
}

export function formatDateString(inputDateString) {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const [year, month, day] = inputDateString.split("-");
    const monthName = months[parseInt(month, 10) - 1];

    return `${day}-${monthName}-${year}`;
}