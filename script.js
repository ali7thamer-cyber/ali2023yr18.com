document.getElementById('lang-toggle-btn').addEventListener('click', function () {
    const htmlTag = document.documentElement;
    const currentLang = htmlTag.getAttribute('lang');

    if (currentLang === 'ar') {
        // التحويل إلى الإنجليزية
        htmlTag.setAttribute('lang', 'en');
        htmlTag.setAttribute('dir', 'ltr');
        this.textContent = 'AR';

        // تحويل الاسم والوصف
        if (document.getElementById('profile-name')) document.getElementById('profile-name').textContent = document.getElementById('profile-name').getAttribute('data-en');
        if (document.getElementById('profile-title')) document.getElementById('profile-title').textContent = document.getElementById('profile-title').getAttribute('data-en');

        // تحويل الأزرار مع الحفاظ على الأيقونات
        if (document.getElementById('btn-telegram')) document.getElementById('btn-telegram').innerHTML = '<i class="fab fa-telegram-plane"></i> ' + document.getElementById('btn-telegram').getAttribute('data-en');
        if (document.getElementById('btn-instagram')) document.getElementById('btn-instagram').innerHTML = '<i class="fab fa-instagram"></i> ' + document.getElementById('btn-instagram').getAttribute('data-en');
        if (document.getElementById('btn-whatsapp')) document.getElementById('btn-whatsapp').innerHTML = '<i class="fab fa-whatsapp"></i> ' + document.getElementById('btn-whatsapp').getAttribute('data-en');
        if (document.getElementById('btn-email')) document.getElementById('btn-email').innerHTML = '<i class="fas fa-envelope"></i> ' + document.getElementById('btn-email').getAttribute('data-en');

        // زر لينكد إن
        if (document.getElementById('btn-linkedin')) {
            document.getElementById('btn-linkedin').innerHTML = '<i class="fab fa-linkedin-in"></i> ' + document.getElementById('btn-linkedin').getAttribute('data-en');
        }

    } else {
        // العودة إلى العربية
        htmlTag.setAttribute('lang', 'ar');
        htmlTag.setAttribute('dir', 'rtl');
        this.textContent = 'EN';

        // إعادة الاسم والوصف
        if (document.getElementById('profile-name')) document.getElementById('profile-name').textContent = document.getElementById('profile-name').getAttribute('data-ar');
        if (document.getElementById('profile-title')) document.getElementById('profile-title').textContent = document.getElementById('profile-title').getAttribute('data-ar');

        // إعادة الأزرار للعربية
        if (document.getElementById('btn-telegram')) document.getElementById('btn-telegram').innerHTML = '<i class="fab fa-telegram-plane"></i> ' + document.getElementById('btn-telegram').getAttribute('data-ar');
        if (document.getElementById('btn-instagram')) document.getElementById('btn-instagram').innerHTML = '<i class="fab fa-instagram"></i> ' + document.getElementById('btn-instagram').getAttribute('data-ar');
        if (document.getElementById('btn-whatsapp')) document.getElementById('btn-whatsapp').innerHTML = '<i class="fab fa-whatsapp"></i> ' + document.getElementById('btn-whatsapp').getAttribute('data-ar');
        if (document.getElementById('btn-email')) document.getElementById('btn-email').innerHTML = '<i class="fas fa-envelope"></i> ' + document.getElementById('btn-email').getAttribute('data-ar');

        // زر لينكد إن
        if (document.getElementById('btn-linkedin')) {
            document.getElementById('btn-linkedin').innerHTML = '<i class="fab fa-linkedin-in"></i> ' + document.getElementById('btn-linkedin').getAttribute('data-ar');
        }
    }
});
