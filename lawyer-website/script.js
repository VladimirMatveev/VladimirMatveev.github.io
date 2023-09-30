<script>
    // Инициализация карты
    var map = L.map('map').setView([51.505, -0.09], 13); // Установите координаты и масштаб

    // Добавление слоя OSM
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
</script>