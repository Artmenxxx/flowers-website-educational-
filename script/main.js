// Language toggle button event listener
document.getElementById('languageBtn').addEventListener('click', function() {
    const currentLang = this.textContent;
    if (currentLang === 'EN') {
        this.textContent = 'RU';
        translateToRussian();
    } else {
        this.textContent = 'EN';
        translateToEnglish();
    }
});
// Function to translate content to Russian
function translateToRussian() {
    // Navbar
    const navbarBrand = document.querySelector('.navbar-brand');
    if (navbarBrand) navbarBrand.textContent = 'Цветочный магазин';
    const navLinks = document.querySelectorAll('.nav-link');
    if (navLinks.length >= 3) {
        navLinks[0].textContent = 'Главная';
        navLinks[1].textContent = 'Ссылка';
        navLinks[2].textContent = 'Ссылка';
    }
    // Main Content
    const h1 = document.querySelector('h1');
    if (h1) h1.textContent = 'Добро пожаловать в наш цветочный магазин';
    const mainInfo = document.querySelector('.main_info');
    if (mainInfo) mainInfo.textContent = 'Ваш универсальный магазин для всего, что связано с цветами!';
    // About Us Section
    const infoUsH2 = document.querySelector('.info_us h2');
    if (infoUsH2) infoUsH2.textContent = 'О нас';
    const infoUsP = document.querySelector('.info_us p');
    if (infoUsP) infoUsP.textContent = 'В нашем цветочном магазине мы стремимся приносить красоту цветов в вашу жизнь. Независимо от того, ищете ли вы потрясающий букет для особого случая или просто хотите поднять настроение, мы вам поможем.';
    // Products Section
    const carouselH2 = document.querySelector('.carousel h2');
    if (carouselH2) carouselH2.textContent = 'Наши продукты';
    const productName1 = document.querySelector('.product-name:nth-of-type(1)');
    if (productName1) productName1.textContent = 'Букет из роз';
    const productDesc1 = document.querySelector('.product-description:nth-of-type(1)');
    if (productDesc1) productDesc1.textContent = 'Свежие красные розы для любого случая.';
    
    const productName2 = document.querySelector('.product-name:nth-of-type(2)');
    if (productName2) productName2.textContent = 'Тюльпановая композиция';
    const productDesc2 = document.querySelector('.product-description:nth-of-type(2)');
    if (productDesc2) productDesc2.textContent = 'Яркие и красочные тюльпаны, чтобы скрасить ваш день.';

    const productName3 = document.querySelector('.product-name:nth-of-type(3)');
    if (productName3) productName3.textContent = 'Корзина с цветами';
    const productDesc3 = document.querySelector('.product-description:nth-of-type(3)');
    if (productDesc3) productDesc3.textContent = 'Красивый микс сезонных цветов.';
    // Contact Us Section
    const contactUsH2 = document.querySelector('.contact_us h2');
    if (contactUsH2) contactUsH2.textContent = 'Свяжитесь с нами';
    const contactPs = document.querySelectorAll('.contact_us p');
    if (contactPs.length >= 2) {
        contactPs[0].textContent = 'Если у вас есть вопросы или вы хотите сделать заказ, пожалуйста, свяжитесь с нами!';
        contactPs[1].textContent = 'Электронная почта: info@flowershop.com';
    }
    const footerInfo = document.querySelector('.footer_info');
    // Footer
    if (footerInfo) footerInfo.textContent = '© 2024 Цветочный магазин. Все права защищены.';
}
// Function to translate content to English
function translateToEnglish() {
    document.querySelector('.navbar-brand').textContent = 'Flower_shop';
    document.querySelectorAll('.nav-link')[0].textContent = 'Home';
    document.querySelectorAll('.nav-link')[1].textContent = 'Link';
    document.querySelectorAll('.nav-link')[2].textContent = 'Link';

    document.querySelector('h1').textContent = 'Welcome to Flower Shop'; 
    document.querySelector('.main_info').textContent = 'Your one-stop shop for all things floral!';

    document.querySelector('.info_us h2').textContent = 'About Us';
    document.querySelector('.info_us p').textContent = 'At Flower Shop, we are passionate about bringing the beauty of flowers into your life. Whether you\'re looking for a stunning bouquet for a special occasion or just want to brighten up your day, we\'ve got you covered.';

    document.querySelector('.carousel h2').textContent = 'Our Products';
    document.querySelector('.product-name:nth-of-type(1)').textContent = 'Rose Bouquet';
    document.querySelector('.product-description:nth-of-type(1)').textContent = 'Fresh red roses for every occasion.';

    document.querySelector('.product-name:nth-of-type(2)').textContent = 'Tulip Arrangement';
    document.querySelector('.product-description:nth-of-type(2)').textContent = 'Bright and colorful tulips to brighten your day.';

    document.querySelector('.product-name:nth-of-type(3)').textContent = 'Mixed Flower Basket';
    document.querySelector('.product-description:nth-of-type(3)').textContent = 'A beautiful mix of seasonal flowers.';

    document.querySelector('.contact_us h2').textContent = 'Contact Us';
    const contactPsEn = document.querySelectorAll('.contact_us p');
    if (contactPsEn.length >= 2) {
        contactPsEn[0].textContent = 'If you have any questions or would like to place an order, please don\'t hesitate to reach out!';
        contactPsEn[1].textContent = 'Email: info@flowershop.com';
    }
    document.querySelector('.footer_info').textContent = '© 2024 Flower Shop. All rights reserved.';
}