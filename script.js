    function generateCalendar() {
      const date = new Date();
      const currentDay = date.getDate();
      const currentMonth = date.getMonth();
      const currentYear = date.getFullYear();

      // Display month and year
      const monthNames = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
      const dayNames = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"];

      document.getElementById("calendar-month").textContent = monthNames[currentMonth];
      document.getElementById("calendar-date").textContent = `${dayNames[date.getDay()]} ${currentDay}`;

      // Get the first day of the month
      const firstDay = new Date(currentYear, currentMonth, 1).getDay();
      const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

      // Generate days of the month
      const daysContainer = document.getElementById("calendar-days");
      daysContainer.innerHTML = ""; // Clear any existing days

      // Add weekday labels
      dayNames.forEach(day => {
        const dayElement = document.createElement("div");
        dayElement.classList.add("calendar__day");
        dayElement.textContent = day;
        daysContainer.appendChild(dayElement);
      });

      // Add empty slots before the first day
      for (let i = 0; i < firstDay; i++) {
        const emptyElement = document.createElement("div");
        emptyElement.classList.add("calendar__number");
        daysContainer.appendChild(emptyElement);
      }

      // Add the days of the month
      for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement("div");
        dayElement.classList.add("calendar__number");
        dayElement.textContent = day;
        
        // Highlight current day
        if (day === currentDay) {
          dayElement.classList.add("calendar__number--current");
        }

        daysContainer.appendChild(dayElement);
      }
    }

    // Initialize calendar on page load
    generateCalendar();