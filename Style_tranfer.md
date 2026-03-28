# Design Style Transfer: oksanaivanova.com → Mənin Saytım

Bu sənəd **oksanaivanova.com** saytının tam dizayn sistemini sənədləşdirir.
Aşağıdakı bütün dəyərləri öz saytına tətbiq et.

---

## 1. TİPOQRAFİYA

### Font Ailəsi
```css
font-family: 'Proxima Nova', sans-serif;
/* Google Fonts alternativi: 'Nunito Sans' və ya 'Montserrat' */
```

### Font Çəkiləri (weights)
```css
font-weight: 300;  /* Light — bütün başlıqlar (H1, H2, H3) */
font-weight: 400;  /* Regular — body text, nav */
font-weight: 600;  /* SemiBold — address, contacts */
font-weight: 700;  /* Bold — düymə mətnləri */
```

### Tipografik Miqyas (Type Scale)
```css
/* Body / Base */
body {
  font-size: 15px;
  font-weight: 400;
  line-height: 21px;  /* 1.4 */
  color: #000000;
}

/* H1 — Hero başlığı */
h1 {
  font-size: 60px;
  font-weight: 300;
  line-height: 0.83;  /* ~50px */
  color: #ffffff;     /* hero-da həmişə ağ */
}

/* H2 — Bölmə başlıqları */
h2 {
  font-size: 48px;
  font-weight: 300;
  line-height: 1.2;
  color: #000000;    /* açıq fonda qara */
}
/* Qaranlıq fonda: color: #ffffff */

/* H3 — Kart/xidmət başlıqları */
h3 {
  font-size: 36px;
  font-weight: 300;
  line-height: 1.2;
  color: #ffffff;    /* dark section-larda ağ */
}

/* H4 — Alt başlıqlar */
h4 {
  font-size: 24px;
  font-weight: 300;
}

/* Naviqasiya linkləri */
nav a {
  font-size: 15px;
  font-weight: 400;
  text-transform: none;
  letter-spacing: normal;
}

/* Form input-ları */
input, textarea {
  font-size: 18px;
  font-family: inherit;
}

/* Ünvan / Kontakt məlumatları */
.contact-info {
  font-size: 18px;
  font-weight: 600;
  line-height: 1.1;
}
```

---

## 2. RƏNG PALETRİ

```css
/* === ANA RƏNGLƏR === */
--color-primary:     #FFFC00;   /* Sarı accent — primary düymə */
--color-primary-hover: #FFFEB3; /* Sarı hover — açıq sarı */
--color-text-dark:   #000000;   /* Qara mətn — açıq fonlarda */
--color-text-light:  #FFFFFF;   /* Ağ mətn — qaranlıq fonlarda */
--color-bg-white:    #FFFFFF;   /* Ağ fon */
--color-bg-light:    #F5F5F5;   /* Açıq boz fon (What you get bölməsi) */
--color-bg-black:    #000000;   /* Qara (footer, dark düymələr) */

/* === OVERLAY-LƏR === */
--overlay-hero:      rgba(0, 0, 0, 0.40);  /* Hero şəkil üzərindəki qaranlıq örtük */
--overlay-services:  rgba(0, 0, 0, 0.60);  /* Xidmətlər bölməsi üzərindəki örtük */

/* === BORDER / XƏTT RƏNGLƏRİ === */
--border-light:      rgba(0, 0, 0, 0.20);  /* Açıq fonda incə kənar */
--border-dark:       rgba(255, 255, 255, 0.20); /* Qaranlıq fonda incə kənar */
--border-solid:      rgba(0, 0, 0, 0.40);  /* Kontakt linkləri underline */
```

---

## 3. DÜYMƏLƏR (Buttons)

### Əsas Düymə Stili (Base)
```css
.btn {
  font-size: 18px;
  font-weight: 700;
  font-family: inherit;
  line-height: 0.7;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  padding: 18px 35px 19px;   /* üst: 18px, yan: 35px, alt: 19px */
  border-radius: 25px;        /* tam dairəvi uçlar */
  height: 50px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  transition: background-color 0.3s, border 0.3s;
  cursor: pointer;
}

.btn:focus {
  outline: none;
}

/* İkinci düymə (yan-yana olduqda) boşluq */
.btn + .btn {
  margin-left: 37px;
}
```

### Düymə Növləri
```css
/* PRIMARY — Sarı düymə (açıq fonlarda) */
.btn-primary {
  color: #000000;
  background-color: #FFFC00;
  border: none;
}
.btn-primary:hover {
  background-color: #FFFEB3;
}

/* GHOST — Şəffaf, ağ kənar (qaranlıq fonlarda) */
.btn-ghost {
  color: #ffffff;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.btn-ghost:hover {
  background-color: rgba(255, 255, 255, 0.2);
  border-color: transparent;
}

/* GHOST REVERSE — Şəffaf, qara kənar (açıq fonlarda) */
.btn-ghost-reverse {
  color: #000000;
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.2);
}
.btn-ghost-reverse:hover {
  background-color: rgba(0, 0, 0, 0.08);
}

/* DARK — Qara düymə (form submit, "What you get" bölməsi) */
.btn-dark {
  color: #ffffff;
  background-color: #000000;
  border: none;
}
.btn-dark:hover {
  background-color: #333333;
}
```

### Hero Bölməsindəki Düymə Kombinasiyası
```html
<!-- Hero-da: Primary + Ghost yan-yana -->
<button class="btn btn-primary">Sifariş ver</button>
<button class="btn btn-ghost">Konsultasiya</button>
```

---

## 4. LAYOUT / ÖLÇÜLƏR

### Container
```css
.container {
  padding: 0 30px;
  margin: 0 auto;
  /* max-width saytın ölçüsünə görə: 1200px tövsiyə edilir */
  max-width: 1200px;
}
```

### Bölmə (Section) Boşluqları
```css
/* Ümumi bölmə paddinqi */
.section {
  padding: 60px 0;
}

/* Hero bölməsi */
.section-hero {
  padding-top: 130px;
  padding-bottom: 120px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}

/* Portfolio bölməsi — padding yoxdur */
.section-portfolio {
  padding: 0;
}
```

### Grid Sistemi
```css
/* 2-Sütunlu Portfolio Şəbəkəsi */
.portfolio-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;        /* şəkillər arasında boşluq YOX */
}

/* 3-Sütunlu Xidmətlər Şəbəkəsi */
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  text-align: center;
}

/* 2-Sütunlu "Nə alacaqsınız" bölməsi */
.features-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 40px;
}
```

---

## 5. HEADER / NAVIQASIYA

### Quruluş
```css
/* Header üslubu */
header {
  position: relative;
  z-index: 3;
  margin-bottom: -150px;  /* ← VACIB: hero-nun üzərinə keçir */
  background: transparent;
}
```

### Header İçi Düzülüş
```
[SOL] Logo (top-left)          [SAĞ] Dil | Email | Telefon
```

### Logo Stili
```css
.logo {
  /* Düzbucaqlı çərçivə içərisindəki mətn loqosu */
  display: inline-block;
  border: 1px solid rgba(255, 255, 255, 0.6);  /* ağ kənar, şəffaf */
  padding: 6px 10px;
  color: #ffffff;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  line-height: 1.3;
  text-decoration: none;
}
/* İki sətirli: "BRAND" / "NAME" */
```

### Sağ tərəfdə kontakt məlumatları
```css
.header-contact {
  text-align: right;
  color: #ffffff;
  font-size: 13px;
  font-weight: 400;
}
.header-contact a {
  color: #ffffff;
  text-decoration: none;
  /* Hover-da alt xətt əlavə olunur */
  border-bottom: 1px solid rgba(255, 255, 255, 0);
  transition: border-bottom 0.3s;
}
.header-contact a:hover {
  border-bottom: 1px solid rgba(255, 255, 255, 1);
}
/* Dil switcher (Ukr / Eng) */
.lang-switcher {
  font-size: 13px;
  color: #ffffff;
}
```

---

## 6. HERO BÖLMƏSİ

```css
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url('hero-bg.jpg');
  background-size: cover;
  background-position: center;
}

/* Qaranlıq overlay */
.hero::before {
  content: "";
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-color: rgba(0, 0, 0, 0.40);  /* 40% overlay */
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  padding-top: 130px;
  padding-bottom: 120px;
}

/* H1 — Sol tərəfdə, ağ, yüngül */
.hero h1 {
  font-size: 60px;
  font-weight: 300;
  color: #ffffff;
  max-width: 600px;
  margin-bottom: 20px;
}

/* Subtitle / Açıqlama mətni */
.hero p {
  font-size: 15px;
  color: #ffffff;
  max-width: 550px;
  margin-bottom: 40px;
}

/* Düymələr */
/* btn-primary + btn-ghost yan-yana */
```

---

## 7. PORTFOLIO / LAYİHƏLƏR BÖLMƏSİ

```css
/* Bölmə başlığı (H2) — mərkəzdə */
.section-title {
  font-size: 48px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 15px;
  color: #000000;
}

/* Alt başlıq mətni — mərkəzdə */
.section-subtitle {
  font-size: 15px;
  text-align: center;
  color: #000000;
  max-width: 700px;
  margin: 0 auto 40px;
}

/* Şəkil şəbəkəsi — 2 sütun, boşluqsuz */
.portfolio-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
}

.portfolio-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;  /* boş boşluqları aradan qaldırır */
}
```

---

## 8. XİDMƏTLƏR BÖLMƏSİ (Qaranlıq fon)

```css
/* Arxa şəkil + qaranlıq overlay */
.services-section {
  position: relative;
  background-image: url('services-bg.jpg');
  background-size: cover;
  background-position: center;
  padding: 80px 0;
}

.services-section::before {
  content: "";
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-color: rgba(0, 0, 0, 0.60);  /* 60% overlay */
  z-index: 0;
}

.services-content {
  position: relative;
  z-index: 1;
}

/* H2 başlıq — ağ, mərkəzdə */
.services-section h2 {
  color: #ffffff;
  font-size: 48px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 50px;
}

/* Xidmət kartları — 3 sütun */
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px 30px;
  text-align: center;
}

.service-card {
  /* Şəffaf kart, ağ mətn */
  color: #ffffff;
}

/* Kart ikonu */
.service-card .icon {
  width: 50px;
  height: 50px;
  margin: 0 auto 20px;
  /* SVG icon — ağ rəngdə */
}

/* Kart başlığı */
.service-card h3 {
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 12px;
}

/* Kart açıqlaması */
.service-card p {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.5;
}

/* Altdaki düymə — ghost-reverse stili */
.services-section .btn {
  margin-top: 50px;
  display: block;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
}
```

---

## 9. PROSES / MƏRHƏLƏLƏR BÖLMƏSİ

```css
/* Ağ fon, tam en */
.process-section {
  background: #ffffff;
  padding: 60px 0;
}

/* Mərhələ başlığı */
.process-stage-title {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #000000;
  margin-bottom: 15px;
}

/* Horizontal progress-bar stili xətt */
.process-bar {
  display: flex;
  height: 6px;
  border-radius: 0;
  background: linear-gradient(to right, 
    #8fa5b4 0%, #8fa5b4 33%,    /* teal-gray */
    #6d7d8a 33%, #6d7d8a 66%,   /* mid-gray */
    #5c4a3a 66%, #5c4a3a 100%   /* brown-gray */
  );
  margin-bottom: 15px;
}

/* Addım labels */
.process-steps {
  display: flex;
  justify-content: space-between;
}
.process-step {
  font-size: 13px;
  color: #000000;
  text-align: left;
  max-width: 150px;
}
```

---

## 10. HAQQIMIZDA / QUOTE BÖLMƏSİ (Qaranlıq fon, ağ mətn)

```css
/* Arxa şəkil + overlay */
.about-section {
  position: relative;
  background-image: url('about-bg.jpg');
  background-size: cover;
  background-position: center;
  padding: 100px 0;
}

.about-section::before {
  content: "";
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-color: rgba(0, 0, 0, 0.55);
}

.about-content {
  position: relative;
  z-index: 1;
}

/* Böyük sitat / H2 — sol tərəfdə, ağ, yüngül */
.about-section h2 {
  font-size: 36px;
  font-weight: 300;
  color: #ffffff;
  max-width: 700px;
  line-height: 1.3;
  margin-bottom: 20px;
}

/* Alt mətn */
.about-section p {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.85);
  max-width: 500px;
  line-height: 1.6;
}
```

---

## 11. "NƏ ALACAQSINIZ" BÖLMƏSİ (Açıq boz fon)

```css
.features-section {
  background: #f5f5f5;  /* açıq boz fon */
  padding: 80px 0;
}

/* Başlıq — sol tərəfdə */
.features-section h2 {
  font-size: 36px;
  font-weight: 300;
  color: #000000;
  margin-bottom: 20px;
}

/* Açıqlama mətni */
.features-section > p {
  font-size: 15px;
  max-width: 550px;
  margin-bottom: 40px;
  line-height: 1.6;
}

/* Feature siyahısı — 2 sütunlu grid */
.features-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px 40px;
  margin-bottom: 40px;
}

/* Hər feature item */
.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

/* İkon */
.feature-item .icon {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  opacity: 0.7;
}

/* Feature mətni */
.feature-item span {
  font-size: 15px;
  font-weight: 400;
  color: #000000;
}

/* Sağ tərəfdə kitabça/PDF mockup şəkli */
.features-mockup {
  /* float: right və ya grid sağ sütun */
  max-width: 450px;
}

/* Linkli əlavə məlumat */
.features-link {
  font-size: 13px;
  color: rgba(255, 90, 0, 0.85);  /* narıncı rəng — accent link */
  text-decoration: none;
  border-bottom: 1px solid currentColor;
}
```

---

## 12. KONTAKT BÖLMƏSİ

```css
.contact-section {
  background: #ffffff;
  padding: 80px 0;
}

/* Sol tərəf — Form */
.contact-form-side {
  max-width: 550px;
}

/* Kontakt başlıq */
.contact-section h2 {
  font-size: 48px;
  font-weight: 300;
  color: #000000;
  margin-bottom: 40px;
}

/* Form input-lar — minimalist stil */
.form-field {
  margin-bottom: 20px;
}

.form-control {
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0;
  padding: 8px 0;
  font-size: 18px;
  font-family: inherit;
  color: #000000;
  outline: none;
  transition: border-color 0.3s;
}

.form-control:focus {
  border-bottom-color: #000000;
}

/* Textarea */
textarea.form-control {
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 12px;
  height: 120px;
  resize: vertical;
  font-size: 15px;
}

/* Submit düymə — qara */
.btn-submit {
  background: #000000;
  color: #ffffff;
  border-radius: 25px;
  padding: 15px 30px;
  font-size: 15px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: background 0.3s;
}
.btn-submit:hover {
  background: #333333;
}

/* Sağ tərəf — Kontakt məlumatları */
.contact-info-side {
  padding-left: 60px;
}

.contact-info-text {
  font-size: 15px;
  color: #000000;
  line-height: 1.6;
  margin-bottom: 30px;
}

.contact-hours {
  font-size: 15px;
  color: #000000;
  margin-bottom: 30px;
}

.contact-phone {
  font-size: 24px;
  font-weight: 600;
  color: #000000;
  text-decoration: none;
  display: block;
  margin-bottom: 5px;
}

.contact-email {
  font-size: 18px;
  font-weight: 600;
  color: #000000;
  text-decoration: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  transition: border-color 0.15s;
}
.contact-email:hover {
  border-bottom-color: #000000;
}

/* Sosial media ikonlar */
.social-links {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}
.social-links a {
  color: #000000;
  text-decoration: none;
  font-size: 20px;
}
```

---

## 13. FOOTER

```css
footer {
  background: #000000;
  color: #ffffff;
  padding: 40px 0;
}

footer .logo {
  /* Ağ loqo — tərsinə versiya */
  border-color: rgba(255, 255, 255, 0.6);
  color: #ffffff;
}

footer a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.2s;
}
footer a:hover {
  color: #ffffff;
}
```

---

## 14. KÖNÜLLÜ LİNK STİLLƏRİ

```css
/* Ümumi link hover efekti — alt xətt animasiyası */
a {
  text-decoration: none;
  transition: border-bottom 0.3s;
}

/* Açıq fonda link */
.link-dark {
  color: #000000;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
}
.link-dark:hover {
  border-bottom-color: #000000;
}

/* Qaranlıq fonda link */
.link-light {
  color: #ffffff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
}
.link-light:hover {
  border-bottom-color: #ffffff;
}
```

---

## 15. RESPONSİVLİK — BREAKPOINT-LƏR

```css
/* Mobile First yanaşması */

/* === TABLET: 769px+ === */
@media (min-width: 769px) {
  /* 2-sütunlu layoutlar aktiv */
  .portfolio-grid {
    grid-template-columns: 1fr 1fr;
  }
}

/* === DESKTOP: 1025px+ === */
@media (min-width: 1025px) {
  /* 3-sütunlu xidmətlər aktiv */
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  /* Tam hero ölçüsü */
  h1 { font-size: 60px; }
}

/* === LARGE DESKTOP: 1441px+ === */
@media (min-width: 1441px) {
  /* Daha böyük container */
  .container {
    max-width: 1400px;
  }
}

/* === MOBILE: max 768px === */
@media (max-width: 768px) {
  /* Bütün grid-lər 1 sütuna keçir */
  .portfolio-grid,
  .services-grid,
  .features-list {
    grid-template-columns: 1fr;
  }
  
  /* Başlıqlar kiçilir */
  h1 { font-size: 36px; }
  h2 { font-size: 32px; }
  h3 { font-size: 24px; }
  
  /* Hero padding azalır */
  .hero {
    padding-top: 80px;
    padding-bottom: 60px;
  }
  
  /* Section padding azalır */
  .section {
    padding: 40px 0;
  }
  
  /* Container yan boşluqlar */
  .container {
    padding: 0 20px;
  }
  
  /* Düymələr tam en */
  .btn {
    width: 100%;
    text-align: center;
  }
  .btn + .btn {
    margin-left: 0;
    margin-top: 15px;
  }
  
  /* Kontakt bölməsi — alt-alta */
  .contact-info-side {
    padding-left: 0;
    padding-top: 40px;
  }
}

/* === SMALL MOBILE: max 576px === */
@media (max-width: 576px) {
  h1 { font-size: 28px; }
  h2 { font-size: 26px; }
}
```

---

## 16. ANİMASİYALAR VƏ KEÇİŞLƏR

```css
/* Düymələr */
.btn {
  transition: background-color 0.3s, border 0.3s;
}

/* Linklər */
a {
  transition: border-bottom 0.3s;
}
a span {
  transition: border-bottom 0.15s;
}

/* Ümumi hover efektlər */
* {
  transition-timing-function: ease;
}
```

---

## 17. LOQO YERLƏŞMƏSİ VƏ HEADER LAYOUT

### Vizual quruluş
```
┌─────────────────────────────────────────────────────────┐
│ [BRAND   ]              УКР  ENG  📷  📞               │
│ [NAME    ]              email@site.com                   │
│                         +994 XX XXX XX XX               │
│                                                          │
│   (header hero şəklinə keçir — margin-bottom: -150px)   │
└─────────────────────────────────────────────────────────┘
```

### Logo xüsusiyyətləri
- İki sətirli mətn loqosu (Brand adı üst, soyad alt)
- İnce dikdörtgen çərçivə içərisində
- Transparent fon, ağ mətn
- Font: 11px, letter-spacing: 2px, UPPERCASE

---

## 18. BÜTÜN SƏHİFƏ AXINI (Page Flow)

```
1. HEADER (şəffaf, hero üzərinə keçən)
   └── Logo (sol) | Dil + Kontakt (sağ)

2. HERO SECTION (tam ekran, şəkil fon)
   └── H1 (ağ, yüngül) + Mətn + 2 Düymə

3. PORTFELİO BÖLMƏSİ (ağ fon)
   └── H2 mərkəzdə + Alt mətn + 2-sütun foto şəbəkəsi

4. XİDMƏTLƏR (qaranlıq fon + overlay)
   └── H2 ağ + 3-sütun icon+başlıq+mətn kartlar + Düymə

5. PROSES (ağ fon)
   └── Horizontal progress bar-lar + addım labels

6. HAQQIMIZDA / QUOTE (qaranlıq şəkil fon)
   └── Böyük sitat H2 (ağ) + Açıqlama

7. NƏ ALACAQSINIZ (açıq boz fon)
   └── Sol: Başlıq + Feature siyahısı + Düymə
   └── Sağ: Kitabça/PDF mockup şəkli

8. KONTAKT (ağ fon)
   └── Sol: Kontakt formu (minimalist input-lar)
   └── Sağ: Kontakt məlumatları + Sosial media

9. FOOTER (qara fon)
   └── Logo (ağ versiya) + Linkler + Copyright
```

---

## 19. CSS DEĞİŞKƏNLƏRİ (Custom Properties — Tez Dəyişdirmək üçün)

```css
:root {
  /* Rənglər */
  --accent: #FFFC00;
  --accent-hover: #FFFEB3;
  --text-primary: #000000;
  --text-secondary: rgba(0, 0, 0, 0.6);
  --text-on-dark: #ffffff;
  --bg-light: #f5f5f5;
  --bg-dark: #000000;
  --overlay-light: rgba(0, 0, 0, 0.40);
  --overlay-dark: rgba(0, 0, 0, 0.60);
  --border-alpha: rgba(0, 0, 0, 0.20);
  
  /* Tipografiya */
  --font-main: 'Proxima Nova', 'Nunito Sans', sans-serif;
  --font-size-base: 15px;
  --font-size-h1: 60px;
  --font-size-h2: 48px;
  --font-size-h3: 36px;
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  
  /* Layout */
  --container-padding: 30px;
  --section-padding: 60px;
  --hero-padding-top: 130px;
  --btn-radius: 25px;
  --btn-height: 50px;
  
  /* Keçişlər */
  --transition-btn: background-color 0.3s, border 0.3s;
  --transition-link: border-bottom 0.3s;
}
```

---

## 20. TƏTBİQ PRİORİTETİ (Nədən Başlamaq Lazımdır)

1. **Font** — ProximaNova-nı yükləyin ya Google Fonts alternativini qur
2. **Rəng dəyişkənlərini** `:root`-a əlavə et
3. **H1/H2/H3 başlıqlarını** weight: 300 et
4. **Düymə stilini** yenilə — border-radius: 25px, sarı accent
5. **Hero overlay**-i əlavə et — rgba(0,0,0,0.40)
6. **Container paddingi** 30px et (yan boşluqlar)
7. **Section padding** 60px vertical et
8. **Header**-i şəffaf et, margin-bottom: -150px
9. **Portfolio grid**-i 2-sütunlu, boşluqsuz et
10. **Responsive breakpoint**-ları 768px, 1025px, 1441px-ə uyğunlaşdır

---

*Mənbə: oksanaivanova.com — Tam analiz tarixi: 2026*
