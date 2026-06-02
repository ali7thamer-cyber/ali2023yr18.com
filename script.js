document.getElementById('lang-toggle-btn').addEventListener('click', function() {
    const htmlTag = document.documentElement;
    const currentLang = htmlTag.getAttribute('lang');
    
    if (currentLang === 'ar') {
        // التحويل إلى اللغة الإنجليزية
        htmlTag.setAttribute('lang', 'en');
        htmlTag.setAttribute('dir', 'ltr'); // قلب اتجاه الموقع لليسار
        this.textContent = 'AR'; // تحويل نص الزر العلوي
        
        // تحويل الاسم والوصف
        document.getElementById('profile-name').textContent = document.getElementById('profile-name').getAttribute('data-en');
        document.getElementById('profile-title').textContent = document.getElementById('profile-title').getAttribute('data-en');
        
        // تحويل نصوص الأزرار مع الحفاظ على الأيقونة داخلها
        document.getElementById('btn-telegram').innerHTML = '<i class="fab fa-telegram-plane"></i> ' + document.getElementById('btn-telegram').getAttribute('data-en');
        document.getElementById('btn-instagram').innerHTML = '<i class="fab fa-instagram"></i> ' + document.getElementById('btn-instagram').getAttribute('data-en');
        document.getElementById('btn-whatsapp').innerHTML = '<i class="fab fa-whatsapp"></i> ' + document.getElementById('btn-whatsapp').getAttribute('data-en');
        document.getElementById('btn-email').innerHTML = '<i class="fas fa-envelope"></i> ' + document.getElementById('btn-email').getAttribute('data-en');
        
    } else {
        // العودة إلى اللغة العربية
        htmlTag.setAttribute('lang', 'ar');
        htmlTag.setAttribute('dir', 'rtl'); // إعادة اتجاه الموقع لليمين
        this.textContent = 'EN'; // تحويل نص الزر العلوي
        
        // إعادة الاسم والوصف للعربي
        document.getElementById('profile-name').textContent = document.getElementById('profile-name').getAttribute('data-ar');
        document.getElementById('profile-title').textContent = document.getElementById('profile-title').getAttribute('data-ar');
        
        // إعادة نصوص الأزرار للعربي مع الأيقونة
        document.getElementById('btn-telegram').innerHTML = '<i class="fab fa-telegram-plane"></i> ' + document.getElementById('btn-telegram').getAttribute('data-ar');
        document.getElementById('btn-instagram').innerHTML = '<i class="fab fa-instagram"></i> ' + document.getElementById('btn-instagram').getAttribute('data-ar');
        document.getElementById('btn-whatsapp').innerHTML = '<i class="fab fa-whatsapp"></i> ' + document.getElementById('btn-whatsapp').getAttribute('data-ar');
        document.getElementById('btn-email').innerHTML = '<i class="fas fa-envelope"></i> ' + document.getElementById('btn-email').getAttribute('data-ar');
    }
});