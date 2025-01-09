function generateCalendar() {
    const date = new Date();
    date.setHours(0, 0, 0, 0); // Imposta l'orario a mezzanotte
    const currentDay = date.getDate();
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();

    const monthNames = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
    const dayNames = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"];

    document.getElementById("calendar-month").textContent = monthNames[currentMonth];
    
    document.getElementById("calendar-year").textContent = currentYear;
    
    document.getElementById("calendar-date").textContent = `${dayNames[date.getDay() === 0 ? 6 : date.getDay() - 1]} ${currentDay}`;

    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    const daysContainer = document.getElementById("calendar-days");
    daysContainer.innerHTML = ""; // Rimuove qualsiasi giorno esistente

    dayNames.forEach(day => {
        const dayElement = document.createElement("div");
        dayElement.classList.add("calendar__day");
        dayElement.textContent = day;
        daysContainer.appendChild(dayElement);
    });

    for (let i = 0; i < (firstDay === 0 ? 6 : firstDay - 1); i++) {  // Adjust to start from Monday
        const emptyElement = document.createElement("div");
        emptyElement.classList.add("calendar__number");
        daysContainer.appendChild(emptyElement);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement("div");
        dayElement.classList.add("calendar__number");
        dayElement.textContent = day;
        
        // Evidenzia il giorno corrente
        if (day === currentDay) {
            dayElement.classList.add("calendar__number--current");
        }

        daysContainer.appendChild(dayElement);
    }
}

generateCalendar();
