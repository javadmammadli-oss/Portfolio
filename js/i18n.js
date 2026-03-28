// =============================================
// i18n.js — Dil dəyişimi (AZ / EN) + backend settings override
// =============================================

var I18N = {
  az: {
    hero_title:       'Bele usta olarmi-Paputi',
    hero_subtitle:    'Komandamız müasir trendlər əsasında eksklüziv dizayn yaradır',
    hero_btn_primary: 'Dizayn Konsepti Sifariş Et',
    hero_btn_outline: 'Konsultasiya',

    concepts_title: 'Dizayn Konseptləri',
    concepts_desc:  'Hər layihə unikal hekayədir. Biz sizin ideyalarınızı gözəl məkanlara çeviririk — funksionallıq və estetikanı birləşdirərək.',

    services_title: 'Xidmətlər',
    service1_title: 'Dizayn Layihəsi',
    service1_desc:  'Tam dizayn paketi: planlaşdırma, 3D vizualizasiya, texniki sənədlər.',
    service2_title: 'Avtorluq Nəzarəti',
    service2_desc:  'Tikinti prosesinin hər mərhələsini dizayner nəzarəti altında idarə edirik.',
    service3_title: 'Dekorasiya',
    service3_desc:  'Mebel seçimi, işıqlandırma, tekstil və aksesuarlarla məkanı tamamlayırıq.',
    service4_title: 'Konsultasiya',
    service4_desc:  'Bir saatlıq peşəkar konsultasiya — suallarınıza cavab, tövsiyələr.',

    services_cta_btn: 'Sifariş Ver',

    process_title:   'İş Prosesi',
    process_desc:    'Hər layihə 5 mərhələdən keçir — ilk görüşdən tutmuş son nəticəyə qədər sizi müşayiət edirik.',
    process_stage1:  'Mərhələ I',
    process_stage2:  'Mərhələ II',
    process_stage3:  'Mərhələ III',
    process_stage4:  'Mərhələ IV',
    process_stage5:  'Mərhələ V',
    process_step1a:  'İlkin görüş',
    process_step1b:  'Brief',
    process_step2a:  'Konsept',
    process_step2b:  'Moodboard',
    process_step3a:  'Layihə',
    process_step3b:  '3D vizual',
    process_step4a:  'Reallaşdırma',
    process_step4b:  'Nəzarət',
    process_step5a:  'Nəticə',
    process_step5b:  'Təhvil',

    about_quote: 'Hər məkan bir hekayə danışır — bizim işimiz onu düzgün danışmaqdır',
    about_desc:  '10 ildən artıq təcrübə ilə müştərilərimizin arzularını reallığa çeviririk. Hər layihə unikaldır, hər dizayn fərdidir.',

    features_title: 'Dizayn Paketinə Nə Daxildir',
    features_desc:  'Sifariş verdikdən sonra tam layihə paketi əldə edirsiniz — planlardan tutmuş son detallaradək.',
    feature1:       '3D vizualizasiya (bütün otaqlar)',
    feature2:       'Planlaşdırma sxemi',
    feature3:       'Material və rəng palitrasısı',
    feature4:       'Mebel seçimi siyahısı',
    feature5:       'Texniki sənədlər',
    feature6:       'Avtorluq nəzarəti',
    features_btn:   'Sifariş Ver',

    contacts_title:  'Əlaqə',
    form_name:       'Ad Soyad',
    form_phone:      'Telefon nömrəsi',
    form_message:    'Mesajınız',
    form_submit:     'Mesaj Göndər ✉',
    form_success:    'Mesajınız göndərildi! Tezliklə əlaqə saxlayacağıq.',
    form_err_name:   'Ad tələb olunur',
    form_err_phone:  'Düzgün telefon daxil edin',

    hours_title:    'İş Saatları',
    hours_weekday:  'Bazar ertəsi – Cümə: 10:00 – 18:00',
    hours_saturday: 'Şənbə: 10:00 – 15:00',
    phone_label:    'Telefon',
    email_label:    'Email',
    social_label:   'Sosial Şəbəkələr',

    footer_copy: '© 2026 Oksana Ivanova. Bütün hüquqlar qorunur.',
    page_title:  'Portfolio — Interior Dizayn Studiyası'
  },

  en: {
    hero_title:       'Excellence in Interior Design',
    hero_subtitle:    'Our team creates exclusive designs based on modern trends',
    hero_btn_primary: 'Order a Design Concept',
    hero_btn_outline: 'Consultation',

    concepts_title: 'Design Concepts',
    concepts_desc:  'Each project is a unique story. We transform your ideas into beautiful spaces — combining functionality and aesthetics.',

    services_title: 'Services',
    service1_title: 'Design Project',
    service1_desc:  'Full design package: planning, 3D visualization, technical documentation.',
    service2_title: 'Author Supervision',
    service2_desc:  'We manage every stage of construction under designer supervision.',
    service3_title: 'Decoration',
    service3_desc:  'Furniture selection, lighting, textiles and accessories to complete the space.',
    service4_title: 'Consultation',
    service4_desc:  'One-hour professional consultation — answers to your questions, recommendations.',

    services_cta_btn: 'Order Now',

    process_title:   'Work Process',
    process_desc:    'Every project goes through 5 stages — we accompany you from the first meeting to the final result.',
    process_stage1:  'Stage I',
    process_stage2:  'Stage II',
    process_stage3:  'Stage III',
    process_stage4:  'Stage IV',
    process_stage5:  'Stage V',
    process_step1a:  'First meeting',
    process_step1b:  'Brief',
    process_step2a:  'Concept',
    process_step2b:  'Moodboard',
    process_step3a:  'Design',
    process_step3b:  '3D visual',
    process_step4a:  'Implementation',
    process_step4b:  'Supervision',
    process_step5a:  'Result',
    process_step5b:  'Handover',

    about_quote: 'Every space tells a story — our job is to tell it right',
    about_desc:  'With over 10 years of experience, we turn our clients\' dreams into reality. Every project is unique, every design is personal.',

    features_title: 'What\'s Included in the Design Package',
    features_desc:  'After placing your order, you receive a complete project package — from floor plans to the last detail.',
    feature1:       '3D visualization (all rooms)',
    feature2:       'Floor planning scheme',
    feature3:       'Materials & colour palette',
    feature4:       'Furniture selection list',
    feature5:       'Technical documentation',
    feature6:       'Author supervision',
    features_btn:   'Order Now',

    contacts_title:  'Contact',
    form_name:       'Full Name',
    form_phone:      'Phone number',
    form_message:    'Your message',
    form_submit:     'Send a Message ✉',
    form_success:    'Your message has been sent! We will contact you soon.',
    form_err_name:   'Name is required',
    form_err_phone:  'Please enter a valid phone number',

    hours_title:    'Working Hours',
    hours_weekday:  'Monday – Friday: 10:00 – 18:00',
    hours_saturday: 'Saturday: 10:00 – 15:00',
    phone_label:    'Phone',
    email_label:    'Email',
    social_label:   'Social Media',

    footer_copy: '© 2026 Oksana Ivanova. All rights reserved.',
    page_title:  'Portfolio — Interior Design Studio'
  }
};

// Backend settings-dən override olunan açarlar (AZ suffix yoxdur, EN suffix _en)
var SETTINGS_KEYS = [
  'hero_title', 'hero_subtitle',
  'concepts_title', 'concepts_desc',
  'process_title', 'process_desc',
  'about_quote', 'about_desc',
  'features_title', 'features_desc',
  'hours_title', 'hours_weekday', 'hours_saturday'
];

window.currentLang = 'az';

window.applyLang = function applyLang(lang) {
  var t = I18N[lang] || I18N.az;
  window.currentLang = lang;

  // 1. Statik tərcümələri tətbiq et
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // 2. Backend settings ilə override et
  if (window._siteSettings) {
    var isEn = lang === 'en';
    SETTINGS_KEYS.forEach(function (key) {
      var settingKey = isEn ? key + '_en' : key;
      var val = window._siteSettings[settingKey];
      if (val) {
        document.querySelectorAll('[data-i18n="' + key + '"]').forEach(function (el) {
          el.textContent = val;
        });
      }
    });

    // Səhifə başlığı
    var titleKey = isEn ? 'site_title_en' : 'site_title';
    if (window._siteSettings[titleKey]) {
      document.title = window._siteSettings[titleKey];
    } else if (t.page_title) {
      document.title = t.page_title;
    }
  } else if (t.page_title) {
    document.title = t.page_title;
  }

  // 3. Placeholder-lər
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // 4. html lang atributu
  document.documentElement.lang = lang;

  // 5. Aktiv dil düyməsini yenilə
  document.querySelectorAll('[data-lang]').forEach(function (el) {
    el.classList.toggle('active', el.getAttribute('data-lang') === lang);
  });

  // 6. localStorage-ə yaz
  try { localStorage.setItem('lang', lang); } catch (e) {}
};

document.addEventListener('DOMContentLoaded', function () {
  // Dil keçid düymələri
  document.querySelectorAll('[data-lang]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      window.applyLang(el.getAttribute('data-lang'));
    });
  });

  // Başlanğıc dili: URL param → localStorage → default 'az'
  var params = new URLSearchParams(window.location.search);
  var lang = params.get('lang') || (function () {
    try { return localStorage.getItem('lang'); } catch (e) { return null; }
  })() || 'az';

  window.applyLang(lang);
});
