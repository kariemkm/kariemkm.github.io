// تفعيل الأنيميشن
AOS.init({ duration: 1000, once: true });

// التحكم في الماوس
const cursor = document.getElementById('cursor');
let isCursorEnabled = true;

document.addEventListener('mousemove', (e) => {
    if(!isCursorEnabled) return;
    cursor.style.left = e.clientX - 12 + 'px';
    cursor.style.top = e.clientY - 12 + 'px';
});

// تأثيرات الماوس على العناصر
function addCursorEvents() {
    document.querySelectorAll('a, button, .card, .close-btn').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.style.transform = 'scale(3)');
        el.addEventListener('mouseleave', () => cursor.style.transform = 'scale(1)');
    });
}
addCursorEvents();

// لوحة الإعدادات
const settingsToggle = document.getElementById('settingsToggle');
const settingsPanel = document.getElementById('settingsPanel');

settingsToggle.addEventListener('click', () => {
    settingsPanel.classList.toggle('active');
});

// تغيير اللون الأساسي
function changeColor(color) {
    document.documentElement.style.setProperty('--primary', color);
    document.documentElement.style.setProperty('--primary-glow', color + '4d'); // إضافة شفافية للتوهج
}

// تشغيل/إيقاف الماوس
function toggleCursor() {
    isCursorEnabled = !isCursorEnabled;
    cursor.style.display = isCursorEnabled ? 'block' : 'none';
    document.body.style.cursor = isCursorEnabled ? 'none' : 'auto';
}

// وظائف الـ Popup
function openPopup(title, img, desc) {
    document.getElementById('popupTitle').innerText = title;
    document.getElementById('popupImg').src = img;
    document.getElementById('popupDesc').innerText = desc;
    document.getElementById('projectPopup').style.display = 'block';
    document.body.style.overflow = 'hidden'; // منع السكرول
}

function closePopup() {
    document.getElementById('projectPopup').style.display = 'none';
    document.body.style.overflow = 'auto';
}
