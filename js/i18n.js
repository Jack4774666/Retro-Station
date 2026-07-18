

const LANG_KEY = "retro_lang";
const SUPPORTED_LANGS = ["en", "ar", "ku"];

const TRANSLATIONS = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      contact: "Contact",
      cart: "Cart",
      products: "Products",
    },

    index: {
      heroTitleHtml: 'Retro <span style="color: var(--accent-gold);">Station</span>',
    },

    hero: {
      tagline: "OLD IS GOLD",
      subtitle: "Experience the golden age of gaming with premium retro handhelds, accessories, and entertainment products.",
      shopNow: "Shop Now",
      learnMore: "Learn More",
    },

    sections: {
      featuredTitle: "Featured Products",
      featuredSub: "Retro Gaming, Accessories & Entertainment",
      specsTitle: "Why Choose Retro Station?",
      specsSub: "Quality Products, Clear Specs & Reliable Service",
      testimonialsTitle: "What Gamers Say",
      testimonialsSub: "5-Star Reviews from Our Community",
      orderTitle: "How to Order",
      orderSub: "Simple & Fast Checkout",
    },

    specs: {
      display: {
        title: "Clear Displays",
        text: "Selected handhelds feature IPS screens with sharp visuals, bright colors, and comfortable viewing angles.",
      },
      battery: {
        title: "Portable Gaming",
        text: "Rechargeable handhelds are made for gaming at home, during travel, or anywhere you want to play.",
      },
      performance: {
        title: "Retro Performance",
        text: "Devices are selected for smooth classic emulation across popular retro systems.",
      },
      library: {
        title: "Large Game Libraries",
        text: "Many handheld versions support large TF card game libraries and multiple emulators.",
      },
      audio: {
        title: "Built-in Audio",
        text: "Enjoy built-in speakers and headphone support on compatible handheld models.",
      },
      wifi: {
        title: "Accessories & More",
        text: "Retro Station also offers bags, light boxes, board games, and gaming accessories.",
      },
    },

    steps: {
      s1: {
        title: "Browse & Add",
        text: "Choose your favorite products and add them to your cart.",
      },
      s2: {
        title: "Review Cart",
        text: "Check quantities, apply coupons, and review your order details.",
      },
      s3: {
        title: "Place Your Order",
        text: "Enter your name, delivery address, and notes, then complete checkout.",
      },
      s4: {
        title: "Get Delivered",
        text: "We confirm your order and deliver it straight to your door.",
      },
    },

    testimonials: {
      t1: {
        text: "The handheld quality is excellent, and the screen looks sharp. It feels perfect for classic games.",
        role: "Gaming Enthusiast",
      },
      t2: {
        text: "Great products, quick delivery, and helpful support. The accessories were exactly what I needed.",
        role: "Verified Buyer",
      },
      t3: {
        text: "Worth every dinar. The products look premium, and the store makes ordering easy.",
        role: "Retro Gaming Fan",
      },
    },

    product: {
      details: "Details",
      add: "Add to Cart",
      addToCart: "ADD TO CART",
      order: "ORDER",
      qty: "QTY:",
      notFound: "Product Not Found",
      backShop: "Back to Shop",
      backShopBtn: "BACK TO SHOP",
      specsTitle: "⚙ SPECIFICATIONS",
      badge1: "✨ QUALITY PRODUCT",
      badge2: "🎮 RETRO READY",
      badge3: "🚚 FAST DELIVERY",
    },

    cart: {
      title: "Your Cart",
      subtitle: "FAST • SECURE • READY",
      pixelSub: "REVIEW YOUR CART — PLACE YOUR ORDER — FAST & EASY",
      items: "Items",
      clear: "Clear Cart",
      emptyTitle: "Your cart is empty",
      emptyText: "Add some retro goodness and come back here 🔥",
      shopProducts: "Shop Products",
      summary: "Summary",
      subtotal: "Subtotal",
      discount: "Discount",
      delivery: "Delivery",
      total: "Total",
      coupon: "Coupon",
      apply: "Apply",
      couponPlaceholder: "Enter coupon code",
      couponHint: "Have a coupon? Enter your code above.",
      customerName: "Full Name *",
      namePlaceholder: "Your full name",
      city: "City *",
      cityPlaceholder: "Select your city",
      address: "Delivery Address",
      addressPlaceholder: "City, area, street...",
      notes: "Order Notes",
      notesPlaceholder: "Color preference, delivery time, etc.",
      easyOrder: "Easy Order",
      fastDelivery: "Fast Delivery",
      secure: "Secure",
      checkout: "Place Order",
      continue: "Continue Shopping",
      remove: "Remove",
      unit: "Unit:",
    },

    aboutPage: {
      heroTitleHtml: 'About <span style="color: var(--accent-gold); -webkit-text-fill-color: initial;">Retro Station</span>',
      tagline: "TRUSTED • FAST • RELIABLE",
      pixelSub: "A reliable destination for retro games, handheld consoles, gaming accessories, board games, and entertainment products.",
      browseProducts: "Browse Products",
      contactBtn: "Contact Us",
      whoTitle: "Who We Are",
      whoSub: "Gamers serving gamers",
      c1Title: "Reliable Online Store",
      c1Text: "Retro Station is an online-first store built on trust, clear communication, good products, and fast delivery.",
      c2Title: "Real Inventory",
      c2Text: "We keep real stock so products can be checked, packed carefully, and delivered quickly.",
      c3Title: "Warranty & Support",
      c3Text: "Eligible products include support and warranty options. If something is not right, we help you solve it.",
      c4Title: "Instagram Community",
      c4Text: "Follow us on Instagram for new stock, offers, unboxings, and customer reviews.",
      stat1: "Products Sold",
      stat2: "Client Satisfaction",
      stat3: "On Eligible Items",
    },

    contactPage: {
      title: "Contact",
      subtitle: "WE'RE HERE FOR YOU",
      pixelSub: "Need help with orders, warranty, returns, wholesale, or product questions? Send us a message.",
      formTitle: "Send Us a Message",
      formDesc: "Fill out the form and our team will get back to you. This is currently front-end only and can be connected to a backend later.",
      fullName: "Full Name",
      namePh: "Your name",
      email: "Email",
      emailPh: "you@email.com",
      phone: "Phone (optional)",
      phonePh: "+964 780 964 3675",
      topic: "Topic",
      topicSelect: "Select one",
      topicOrder: "Order Support",
      topicWarranty: "Warranty / Repairs",
      topicReturns: "Returns",
      topicWholesale: "Wholesale / Bulk",
      topicPartnership: "Partnership",
      topicOther: "Other",
      message: "Message",
      messagePh: "Tell us what you need...",
      send: "Send Message",
      formSuccess: "✅ Message queued. Connect this form to your backend endpoint later.",
      valName: "Please enter your name.",
      valEmail: "Please enter a valid email.",
      valTopic: "Please choose a topic.",
      valMessage: "Please enter your message.",
      infoTitle: "Contact Info",
      phoneLabel: "Phone",
      emailLabel: "Email",
      hours: "Hours",
      hoursValue: "Sat–Thu: 10AM–9PM",
      storeLocation: "Store Location",
      addressLabel: "Address",
      addressValue: "123 Gaming Street, TX 75001",
      mapTitle: "Map Placeholder",
      mapHint: "Replace this block with a Google Maps or Mapbox iframe later.",
      social: "Social",
    },

    footer: {
      brandDesc: "Your destination for retro handhelds, gaming accessories, board games, and entertainment products.",
      quickLinks: "Quick Links",
      features: "Features",
      reviews: "Reviews",
      support: "Support",
      faq: "FAQ",
      warranty: "Warranty",
      returns: "Returns",
      contactUs: "Contact Us",
      contactInfo: "Contact Info",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      rights: "© 2025 Retro Station. All rights reserved.",
      rightsFull: "© 2025 Retro Station. All rights reserved. |",
    },

    toast: {
      added: "{name} added to cart!",
      couponApplied: "Coupon applied successfully!",
      invalidCoupon: "Invalid coupon code.",
      cartEmpty: "Your cart is empty!",
      orderPlaced: "Order placed! Total: {total}. We'll contact you soon.",
    },

    errors: {
      nameRequired: "Please enter your full name.",
      cityRequired: "Please select your city.",
    },
  },

  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      contact: "اتصل بنا",
      cart: "السلة",
      products: "المنتجات",
    },

    index: {
      heroTitleHtml: 'Retro <span style="color: var(--accent-gold);">Station</span>',
    },

    hero: {
      tagline: "القديم ذهب",
      subtitle: "استمتع بالعصر الذهبي للألعاب مع أجهزة ريترو محمولة فاخرة، وإكسسوارات، ومنتجات ترفيهية.",
      shopNow: "تسوق الآن",
      learnMore: "اعرف المزيد",
    },

    sections: {
      featuredTitle: "منتجات مميزة",
      featuredSub: "اجهزات ريترو، إكسسوارات، ومنتجات ترفيهية",
      specsTitle: "لماذا تختار Retro Station؟",
      specsSub: "منتجات عالية الجودة، مواصفات واضحة، وخدمة موثوقة",
      testimonialsTitle: "ماذا يقول اللاعبون؟",
      testimonialsSub: "تقييمات 5 نجوم من مجتمعنا",
      orderTitle: "كيفية الطلب",
      orderSub: "طلب سريع وسهل",
    },

    specs: {
      display: {
        title: "شاشات واضحة",
        text: "تأتي بعض الأجهزة المحمولة بشاشات IPS حادة تعرض ألواناً جميلة وزوايا رؤية مريحة.",
      },
      battery: {
        title: "لعب محمول",
        text: "الأجهزة القابلة للشحن مناسبة للعب في المنزل أو أثناء السفر أو في أي مكان.",
      },
      performance: {
        title: "أداء مناسب لألعاب الريترو",
        text: "نختار الأجهزة التي تقدم تجربة سلسة مع أنظمة الألعاب الكلاسيكية الشهيرة.",
      },
      library: {
        title: "مكتبات ألعاب كبيرة",
        text: "تدعم العديد من الإصدارات بطاقات TF ومكتبات ألعاب كبيرة ومحاكيات متعددة.",
      },
      audio: {
        title: "صوت مدمج",
        text: "استمتع بسماعات مدمجة ودعم لسماعات الرأس في الأجهزة المتوافقة.",
      },
      wifi: {
        title: "إكسسوارات وأكثر",
        text: "يوفر Retro Station أيضاً حقائب، صناديق إضاءة، ألعاب لوحية، وإكسسوارات ألعاب.",
      },
    },

    steps: {
      s1: {
        title: "تصفح وأضف",
        text: "اختر المنتجات التي تعجبك وأضفها إلى سلة التسوق.",
      },
      s2: {
        title: "راجع السلة",
        text: "تحقق من الكميات، استخدم القسائم، وراجع تفاصيل طلبك.",
      },
      s3: {
        title: "أكمل الطلب",
        text: "أدخل اسمك وعنوان التوصيل والملاحظات، ثم أكمل عملية الطلب.",
      },
      s4: {
        title: "استلم طلبك",
        text: "نؤكد طلبك ونوصله مباشرة إلى باب منزلك.",
      },
    },

    testimonials: {
      t1: {
        text: "جودة الجهاز ممتازة، والشاشة واضحة جداً. مناسب جداً للألعاب الكلاسيكية.",
        role: "عاشق ألعاب",
      },
      t2: {
        text: "منتجات رائعة، توصيل سريع، ودعم ممتاز. الإكسسوارات كانت تماماً كما أريد.",
        role: "مشتري موثق",
      },
      t3: {
        text: "يستحق كل دينار. المنتجات تبدو فاخرة، والطلب من المتجر سهل جداً.",
        role: "محب ألعاب ريترو",
      },
    },

    product: {
      details: "التفاصيل",
      add: "أضف إلى السلة",
      addToCart: "أضف إلى السلة",
      order: "اطلب الآن",
      qty: "الكمية:",
      notFound: "المنتج غير موجود",
      backShop: "العودة إلى المتجر",
      backShopBtn: "العودة إلى المتجر",
      specsTitle: "⚙ المواصفات",
      badge1: "✨ منتج عالي الجودة",
      badge2: "🎮 جاهز للريترو",
      badge3: "🚚 توصيل سريع",
    },

    cart: {
      title: "سلة التسوق",
      subtitle: "سريع • آمن • جاهز",
      pixelSub: "راجع سلة التسوق — أكمل طلبك — سريع وسهل",
      items: "المنتجات",
      clear: "إفراغ السلة",
      emptyTitle: "سلة التسوق فارغة",
      emptyText: "أضف بعض منتجات الريترو الرائعة ثم عد إلى هنا 🔥",
      shopProducts: "تسوق المنتجات",
      summary: "ملخص الطلب",
      subtotal: "المجموع الفرعي",
      discount: "الخصم",
      delivery: "التوصيل",
      total: "الإجمالي",
      coupon: "قسيمة الخصم",
      apply: "تطبيق",
      couponPlaceholder: "أدخل رمز القسيمة",
      couponHint: "لديك قسيمة؟ أدخل الرمز في الحقل أعلاه.",
      customerName: "الاسم الكامل *",
      namePlaceholder: "اكتب اسمك الكامل",
      city: "المحافظة *",
      cityPlaceholder: "اختر المحافظة",
      address: "عنوان التوصيل",
      addressPlaceholder: "المدينة، المنطقة، الشارع...",
      notes: "ملاحظات الطلب",
      notesPlaceholder: "تفضيل اللون، وقت التوصيل، إلخ.",
      easyOrder: "طلب سهل",
      fastDelivery: "توصيل سريع",
      secure: "آمن",
      checkout: "إرسال الطلب",
      continue: "متابعة التسوق",
      remove: "إزالة",
      unit: "سعر القطعة:",
    },

    aboutPage: {
      heroTitleHtml: 'من نحن <span style="color: var(--accent-gold); -webkit-text-fill-color: initial;">Retro Station</span>',
      tagline: "موثوق • سريع • مضمون",
      pixelSub: "وجهة موثوقة لألعاب الريترو، الأجهزة المحمولة، إكسسوارات الألعاب، الألعاب اللوحية، ومنتجات الترفيه.",
      browseProducts: "تصفح المنتجات",
      contactBtn: "تواصل معنا",
      whoTitle: "من نحن",
      whoSub: "لاعبون نخدم اللاعبين",
      c1Title: "متجر إلكتروني موثوق",
      c1Text: "Retro Station متجر إلكتروني مبني على الثقة، التواصل الواضح، المنتجات الجيدة، والتوصيل السريع.",
      c2Title: "مخزون حقيقي",
      c2Text: "نوفر مخزوناً حقيقياً حتى يتم فحص المنتجات وتغليفها بعناية وتوصيلها بسرعة.",
      c3Title: "ضمان ودعم",
      c3Text: "بعض المنتجات المؤهلة تشمل خيارات دعم وضمان. إذا حدثت مشكلة، نساعدك في حلها.",
      c4Title: "مجتمعنا على إنستغرام",
      c4Text: "تابعنا على إنستغرام لمعرفة المنتجات الجديدة، العروض، فتح الصناديق، ومراجعات العملاء.",
      stat1: "منتج مباع",
      stat2: "رضا العملاء",
      stat3: "على المنتجات المؤهلة",
    },

    contactPage: {
      title: "اتصل بنا",
      subtitle: "نحن هنا لمساعدتك",
      pixelSub: "تحتاج مساعدة في الطلبات أو الضمان أو الإرجاع أو الجملة أو أسئلة المنتجات؟ أرسل لنا رسالة.",
      formTitle: "أرسل لنا رسالة",
      formDesc: "املأ النموذج وسيتواصل معك فريقنا. هذا النموذج حالياً للواجهة فقط ويمكن ربطه بالخادم لاحقاً.",
      fullName: "الاسم الكامل",
      namePh: "اسمك",
      email: "البريد الإلكتروني",
      emailPh: "you@email.com",
      phone: "الهاتف (اختياري)",
      phonePh: "+964 780 964 3675",
      topic: "الموضوع",
      topicSelect: "اختر موضوعاً",
      topicOrder: "دعم الطلبات",
      topicWarranty: "الضمان / الإصلاح",
      topicReturns: "الإرجاع",
      topicWholesale: "الجملة / الكميات",
      topicPartnership: "شراكة",
      topicOther: "أخرى",
      message: "الرسالة",
      messagePh: "اكتب ما تحتاجه...",
      send: "إرسال الرسالة",
      formSuccess: "✅ تم تسجيل الرسالة. اربط هذا النموذج بالخادم لاحقاً.",
      valName: "يرجى إدخال اسمك.",
      valEmail: "يرجى إدخال بريد إلكتروني صحيح.",
      valTopic: "يرجى اختيار موضوع.",
      valMessage: "يرجى كتابة رسالتك.",
      infoTitle: "معلومات التواصل",
      phoneLabel: "الهاتف",
      emailLabel: "البريد الإلكتروني",
      hours: "ساعات العمل",
      hoursValue: "السبت–الخميس: 10 صباحاً–9 مساءً",
      storeLocation: "موقع المتجر",
      addressLabel: "العنوان",
      addressValue: "123 Gaming Street, TX 75001",
      mapTitle: "خريطة مؤقتة",
      mapHint: "استبدل هذا الجزء بخريطة Google Maps أو Mapbox لاحقاً.",
      social: "وسائل التواصل",
    },

    footer: {
      brandDesc: "وجهتك لأجهزة الريترو المحمولة، إكسسوارات الألعاب، الألعاب اللوحية، ومنتجات الترفيه.",
      quickLinks: "روابط سريعة",
      features: "الميزات",
      reviews: "المراجعات",
      support: "الدعم",
      faq: "الأسئلة الشائعة",
      warranty: "الضمان",
      returns: "الإرجاع",
      contactUs: "اتصل بنا",
      contactInfo: "معلومات التواصل",
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
      rights: "© 2025 Retro Station. جميع الحقوق محفوظة.",
      rightsFull: "© 2025 Retro Station. جميع الحقوق محفوظة. |",
    },

    toast: {
      added: "تمت إضافة {name} إلى السلة!",
      couponApplied: "تم تطبيق القسيمة بنجاح!",
      invalidCoupon: "رمز القسيمة غير صالح.",
      cartEmpty: "سلة التسوق فارغة!",
      orderPlaced: "تم إرسال الطلب! الإجمالي: {total}. سنتواصل معك قريباً.",
    },

    errors: {
      nameRequired: "يرجى إدخال اسمك الكامل.",
      cityRequired: "يرجى اختيار المحافظة.",
    },
  },

  ku: {
    nav: {
      home: "سەرەکی",
      about: "دەربارە",
      contact: "پەیوەندی",
      cart: "سەبەتە",
      products: "بەرهەمەکان",
    },

    index: {
      heroTitleHtml: 'Retro <span style="color: var(--accent-gold);">Station</span>',
    },

    hero: {
      tagline: "کۆنەکە زێڕە",
      subtitle: "دەورەی زێڕینی یارییەکان بە ئامێرە دەستییە تایبەتەکان، پێداویستییەکان و بەرهەمی کات بەسەربردن بژیوە.",
      shopNow: "ئێستا بکڕە",
      learnMore: "زیاتر بزانە",
    },

    sections: {
      featuredTitle: "بەرهەمە تایبەتەکان",
      featuredSub: "یاری ڕێترۆ، پێداویستی و کات بەسەربردن",
      specsTitle: "بۆچی Retro Station؟",
      specsSub: "بەرهەمی باش، زانیاری ڕوون و خزمەتگوزاری متمانەپێکراو",
      testimonialsTitle: "یاریزانان چی دەڵێن؟",
      testimonialsSub: "پێداچوونەوەی ٥ ئەستێرە لە کۆمەڵگاکەمان",
      orderTitle: "چۆن داوا بکەیت",
      orderSub: "داواکارییەکی ئاسان و خێرا",
    },

    specs: {
      display: {
        title: "شاشەی ڕوون",
        text: "هەندێک ئامێری دەستی شاشەی IPS ـی هەیە بە ڕەنگی جوان و بینینی ئاسوودە.",
      },
      battery: {
        title: "یاری لە هەر شوێنێک",
        text: "ئامێرە بارگاویکراوەکان گونجاون بۆ ماڵ، گەشت یان هەر شوێنێکی تر.",
      },
      performance: {
        title: "ئەدای ڕێترۆ",
        text: "ئامێرەکان هەڵدەبژێرین بۆ ئەوەی یارییە کلاسیکییەکان بە شێوەیەکی نەرم کار بکەن.",
      },
      library: {
        title: "کتێبخانەی گەورەی یاری",
        text: "زۆرێک لە وەشانەکان پشتیوانی کارتی TF و چەند خەمڵێنەر دەکەن.",
      },
      audio: {
        title: "دەنگی ناوخۆیی",
        text: "لە ئامێرە گونجاوەکاندا دەتوانیت سوود لە بڵندگۆ و گوێگڕ وەربگریت.",
      },
      wifi: {
        title: "پێداویستی و زیاتر",
        text: "Retro Station جانتا، سندوقی ڕووناکی، یاریی تەختە و پێداویستی یاریش دابین دەکات.",
      },
    },

    steps: {
      s1: {
        title: "بگەڕێ و زیاد بکە",
        text: "بەرهەمە دڵخوازەکانت هەڵبژێرە و بیانخە سەبەتە.",
      },
      s2: {
        title: "سەبەتە پێداچوونەوە بکە",
        text: "بڕەکان بپشکنە، کوپۆن بەکاربهێنە و وردەکارییەکان ببینە.",
      },
      s3: {
        title: "داواکاری بنێرە",
        text: "ناو، ناونیشانی گەیاندن و تێبینی بنووسە، پاشان داواکاری تەواو بکە.",
      },
      s4: {
        title: "وەرگرتنی داواکاری",
        text: "داواکارییەکەت پشتڕاست دەکەینەوە و دەگەیەنینە دەرگاکەت.",
      },
    },

    testimonials: {
      t1: {
        text: "کوالیتی ئامێرەکە زۆر باشە و شاشەکەش ڕوونە. بۆ یارییە کلاسیکییەکان زۆر گونجاوە.",
        role: "حەزی یاری",
      },
      t2: {
        text: "بەرهەمی باش، گەیاندنی خێرا و پشتگیرییەکی باش. پێداویستییەکان وەک پێویست بوون.",
        role: "کڕیاری پشتڕاستکراو",
      },
      t3: {
        text: "شایەنی هەموو دینارێکە. بەرهەمەکان پڕێمیەم دەردەکەون و داواکردن ئاسانە.",
        role: "حەزی یاری ڕێترۆ",
      },
    },

    product: {
      details: "وردەکاری",
      add: "زیادکردن بۆ سەبەتە",
      addToCart: "زیادکردن بۆ سەبەتە",
      order: "داوا بکە",
      qty: "بڕ:",
      notFound: "بەرهەم نەدۆزرایەوە",
      backShop: "گەڕانەوە بۆ فرۆشگا",
      backShopBtn: "گەڕانەوە بۆ فرۆشگا",
      specsTitle: "⚙ تایبەتمەندییەکان",
      badge1: "✨ بەرهەمی باش",
      badge2: "🎮 ئامادە بۆ ڕێترۆ",
      badge3: "🚚 گەیاندنی خێرا",
    },

    cart: {
      title: "سەبەتەکەت",
      subtitle: "خێرا • پارێزراو • ئامادە",
      pixelSub: "سەبەتە پێداچوونەوە بکە — داواکاری بنێرە — خێرا و ئاسان",
      items: "بەرهەمەکان",
      clear: "سەبەتە بەتاڵ بکە",
      emptyTitle: "سەبەتەکەت بەتاڵە",
      emptyText: "هەندێک بەرهەمی ڕێترۆ زیاد بکە و دواتر بگەڕێوە 🔥",
      shopProducts: "سەیری بەرهەمەکان بکە",
      summary: "پوختەی داواکاری",
      subtotal: "کۆی لاوەکی",
      discount: "داشکاندن",
      delivery: "گەیاندن",
      total: "کۆی گشتی",
      coupon: "کوپۆن",
      apply: "جێبەجێ بکە",
      couponPlaceholder: "کۆدی کوپۆن بنووسە",
      couponHint: "کوپۆنت هەیە؟ کۆدەکە لە خانەی سەرەوە بنووسە.",
      customerName: "ناوی تەواو *",
      namePlaceholder: "ناوی تەواوت بنووسە",
      city: "پارێزگا *",
      cityPlaceholder: "پارێزگا هەڵبژێرە",
      address: "ناونیشانی گەیاندن",
      addressPlaceholder: "شار، ناوچە، شەقام...",
      notes: "تێبینی داواکاری",
      notesPlaceholder: "ڕەنگی دڵخواز، کاتی گەیاندن و هتد.",
      easyOrder: "داواکاری ئاسان",
      fastDelivery: "گەیاندنی خێرا",
      secure: "پارێزراو",
      checkout: "ناردنی داواکاری",
      continue: "بگەڕێوە بۆ کڕین",
      remove: "لابردن",
      unit: "نرخی دانە:",
    },

    aboutPage: {
      heroTitleHtml: 'دەربارەی <span style="color: var(--accent-gold); -webkit-text-fill-color: initial;">Retro Station</span>',
      tagline: "متمانەپێکراو • خێرا • دڵنیا",
      pixelSub: "شوێنێکی متمانەپێکراو بۆ یاری ڕێترۆ، ئامێری دەستی، پێداویستی یاری، یاریی تەختە و بەرهەمی کات بەسەربردن.",
      browseProducts: "سەیری بەرهەمەکان بکە",
      contactBtn: "پەیوەندی بکە",
      whoTitle: "ئێمە کێین؟",
      whoSub: "یاریزان خزمەتی یاریزان دەکات",
      c1Title: "فرۆشگایەکی ئۆنلاینی متمانەپێکراو",
      c1Text: "Retro Station فرۆشگایەکی ئۆنلاینە کە لەسەر متمانە، پەیوەندی ڕوون، بەرهەمی باش و گەیاندنی خێرا دامەزراوە.",
      c2Title: "کۆگای ڕاستەقینە",
      c2Text: "بەرهەمەکان بە شێوەی ڕاستەقینە هەڵدەگرین بۆ ئەوەی پشکنین، پاکەتکردن و گەیاندنیان بە خێرایی ئەنجام بدرێت.",
      c3Title: "گەرەنتی و پشتگیری",
      c3Text: "هەندێک بەرهەمی شایستە گەرەنتی و پشتگیرییان هەیە. ئەگەر کێشە هەبوو، یارمەتیت دەدەین.",
      c4Title: "کۆمەڵگاکەمان لە ئینستاگرام",
      c4Text: "بۆ بەرهەمی نوێ، داشکاندن، کردنەوەی پاکەت و پێداچوونەوەی کڕیاران، لە ئینستاگرام شوێنمان بکەوە.",
      stat1: "بەرهەمی فرۆشراو",
      stat2: "ڕازیبوونی کڕیار",
      stat3: "بۆ بەرهەمی شایستە",
    },

    contactPage: {
      title: "پەیوەندی",
      subtitle: "ئێمە لێرەین بۆ یارمەتیدانت",
      pixelSub: "یارمەتیت پێویستە لە داواکاری، گەرەنتی، گەڕاندنەوە، کڕینی بەکۆمەڵ یان پرسیاری بەرهەم؟ پەیام بنێرە.",
      formTitle: "پەیامێکمان بۆ بنێرە",
      formDesc: "فۆڕمەکە پڕ بکەوە و تیمەکەمان وەڵامت دەدات. ئێستا تەنها لە ڕووکارەکەدا کاردەکات و دواتر دەتوانرێت بە پشتەوە ببەسترێتەوە.",
      fullName: "ناوی تەواو",
      namePh: "ناوت",
      email: "ئیمەیڵ",
      emailPh: "you@email.com",
      phone: "تەلەفۆن (ئارەزوومەندانە)",
      phonePh: "+964 780 964 3675",
      topic: "بابەت",
      topicSelect: "بابەتێک هەڵبژێرە",
      topicOrder: "پشتگیری داواکاری",
      topicWarranty: "گەرەنتی / چاککردنەوە",
      topicReturns: "گەڕاندنەوە",
      topicWholesale: "کڕینی بەکۆمەڵ",
      topicPartnership: "هاوبەشی",
      topicOther: "هیتر",
      message: "پەیام",
      messagePh: "ئەوەی پێویستتە بنووسە...",
      send: "ناردنی پەیام",
      formSuccess: "✅ پەیامەکە تۆمار کرا. دواتر بە پشتەوە ببەستە.",
      valName: "تکایە ناوت بنووسە.",
      valEmail: "تکایە ئیمەیڵێکی دروست بنووسە.",
      valTopic: "تکایە بابەتێک هەڵبژێرە.",
      valMessage: "تکایە پەیامەکەت بنووسە.",
      infoTitle: "زانیاری پەیوەندی",
      phoneLabel: "تەلەفۆن",
      emailLabel: "ئیمەیڵ",
      hours: "کاتی کارکردن",
      hoursValue: "شەممە–پێنجشەممە: ١٠ بەیانی–٩ ئێوارە",
      storeLocation: "شوێنی فرۆشگا",
      addressLabel: "ناونیشان",
      addressValue: "123 Gaming Street, TX 75001",
      mapTitle: "نەخشەی کاتی",
      mapHint: "دواتر ئەم بەشە بە Google Maps یان Mapbox بگۆڕە.",
      social: "تۆڕە کۆمەڵایەتییەکان",
    },

    footer: {
      brandDesc: "شوێنی تۆ بۆ ئامێری دەستی ڕێترۆ، پێداویستی یاری، یاریی تەختە و بەرهەمی کات بەسەربردن.",
      quickLinks: "بەستەرە خێراکان",
      features: "تایبەتمەندییەکان",
      reviews: "پێداچوونەوەکان",
      support: "پشتگیری",
      faq: "پرسیارە باوەکان",
      warranty: "گەرەنتی",
      returns: "گەڕاندنەوە",
      contactUs: "پەیوەندی",
      contactInfo: "زانیاری پەیوەندی",
      privacy: "سیاسەتی تایبەتمەندی",
      terms: "مەرجەکانی خزمەتگوزاری",
      rights: "© 2025 Retro Station. هەموو مافەکان پارێزراون.",
      rightsFull: "© 2025 Retro Station. هەموو مافەکان پارێزراون. |",
    },

    toast: {
      added: "{name} زیادکرا بۆ سەبەتە!",
      couponApplied: "کوپۆن بە سەرکەوتوویی جێبەجێ کرا!",
      invalidCoupon: "کۆدی کوپۆن هەڵەیە.",
      cartEmpty: "سەبەتەکەت بەتاڵە!",
      orderPlaced: "داواکارییەکەت نێردرا! کۆی گشتی: {total}. بە زوویی پەیوەندیت پێوە دەکەین.",
    },

    errors: {
      nameRequired: "تکایە ناوی تەواوت بنووسە.",
      cityRequired: "تکایە پارێزگاکەت هەڵبژێرە.",
    },
  },
};

const PRODUCT_I18N = {
  en: {},

  ar: {
    1: {
      name: "R36S Handheld",
      badge: "الأكثر مبيعاً",
      description:
        "جهاز ألعاب ريترو محمول مفتوح المصدر مع شاشة IPS مقاس 3.5 بوصة بدقة 640×480، معالج RK3326 رباعي النواة، بطارية 3200mAh، ودعم لآلاف الألعاب الكلاسيكية.",
      specs: [
        "شاشة IPS مقاس 3.5 بوصة",
        "دقة 640×480",
        "معالج RK3326 رباعي النواة",
        "معالج رسوميات Mali-G31",
        "بطارية 3200mAh",
        "نظام Linux / مفتوح المصدر",
        "دعم بطاقة TF / MicroSD",
        "يدعم محاكيات الألعاب الكلاسيكية",
        "شحن USB-C",
        "منفذ سماعات 3.5mm",
      ],
    },

    2: {
      name: "M22 Handheld",
      badge: "شاشة كبيرة",
      description:
        "جهاز ريترو محمول بشاشة IPS كبيرة مقاس 5 بوصات، بطارية 3000mAh، وخيارات تخزين 64GB أو 128GB حسب الإصدار.",
      specs: [
        "شاشة IPS مقاس 5.0 بوصات",
        "دقة مذكورة 1920×1080",
        "معالج N909 ثنائي النواة 1.2GHz",
        "بطارية 3000mAh",
        "خيارات TF Card بسعة 64GB / 128GB",
        "أكثر من 20,000 لعبة حسب الإصدار",
        "سماعة مدمجة",
        "دعم لغات متعددة",
        "تصميم خفيف ومحمول",
        "شحن USB",
      ],
    },

    3: {
      name: "G28 Handheld",
      badge: "احترافي",
      description:
        "جهاز ريترو محمول صغير بشاشة IPS مقاس 4.3 بوصة، دعم تخزين قابل للتوسعة، OTG، وآلاف الألعاب الكلاسيكية حسب الإصدار.",
      specs: [
        "شاشة IPS مقاس 4.3 بوصة",
        "دقة 480×272",
        "نسبة عرض 16:9",
        "معدل تحديث 60Hz",
        "بطارية 2000mAh",
        "إصدار 64GB متوفر",
        "دعم بطاقة TF / MicroSD",
        "دعم OTG",
        "يدعم عدة محاكيات ريترو",
        "تصميم محمول وسهل التشغيل",
      ],
    },

    4: {
      name: "صندوق إضاءة ريترو",
      badge: "ديكور",
      description:
        "صندوق إضاءة LED بتصميم ألعاب، مناسب للمكاتب وغرف الألعاب والرفوف والهدايا.",
      specs: [
        "ديكور لغرفة الألعاب",
        "تصميم صندوق إضاءة LED",
        "تأثير بصري جانبي ثلاثي الأبعاد",
        "سطوع قابل للتعديل",
        "مناسب للمكتب أو الرف",
        "تصميم مناسب للهدايا",
        "حجم مذكور تقريباً 28×50×3.5 سم",
        "إضاءة محيطية لإعدادات الألعاب",
      ],
    },

    5: {
      name: "حقائب حمل للألعاب",
      badge: "حماية",
      description:
        "حقائب حماية للأجهزة المحمولة وإكسسوارات الألعاب، مناسبة للتخزين الآمن والسفر والاستخدام اليومي.",
      specs: [
        "حقيبة حمل واقية",
        "مناسبة لأجهزة الألعاب المحمولة",
        "مساحة للإكسسوارات",
        "تصميم مناسب للسفر",
        "حماية من الخدوش",
        "هيكل خارجي مقاوم للصدمات",
        "إغلاق بسحاب",
        "تصميم خفيف وسهل الحمل",
      ],
    },

    6: {
      name: "لعبة لوحية",
      badge: "جديد",
      description:
        "لعبة لوحية ممتعة مناسبة للعائلة والأصدقاء والجلسات والترفيه بدون إنترنت.",
      specs: [
        "لعبة طاولة",
        "مناسبة للعائلة",
        "مناسبة للأصدقاء والجلسات",
        "لعب جماعي بدون إنترنت",
        "سهلة التعلم",
        "قابلة لإعادة اللعب",
        "مناسبة كهدية",
        "علبة سهلة الحمل",
      ],
    },
  },

  ku: {
    1: {
      name: "R36S Handheld",
      badge: "زۆرترین فرۆش",
      description:
        "ئامێری دەستی ڕێترۆی کراوە بە سەرچاوەی کراوە، شاشەی IPS ـی ٣.٥ ئینچ، وردی ٦٤٠×٤٨٠، پرۆسێسەری RK3326 چوار ناوەکی، باتری ٣٢٠٠mAh و پشتگیری بۆ یارییە کلاسیکییەکان.",
      specs: [
        "شاشەی IPS ـی ٣.٥ ئینچ",
        "وردی ٦٤٠×٤٨٠",
        "پرۆسێسەری RK3326 چوار ناوەکی",
        "پرۆسێسەری گرافیکی Mali-G31",
        "باتری ٣٢٠٠mAh",
        "سیستەمی Linux / کراوە",
        "پشتگیری TF / MicroSD",
        "پشتگیری خەمڵێنەری ڕێترۆ",
        "بارگاویکردن بە USB-C",
        "دەرچەی گوێگڕ ٣.٥mm",
      ],
    },

    2: {
      name: "M22 Handheld",
      badge: "شاشەی گەورە",
      description:
        "ئامێری دەستی ڕێترۆ بە شاشەی IPS ـی ٥ ئینچ، باتری ٣٠٠٠mAh و هەڵبژاردەی ٦٤GB / ١٢٨GB بەپێی وەشان.",
      specs: [
        "شاشەی IPS ـی ٥.٠ ئینچ",
        "وردی ١٩٢٠×١٠٨٠",
        "پرۆسێسەری N909 دوو ناوەکی ١.٢GHz",
        "باتری ٣٠٠٠mAh",
        "هەڵبژاردەی کارتی TF ـی ٦٤GB / ١٢٨GB",
        "زیاتر لە ٢٠,٠٠٠ یاری بەپێی وەشان",
        "بڵندگۆی ناوخۆیی",
        "پشتگیری چەند زمان",
        "دیزاینی سووک و گواستنەوە",
        "بارگاویکردن بە USB",
      ],
    },

    3: {
      name: "G28 Handheld",
      badge: "پڕۆ",
      description:
        "ئامێری بچووکی ڕێترۆ بە شاشەی IPS ـی ٤.٣ ئینچ، بیرگەی فراوانکراو، OTG و هەزاران یاری کلاسیکی بەپێی وەشان.",
      specs: [
        "شاشەی IPS ـی ٤.٣ ئینچ",
        "وردی ٤٨٠×٢٧٢",
        "ڕێژەی شاشە ١٦:٩",
        "خێرایی نوێکردنەوە ٦٠Hz",
        "باتری ٢٠٠٠mAh",
        "وەشانی ٦٤GB بەردەستە",
        "پشتگیری TF / MicroSD",
        "پشتگیری OTG",
        "پشتگیری چەند خەمڵێنەری ڕێترۆ",
        "دیزاینی گواستنەوە و ئاسان",
      ],
    },

    4: {
      name: "سندوقی ڕووناکی ڕێترۆ",
      badge: "دیکۆر",
      description:
        "سندوقی ڕووناکی LED بە دیزاینی یاری، گونجاو بۆ مێز، ژووری یاری، ڕەفە و دیاری.",
      specs: [
        "دیکۆری ژووری یاری",
        "دیزاینی سندوقی ڕووناکی LED",
        "کاریگەری بینراوی ٣D لە لاوە",
        "ڕووناکی دەستکاریکراو",
        "گونجاو بۆ مێز یان ڕەفە",
        "دیزاینی گونجاو بۆ دیاری",
        "قەبارەی نزیکەیی ٢٨×٥٠×٣.٥ سم",
        "ڕووناکی دەوروبەری بۆ ڕێکخستنی یاری",
      ],
    },

    5: {
      name: "جانتا بۆ ئامێری یاری",
      badge: "پاراستن",
      description:
        "جانتا بۆ پاراستنی ئامێرە دەستییەکان و پێداویستییەکانی یاری، گونجاو بۆ هەڵگرتن، گەشت و بەکارهێنانی ڕۆژانە.",
      specs: [
        "جانتا پارێزەر",
        "گونجاو بۆ ئامێری دەستی",
        "شوێنی پێداویستی",
        "دیزاینی گونجاو بۆ گەشت",
        "پاراستن لە خشاندن",
        "دەرەوەی بەرگری لە لێدان",
        "داخستن بە زیپ",
        "دیزاینی سووک و گواستنەوە",
      ],
    },

    6: {
      name: "یاریی تەختە",
      badge: "نوێ",
      description:
        "یارییەکی تەختەی خۆش بۆ خێزان، هاوڕێیان، دانیشتنەکان و کات بەسەربردنی بێ ئینتەرنێت.",
      specs: [
        "یاریی تەختە",
        "گونجاو بۆ خێزان",
        "گونجاو بۆ هاوڕێیان و دانیشتنەکان",
        "یاریی گروپی بێ ئینتەرنێت",
        "ئاسان بۆ فێربوون",
        "دووبارە یاریکردنەوەی زۆر",
        "گونجاو بۆ دیاری",
        "پاکێجی ئاسان بۆ هەڵگرتن",
      ],
    },
  },
};

function getCurrentLang() {
  const saved = localStorage.getItem(LANG_KEY);
  return SUPPORTED_LANGS.includes(saved) ? saved : "en";
}

function setCurrentLang(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) return;
  localStorage.setItem(LANG_KEY, lang);
  applyTranslations();
}

function t(key, vars = {}) {
  const lang = getCurrentLang();
  const parts = key.split(".");

  let val = TRANSLATIONS[lang];

  for (const p of parts) {
    val = val?.[p];
  }

  if (val === undefined) {
    val = TRANSLATIONS.en;
    for (const p of parts) {
      val = val?.[p];
    }
  }

  if (typeof val !== "string") return key;

  return val.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? "");
}

function getLocalizedProduct(id) {
  const base = typeof getProduct === "function" ? getProduct(id) : null;
  if (!base) return null;

  const lang = getCurrentLang();
  const tr = PRODUCT_I18N[lang]?.[id];

  return tr ? { ...base, ...tr } : base;
}

function applyTranslations() {
  const lang = getCurrentLang();

  document.documentElement.lang = lang === "ku" ? "ckb" : lang;
  document.documentElement.dir = "ltr";

  document.body.classList.remove("is-rtl", "lang-en", "lang-ar", "lang-ku");
  document.body.classList.add(`lang-${lang}`);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.getAttribute("data-i18n"));
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    el.innerHTML = t(el.getAttribute("data-i18n-html"));
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t(el.getAttribute("data-i18n-placeholder"));
  });

  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    el.title = t(el.getAttribute("data-i18n-title"));
  });

  document.querySelectorAll("[data-i18n-pixel]").forEach((el) => {
    el.dataset.text = t(el.getAttribute("data-i18n-pixel"));
    el.textContent = "";
  });

  document.querySelectorAll("select option[data-i18n]").forEach((opt) => {
    opt.textContent = t(opt.getAttribute("data-i18n"));
  });

  updateLangSwitcher();

  document.querySelectorAll("[data-i18n-pixel]").forEach((el) => {
    if (el.id) {
      startPixelLoopTypewriter(el.id, {
        typingSpeed: 18,
        deletingSpeed: 10,
        holdAfterType: 1100,
      });
    }
  });

  window.dispatchEvent(new CustomEvent("languageChanged", { detail: { lang } }));
}

function injectLangSwitcher() {
  document.querySelectorAll(".navbar-premium .container").forEach((container) => {
    if (container.querySelector(".lang-switcher")) return;

    const switcher = document.createElement("div");
    switcher.className = "lang-switcher";
    switcher.setAttribute("role", "group");
    switcher.setAttribute("aria-label", "Language switcher");

    switcher.innerHTML = `
      <button type="button" class="lang-btn" data-lang="en" title="English">EN</button>
      <button type="button" class="lang-btn" data-lang="ar" title="العربية">عربي</button>
      <button type="button" class="lang-btn" data-lang="ku" title="کوردی">کوردی</button>
    `;

    switcher.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => setCurrentLang(btn.dataset.lang));
    });

    const brand = container.querySelector(".navbar-brand");
    const mobileCart = container.querySelector(".nav-cart-mobile");
    const toggler = container.querySelector(".navbar-toggler");

    // Keep order: logo | language | cart (mobile) | desktop menu
    if (mobileCart) {
      container.insertBefore(switcher, mobileCart);
    } else if (toggler) {
      container.insertBefore(switcher, toggler);
    } else if (brand && brand.nextSibling) {
      container.insertBefore(switcher, brand.nextSibling);
    } else {
      container.appendChild(switcher);
    }
  });
}

function updateLangSwitcher() {
  const lang = getCurrentLang();

  document.querySelectorAll(".lang-switcher .lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

function showFirstVisitLanguageChooser() {
  if (localStorage.getItem(LANG_KEY) || document.querySelector(".language-welcome")) return;

  const chooser = document.createElement("div");
  const storeLogo = typeof STORE_CONFIG !== "undefined" && STORE_CONFIG.logo
    ? STORE_CONFIG.logo
    : "./Images/logo.png";
  chooser.className = "language-welcome";
  chooser.setAttribute("role", "dialog");
  chooser.setAttribute("aria-modal", "true");
  chooser.setAttribute("aria-labelledby", "languageWelcomeTitle");
  chooser.innerHTML = `
    <div class="language-welcome-card">
      <img class="language-welcome-logo" src="${storeLogo}" alt="Retro Station Logo">
      <h1 id="languageWelcomeTitle">Choose your language</h1>
      <p>Please select your preferred language<br>تکایە زمانەکەت هەڵبژێرە · يرجى اختيار لغتك</p>
      <div class="language-welcome-options">
        <button class="language-welcome-btn" type="button" data-welcome-lang="en">English</button>
        <button class="language-welcome-btn" type="button" data-welcome-lang="ar" lang="ar">العربية</button>
        <button class="language-welcome-btn" type="button" data-welcome-lang="ku" lang="ckb">کوردی</button>
      </div>
    </div>
  `;

  document.body.classList.add("language-welcome-open");
  document.body.appendChild(chooser);

  chooser.querySelectorAll("[data-welcome-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      setCurrentLang(button.dataset.welcomeLang);
      document.body.classList.remove("language-welcome-open");
      chooser.remove();
    });
  });

  chooser.querySelector("[data-welcome-lang]")?.focus();
}

const pixelTimers = {};

function startPixelLoopTypewriter(elId, opts = {}) {
  const el = document.getElementById(elId);
  if (!el) return;

  if (pixelTimers[elId]) clearTimeout(pixelTimers[elId]);

  const fullText = el.dataset.text || "";
  const typingSpeed = opts.typingSpeed ?? 20;
  const deletingSpeed = opts.deletingSpeed ?? 12;
  const holdAfterType = opts.holdAfterType ?? 1200;
  const holdAfterDelete = opts.holdAfterDelete ?? 450;
  const glitchChance = opts.glitchChance ?? 0.02;
  const glitchChars = opts.glitchChars ?? "▓▒░█#@*&%!/?";

  let i = 0;
  let mode = "type";

  const tick = () => {
    if (mode === "type") {
      if (i >= fullText.length) {
        mode = "holdTyped";
        pixelTimers[elId] = setTimeout(tick, holdAfterType);
        return;
      }

      if (Math.random() < glitchChance) {
        const g = glitchChars[Math.floor(Math.random() * glitchChars.length)];
        el.textContent += g;

        pixelTimers[elId] = setTimeout(() => {
          el.textContent = el.textContent.slice(0, -1) + fullText[i];
          i++;
          tick();
        }, typingSpeed * 2);

        return;
      }

      el.textContent += fullText[i];
      i++;
      pixelTimers[elId] = setTimeout(tick, typingSpeed);
      return;
    }

    if (mode === "holdTyped") {
      mode = "delete";
      pixelTimers[elId] = setTimeout(tick, holdAfterType);
      return;
    }

    if (mode === "delete") {
      if (i <= 0) {
        mode = "holdDeleted";
        pixelTimers[elId] = setTimeout(tick, holdAfterDelete);
        return;
      }

      el.textContent = el.textContent.slice(0, -1);
      i--;
      pixelTimers[elId] = setTimeout(tick, deletingSpeed);
      return;
    }

    mode = "type";
    pixelTimers[elId] = setTimeout(tick, holdAfterDelete);
  };

  el.textContent = "";
  tick();
}

function startPixelOnceTypewriter(elId, opts = {}) {
  const el = document.getElementById(elId);
  if (!el) return;

  if (pixelTimers[elId]) clearTimeout(pixelTimers[elId]);

  const fullText = el.dataset.text || "";
  const typingSpeed = opts.typingSpeed ?? 22;
  const glitchChance = opts.glitchChance ?? 0.02;
  const glitchChars = opts.glitchChars ?? "▓▒░█#@*&%!/?";
  const cursor = el.parentElement?.querySelector(".pixel-cursor");

  let i = 0;

  const tick = () => {
    if (i >= fullText.length) {
      if (cursor) cursor.style.opacity = "0";
      return;
    }

    if (Math.random() < glitchChance) {
      const g = glitchChars[Math.floor(Math.random() * glitchChars.length)];
      el.textContent += g;

      pixelTimers[elId] = setTimeout(() => {
        el.textContent = el.textContent.slice(0, -1) + fullText[i];
        i++;
        tick();
      }, typingSpeed * 2);

      return;
    }

    el.textContent += fullText[i];
    i++;
    pixelTimers[elId] = setTimeout(tick, typingSpeed);
  };

  if (cursor) cursor.style.opacity = "1";

  el.textContent = "";
  tick();
}

function initI18n() {
  injectLangSwitcher();
  applyTranslations();
  showFirstVisitLanguageChooser();
}

document.addEventListener("DOMContentLoaded", initI18n);
