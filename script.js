document.getElementById('social').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    if (value.length > 9) value = value.slice(0, 9); // Limit to 9 digits

    let formatted = '';
    if (value.length > 5) {
        formatted = `${value.slice(0,3)}-${value.slice(3,5)}-${value.slice(5)}`;
    } else if (value.length > 3) {
        formatted = `${value.slice(0,3)}-${value.slice(3)}`;
    } else {
        formatted = value;
    }

    e.target.value = formatted;
});
