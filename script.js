// تشغيل أنميشن الظهور
AOS.init({ duration: 1000 });

// حركة الماوس
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// تأثير الضغط (Click effect)
document.addEventListener('mousedown', () => {
    cursor.style.transform = 'scale(0.5)';
});
document.addEventListener('mouseup', () => {
    cursor.style.transform = 'scale(1)';
});

// محاكاة تحميل بيانات (عشان يبان إن فيه PHP وكدة)
console.log("PHP Script Initialized...");
console.log("C++ Core Engine Running...");

// تتبع حركة الماوس داخل الكروت لعمل تأثير 3D
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
    });
});
