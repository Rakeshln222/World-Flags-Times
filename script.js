// Countries data with timezone information
const countries = [
    { name: "United States", code: "us", timezone: "America/New_York" },
    { name: "China", code: "cn", timezone: "Asia/Shanghai" },
    { name: "Japan", code: "jp", timezone: "Asia/Tokyo" },
    { name: "Germany", code: "de", timezone: "Europe/Berlin" },
    { name: "United Kingdom", code: "gb", timezone: "Europe/London" },
    { name: "France", code: "fr", timezone: "Europe/Paris" },
    { name: "India", code: "in", timezone: "Asia/Kolkata" },
    { name: "Brazil", code: "br", timezone: "America/Sao_Paulo" },
    { name: "Italy", code: "it", timezone: "Europe/Rome" },
    { name: "Canada", code: "ca", timezone: "America/Toronto" },
    { name: "South Korea", code: "kr", timezone: "Asia/Seoul" },
    { name: "Russia", code: "ru", timezone: "Europe/Moscow" },
    { name: "Australia", code: "au", timezone: "Australia/Sydney" },
    { name: "Spain", code: "es", timezone: "Europe/Madrid" },
    { name: "Mexico", code: "mx", timezone: "America/Mexico_City" },
    { name: "Indonesia", code: "id", timezone: "Asia/Jakarta" },
    { name: "Netherlands", code: "nl", timezone: "Europe/Amsterdam" },
    { name: "Saudi Arabia", code: "sa", timezone: "Asia/Riyadh" },
    { name: "Turkey", code: "tr", timezone: "Europe/Istanbul" },
    { name: "Switzerland", code: "ch", timezone: "Europe/Zurich" },
    { name: "Argentina", code: "ar", timezone: "America/Argentina/Buenos_Aires" },
    { name: "Sweden", code: "se", timezone: "Europe/Stockholm" },
    { name: "Poland", code: "pl", timezone: "Europe/Warsaw" },
    { name: "Belgium", code: "be", timezone: "Europe/Brussels" },
    { name: "Thailand", code: "th", timezone: "Asia/Bangkok" },
    { name: "Iran", code: "ir", timezone: "Asia/Tehran" },
    { name: "Austria", code: "at", timezone: "Europe/Vienna" },
    { name: "Norway", code: "no", timezone: "Europe/Oslo" },
    { name: "United Arab Emirates", code: "ae", timezone: "Asia/Dubai" },
    { name: "Israel", code: "il", timezone: "Asia/Jerusalem" },
    { name: "Singapore", code: "sg", timezone: "Asia/Singapore" },
    { name: "Malaysia", code: "my", timezone: "Asia/Kuala_Lumpur" },
    { name: "Denmark", code: "dk", timezone: "Europe/Copenhagen" },
    { name: "South Africa", code: "za", timezone: "Africa/Johannesburg" },
    { name: "Egypt", code: "eg", timezone: "Africa/Cairo" },
    { name: "Philippines", code: "ph", timezone: "Asia/Manila" },
    { name: "Vietnam", code: "vn", timezone: "Asia/Ho_Chi_Minh" },
    { name: "Greece", code: "gr", timezone: "Europe/Athens" },
    { name: "Portugal", code: "pt", timezone: "Europe/Lisbon" },
    { name: "Finland", code: "fi", timezone: "Europe/Helsinki" },
    { name: "Pakistan", code: "pk", timezone: "Asia/Karachi" },
    { name: "Ireland", code: "ie", timezone: "Europe/Dublin" },
    { name: "Colombia", code: "co", timezone: "America/Bogota" },
    { name: "Czech Republic", code: "cz", timezone: "Europe/Prague" },
    { name: "Chile", code: "cl", timezone: "America/Santiago" },
    { name: "Romania", code: "ro", timezone: "Europe/Bucharest" },
    { name: "Nigeria", code: "ng", timezone: "Africa/Lagos" },
    { name: "Hungary", code: "hu", timezone: "Europe/Budapest" },
    { name: "Ukraine", code: "ua", timezone: "Europe/Kiev" },
    { name: "Peru", code: "pe", timezone: "America/Lima" },
    { name: "New Zealand", code: "nz", timezone: "Pacific/Auckland" },
    { name: "Bangladesh", code: "bd", timezone: "Asia/Dhaka" },
    { name: "Qatar", code: "qa", timezone: "Asia/Qatar" },
    { name: "Kuwait", code: "kw", timezone: "Asia/Kuwait" },
    { name: "Morocco", code: "ma", timezone: "Africa/Casablanca" },
    { name: "Kazakhstan", code: "kz", timezone: "Asia/Almaty" },
    { name: "Algeria", code: "dz", timezone: "Africa/Algiers" },
    { name: "Iraq", code: "iq", timezone: "Asia/Baghdad" },
    { name: "Ecuador", code: "ec", timezone: "America/Guayaquil" },
    { name: "Oman", code: "om", timezone: "Asia/Muscat" },
    { name: "Cuba", code: "cu", timezone: "America/Havana" },
    { name: "Croatia", code: "hr", timezone: "Europe/Zagreb" },
    { name: "Bulgaria", code: "bg", timezone: "Europe/Sofia" },
    { name: "Belarus", code: "by", timezone: "Europe/Minsk" },
    { name: "Slovakia", code: "sk", timezone: "Europe/Bratislava" },
    { name: "Serbia", code: "rs", timezone: "Europe/Belgrade" },
    { name: "Lithuania", code: "lt", timezone: "Europe/Vilnius" },
    { name: "Slovenia", code: "si", timezone: "Europe/Ljubljana" },
    { name: "Latvia", code: "lv", timezone: "Europe/Riga" },
    { name: "Estonia", code: "ee", timezone: "Europe/Tallinn" },
    { name: "Uruguay", code: "uy", timezone: "America/Montevideo" },
    { name: "Dominican Republic", code: "do", timezone: "America/Santo_Domingo" },
    { name: "Guatemala", code: "gt", timezone: "America/Guatemala" },
    { name: "Costa Rica", code: "cr", timezone: "America/Costa_Rica" },
    { name: "Panama", code: "pa", timezone: "America/Panama" },
    { name: "Lebanon", code: "lb", timezone: "Asia/Beirut" },
    { name: "Sri Lanka", code: "lk", timezone: "Asia/Colombo" },
    { name: "Jordan", code: "jo", timezone: "Asia/Amman" },
    { name: "Tunisia", code: "tn", timezone: "Africa/Tunis" },
    { name: "Azerbaijan", code: "az", timezone: "Asia/Baku" },
    { name: "Bahrain", code: "bh", timezone: "Asia/Bahrain" },
    { name: "Cyprus", code: "cy", timezone: "Asia/Nicosia" },
    { name: "Georgia", code: "ge", timezone: "Asia/Tbilisi" },
    { name: "Iceland", code: "is", timezone: "Atlantic/Reykjavik" },
    { name: "Paraguay", code: "py", timezone: "America/Asuncion" },
    { name: "Bolivia", code: "bo", timezone: "America/La_Paz" },
    { name: "Honduras", code: "hn", timezone: "America/Tegucigalpa" },
    { name: "El Salvador", code: "sv", timezone: "America/El_Salvador" },
    { name: "Nicaragua", code: "ni", timezone: "America/Managua" },
    { name: "Cambodia", code: "kh", timezone: "Asia/Phnom_Penh" },
    { name: "Myanmar", code: "mm", timezone: "Asia/Yangon" },
    { name: "Nepal", code: "np", timezone: "Asia/Kathmandu" },
    { name: "Mongolia", code: "mn", timezone: "Asia/Ulaanbaatar" },
    { name: "Armenia", code: "am", timezone: "Asia/Yerevan" },
    { name: "Jamaica", code: "jm", timezone: "America/Jamaica" },
    { name: "Trinidad and Tobago", code: "tt", timezone: "America/Port_of_Spain" },
    { name: "Zimbabwe", code: "zw", timezone: "Africa/Harare" },
    { name: "Uganda", code: "ug", timezone: "Africa/Kampala" },
    { name: "Kenya", code: "ke", timezone: "Africa/Nairobi" }
];

// DOM Elements
const flagsContainer = document.getElementById('flagsContainer');
const searchInput = document.getElementById('searchInput');
const viewToggle = document.getElementById('viewToggle');
const sizeToggle = document.getElementById('sizeToggle');
const currentYear = document.getElementById('currentYear');

// App State
let currentView = 'grid';
let currentSize = 'normal';

// Initialize the app
function init() {
    // Set current year in footer
    currentYear.textContent = new Date().getFullYear();
    
    // Render all flags
    renderFlags(countries);
    
    // Set up event listeners
    searchInput.addEventListener('input', handleSearch);
    viewToggle.addEventListener('click', toggleView);
    sizeToggle.addEventListener('click', toggleSize);
    
    // Start time updates
    startTimeUpdates();
}

// Render flags to the DOM
function renderFlags(countriesToRender) {
    flagsContainer.innerHTML = '';
    
    countriesToRender.forEach((country, index) => {
        const flagCard = document.createElement('div');
        flagCard.className = `flag-card`;
        flagCard.style.animationDelay = `${index * 0.05}s`;
        
        const timeData = getCurrentTimeForTimezone(country.timezone);
        
        flagCard.innerHTML = `
            <div class="flag-image">
                <img src="https://flagcdn.com/w160/${country.code}.png" alt="${country.name} flag" loading="lazy">
            </div>
            <div class="flag-info">
                <h3 class="country-name">${country.name}</h3>
                <div class="country-time" data-timezone="${country.timezone}">${timeData.time}</div>
                <div class="country-date" data-timezone="${country.timezone}">${timeData.date}</div>
            </div>
        `;
        
        flagsContainer.appendChild(flagCard);
    });
}

// Get current time for a timezone
function getCurrentTimeForTimezone(timezone) {
    const options = {
        timeZone: timezone,
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    
    const dateOptions = {
        timeZone: timezone,
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    
    const time = new Date().toLocaleTimeString('en-US', options);
    const date = new Date().toLocaleDateString('en-US', dateOptions);
    
    return { time, date };
}

// Update all times
function updateAllTimes() {
    const timeElements = document.querySelectorAll('.country-time');
    const dateElements = document.querySelectorAll('.country-date');
    
    timeElements.forEach(element => {
        const timezone = element.getAttribute('data-timezone');
        const timeData = getCurrentTimeForTimezone(timezone);
        element.textContent = timeData.time;
    });
    
    dateElements.forEach(element => {
        const timezone = element.getAttribute('data-timezone');
        const timeData = getCurrentTimeForTimezone(timezone);
        element.textContent = timeData.date;
    });
}

// Start time updates every second
function startTimeUpdates() {
    updateAllTimes();
    setInterval(updateAllTimes, 1000);
}

// Handle search input
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    
    if (searchTerm === '') {
        renderFlags(countries);
        return;
    }
    
    const filteredCountries = countries.filter(country => 
        country.name.toLowerCase().includes(searchTerm) || 
        country.code.toLowerCase().includes(searchTerm)
    );
    
    renderFlags(filteredCountries);
}

// Toggle between grid and list view
function toggleView() {
    if (currentView === 'grid') {
        flagsContainer.classList.add('list-view');
        viewToggle.textContent = 'Grid View';
        currentView = 'list';
    } else {
        flagsContainer.classList.remove('list-view');
        viewToggle.textContent = 'List View';
        currentView = 'grid';
    }
}

// Toggle between normal and compact size
function toggleSize() {
    if (currentSize === 'normal') {
        flagsContainer.classList.add('compact-size');
        sizeToggle.textContent = 'Normal Size';
        currentSize = 'compact';
    } else {
        flagsContainer.classList.remove('compact-size');
        sizeToggle.textContent = 'Compact Size';
        currentSize = 'normal';
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);