const textarea = document.getElementById('textarea');
const charCount = document.getElementById('charCount');

textarea.addEventListener('input', function() {
    const count = textarea.value.length;
    charCount.textContent = `${count} character${count !== 1 ? 's' : ''}`;
});