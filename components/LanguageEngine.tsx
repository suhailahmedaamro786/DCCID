"use client";

import { useEffect } from "react";

type Language = "en" | "sd" | "ur";

const translations: Record<Exclude<Language, "en">, Record<string, string>> = {
  ur: {    "Dadu Chamber of Commerce & Industry connects businesses, represents the commercial community and provides a trusted platform for information, services and collaboration.":"دادو چيمبر آف ڪامرس اينڊ انڊسٽري ڪاروبارن کي ڳنڍي ٿو، ڪاروباري برادري جي نمائندگي ڪري ٿو ۽ معلومات، خدمتن ۽ سهڪار لاءِ هڪ قابلِ اعتماد پليٽ فارم فراهم ڪري ٿو.",
    "A professional platform for Dadu's business community.":"دادو جي ڪاروباري برادري لاءِ هڪ پيشه ور پليٽ فارم.",
    "Dadu Chamber of Commerce & Industry provides an institutional platform where the local business community can connect, communicate and engage around shared commercial interests.":"دادو چيمبر آف ڪامرس اينڊ انڊسٽري هڪ ادارتي پليٽ فارم فراهم ڪري ٿو جتي مقامي ڪاروباري برادري گڏيل ڪاروباري مفادن لاءِ رابطو، گفتگو ۽ سهڪار ڪري سگهي ٿي.",
    "This new digital experience is designed to make chamber information easier to discover — from leadership and membership to news, events, notices and resources.":"هي نئون ڊجيٽل تجربو چيمبر جي معلومات کي وڌيڪ آسان بڻائڻ لاءِ ٺاهيو ويو آهي، جنهن ۾ قيادت، ميمبرشپ، خبرون، تقريبون، نوٽيس ۽ وسيلا شامل آهن.",
    "Contact the chamber office for official information and assistance.":"سرڪاري معلومات ۽ مدد لاءِ چيمبر آفيس سان رابطو ڪريو.",
    "A dedicated digital presence for a growing business community.":"وڌندڙ ڪاروباري برادري لاءِ هڪ وقف ڊجيٽل موجودگي.",
    "Represent, connect and support businesses through meaningful chamber engagement.":"بامقصد چيمبر رابطي ذريعي ڪاروبارن جي نمائندگي، رابطو ۽ سهڪار ڪرڻ.",
    "Improve communication, encourage collaboration and make business information accessible.":"رابطي کي بهتر بڻائڻ، سهڪار کي هٿي ڏيڻ ۽ ڪاروباري معلومات کي آسان بڻائڻ.",
    "Publish the approved current executive committee roster here.":"منظور ٿيل موجوده ايگزيڪيوٽو ڪميٽي جا ميمبر هتي شايع ڪيا ويندا.",
    "Organize portfolios, responsibilities and chamber functions clearly.":"ذميوارين، شعبن ۽ چيمبر جي ڪمن کي واضح نموني ترتيب ڏنو ويندو.",
    "Provide approved minutes, notices and committee documents in one place.":"منظور ٿيل ڪارروائي، نوٽيس ۽ ڪميٽي جا دستاويز هڪ هنڌ فراهم ڪيا ويندا.",
    "Membership information should be simple to understand, easy to access and backed by official chamber procedures.":"ميمبرشپ جي معلومات آسان، واضح ۽ سرڪاري چيمبر جي طريقيڪار مطابق دستياب هجڻ گهرجي.",
    "A stronger network starts with participation.":"مضبوط نيٽ ورڪ شموليت سان شروع ٿئي ٿو.",
    "The chamber office reviews the submitted information according to its procedures.":"چيمبر آفيس جمع ڪرايل معلومات جو پنهنجي طريقيڪار مطابق جائزو وٺي ٿي.",
    "Receive official confirmation and access applicable chamber services.":"سرڪاري تصديق حاصل ڪريو ۽ لاڳو چيمبر خدمتن تائين رسائي حاصل ڪريو.",
    "A central publishing space for verified DCCI news and official public updates.":"تصديق ٿيل DCCI خبرن ۽ سرڪاري عوامي تازه ڪارين لاءِ مرڪزي پبلشنگ جاءِ.",
    "Publish upcoming meetings, seminars, consultations and business community events here.":"ايندڙ گڏجاڻيون، سيمينار، صلاح مشورا ۽ ڪاروباري برادري جون تقريبون هتي شايع ڪيون وينديون.",
    "Highlight official sessions involving members, institutions and business stakeholders.":"ميمبرن، ادارن ۽ ڪاروباري ڌرين سان لاڳاپيل سرڪاري سيشن نمايان ڪيا ويندا.",
    "Document chamber activities and approved public engagements with dates and locations.":"چيمبر جون سرگرميون ۽ منظور ٿيل عوامي مصروفيتون تاريخن ۽ هنڌن سان درج ڪيون وينديون.",
    "A structured document centre ready for approved DCCI forms, notices, reports and circulars.":"منظور ٿيل DCCI فارمن، نوٽيسن، رپورٽن ۽ سرڪيولرز لاءِ منظم دستاويزي مرڪز.",
    "For official chamber information, membership guidance and business community communication, contact the chamber office.":"سرڪاري چيمبر معلومات، ميمبرشپ جي رهنمائي ۽ ڪاروباري برادري سان رابطي لاءِ چيمبر آفيس سان رابطو ڪريو.",
    "Need the official membership form?":"سرڪاري ميمبرشپ فارم گهرجي؟",
    "The approved form and current fee/document requirements should be uploaded to Resources by the chamber office.":"منظور ٿيل فارم ۽ موجوده فيس يا دستاويزي گهرجون چيمبر آفيس طرفان وسيلن ۾ اپلوڊ ڪيون وڃن.",
    "Contact the chamber office →":"چيمبر آفيس سان رابطو ڪريو →",
    "Home":"ہوم",
    "About":"تعارف",
    "Leadership":"قیادت",
    "Committee":"کمیٹی",
    "Membership":"رکنیت",
    "News":"خبریں",
    "Events":"تقریبات",
    "Resources":"وسائل",
    "Contact":"رابطہ",
    "Contact Chamber":"چیمبر سے رابطہ",
    "Commerce & Industry":"تجارت و صنعت",
    "Dadu Chamber of Commerce & Industry":"دادو چیمبر آف کامرس اینڈ انڈسٹری",
    "Dadu · Sindh · Pakistan":"دادو · سندھ · پاکستان",
    "Building a stronger":"مضبوط تر",
    "business community.":"کاروباری برادری کی تعمیر۔",
    "DCCI / 2026":"DCCI / 2026",
    "Business Representation":"کاروباری نمائندگی",
    "Networking & Collaboration":"رابطہ کاری اور تعاون",
    "Chamber Communication":"چیمبر کی معلومات",
    "Trusted Institution":"قابلِ اعتماد ادارہ",
    "Our focus":"ہماری توجہ",
    "Connect · Represent · Support · Grow":"رابطہ · نمائندگی · معاونت · ترقی",
    "District Focus":"ضلع کی توجہ",
    "Dadu District":"دادو ضلع",
    "Region":"علاقہ",
    "Sindh, Pakistan":"سندھ، پاکستان",
    "Purpose":"مقصد",
    "Business Community":"کاروباری برادری",
    "About the Chamber":"چیمبر کا تعارف",
    "Learn more about DCCI":"DCCI کے بارے میں مزید جانیں",
    "Office Bearers":"عہدیداران",
    "View leadership":"قیادت دیکھیں",
    "Member Value":"ارکان کے فوائد",
    "What DCCI stands for":"DCCI کس چیز کی نمائندگی کرتا ہے",
    "Information":"معلومات",
    "Business Support":"کاروباری معاونت",
    "Networking":"نیٹ ورکنگ",
    "Latest":"تازہ ترین",
    "News & Updates":"خبریں اور تازہ معلومات",
    "View all updates":"تمام تازہ معلومات دیکھیں",
    "Connect with DCCI":"DCCI سے رابطہ کریں",
    "Contact Office":"دفتر سے رابطہ کریں",
    "About DCCI":"DCCI کا تعارف",
    "Downloads":"ڈاؤن لوڈز",
    "Chamber Office":"چیمبر دفتر",
    "Executive Committee":"ایگزیکٹو کمیٹی",
    "Executive Committee & Chamber Governance":"ایگزیکٹو کمیٹی اور چیمبر کا انتظام",
    "Committee Members":"کمیٹی اراکین",
    "Committee Roles":"کمیٹی کے کردار",
    "Official Records":"سرکاری ریکارڈ",
    "Membership Information":"رکنیت کی معلومات",
    "Become part of Dadu's business community.":"دادو کی کاروباری برادری کا حصہ بنیں۔",
    "Why membership":"رکنیت کیوں؟",
    "Business representation":"کاروباری نمائندگی",
    "Networking opportunities":"نیٹ ورکنگ کے مواقع",
    "Chamber information and updates":"چیمبر کی معلومات اور تازہ خبریں",
    "Access to member-focused resources":"ارکان کے لیے مخصوص وسائل تک رسائی",
    "Confirm requirements":"ضروریات کی تصدیق",
    "Submit application":"درخواست جمع کریں",
    "Verification":"تصدیق",
    "Chamber news, announcements and business community updates.":"چیمبر کی خبریں، اعلانات اور کاروباری برادری کی تازہ معلومات۔",
    "Events & chamber activities":"تقریبات اور چیمبر کی سرگرمیاں",
    "Business resources & downloads":"کاروباری وسائل اور ڈاؤن لوڈز",
    "Send an inquiry":"استفسار بھیجیں",
    "We are here to help.":"ہم مدد کے لیے موجود ہیں۔",
    "Your name":"آپ کا نام",
    "Email address":"ای میل ایڈریس",
    "Subject":"موضوع",
    "Message":"پیغام",
    "Submit Inquiry":"استفسار جمع کریں",
    },
  sd: {    "Dadu Chamber of Commerce & Industry connects businesses, represents the commercial community and provides a trusted platform for information, services and collaboration.":"دادو چيمبر آف ڪامرس اينڊ انڊسٽري ڪاروبارن کي ڳنڍي ٿو، ڪاروباري برادري جي نمائندگي ڪري ٿو ۽ معلومات، خدمتن ۽ سهڪار لاءِ قابلِ اعتماد پليٽ فارم فراهم ڪري ٿو.",
    "Dadu Chamber of Commerce & Industry provides an institutional platform where the local business community can connect, communicate and engage around shared commercial interests.":"دادو چيمبر آف ڪامرس اينڊ انڊسٽري هڪ ادارتي پليٽ فارم آهي جتي مقامي ڪاروباري برادري گڏيل ڪاروباري مفادن لاءِ رابطو ۽ سهڪار ڪري سگهي ٿي.",
    "This new digital experience is designed to make chamber information easier to discover — from leadership and membership to news, events, notices and resources.":"هي نئون ڊجيٽل تجربو چيمبر جي معلومات کي آسان بڻائي ٿو، جنهن ۾ قيادت، ميمبرشپ، خبرون، تقريبون، نوٽيس ۽ وسيلا شامل آهن.",
    "Contact the chamber office for official information and assistance.":"سرڪاري معلومات ۽ مدد لاءِ چيمبر آفيس سان رابطو ڪريو.",
    "A dedicated digital presence for a growing business community.":"وڌندڙ ڪاروباري برادري لاءِ وقف ڊجيٽل موجودگي.",
    "Represent, connect and support businesses through meaningful chamber engagement.":"بامقصد چيمبر رابطي ذريعي ڪاروبارن جي نمائندگي، رابطو ۽ سهڪار ڪرڻ.",
    "Improve communication, encourage collaboration and make business information accessible.":"رابطي کي بهتر بڻائڻ، سهڪار کي هٿي ڏيڻ ۽ ڪاروباري معلومات کي آسان بڻائڻ.",
    "Publish the approved current executive committee roster here.":"منظور ٿيل موجوده ايگزيڪيوٽو ڪميٽي جا ميمبر هتي شايع ڪيا ويندا.",
    "Organize portfolios, responsibilities and chamber functions clearly.":"ذميوارين ۽ چيمبر جي ڪمن کي واضح نموني ترتيب ڏنو ويندو.",
    "Provide approved minutes, notices and committee documents in one place.":"منظور ٿيل ڪارروائي، نوٽيس ۽ ڪميٽي جا دستاويز هڪ هنڌ فراهم ڪيا ويندا.",
    "Membership information should be simple to understand, easy to access and backed by official chamber procedures.":"ميمبرشپ جي معلومات آسان، واضح ۽ سرڪاري چيمبر جي طريقيڪار مطابق هجڻ گهرجي.",
    "A stronger network starts with participation.":"مضبوط نيٽ ورڪ شموليت سان شروع ٿئي ٿو.",
    "The chamber office reviews the submitted information according to its procedures.":"چيمبر آفيس جمع ڪرايل معلومات جو پنهنجي طريقيڪار مطابق جائزو وٺي ٿي.",
    "Receive official confirmation and access applicable chamber services.":"سرڪاري تصديق حاصل ڪريو ۽ لاڳو چيمبر خدمتن تائين رسائي حاصل ڪريو.",
    "A central publishing space for verified DCCI news and official public updates.":"تصديق ٿيل DCCI خبرن ۽ سرڪاري تازه ڪارين لاءِ مرڪزي جاءِ.",
    "Publish upcoming meetings, seminars, consultations and business community events here.":"ايندڙ گڏجاڻيون، سيمينار، صلاح مشورا ۽ ڪاروباري برادري جون تقريبون هتي شايع ڪيون وينديون.",
    "Highlight official sessions involving members, institutions and business stakeholders.":"ميمبرن، ادارن ۽ ڪاروباري ڌرين سان لاڳاپيل سرڪاري سيشن نمايان ڪيا ويندا.",
    "Document chamber activities and approved public engagements with dates and locations.":"چيمبر جون سرگرميون ۽ منظور ٿيل عوامي مصروفيتون تاريخن ۽ هنڌن سان درج ڪيون وينديون.",
    "A structured document centre ready for approved DCCI forms, notices, reports and circulars.":"منظور ٿيل DCCI فارمن، نوٽيسن، رپورٽن ۽ سرڪيولرز لاءِ منظم دستاويزي مرڪز.",
    "For official chamber information, membership guidance and business community communication, contact the chamber office.":"سرڪاري چيمبر معلومات، ميمبرشپ جي رهنمائي ۽ ڪاروباري برادري سان رابطي لاءِ چيمبر آفيس سان رابطو ڪريو.",
    "Need the official membership form?":"سرڪاري ميمبرشپ فارم گهرجي؟",
    "The approved form and current fee/document requirements should be uploaded to Resources by the chamber office.":"منظور ٿيل فارم ۽ موجوده فيس يا دستاويزي گهرجون چيمبر آفيس طرفان وسيلن ۾ اپلوڊ ڪيون وڃن.",
    "Contact the chamber office →":"چيمبر آفيس سان رابطو ڪريو →",
    "Home":"گھر",
    "About":"چيمبر بابت",
    "Leadership":"قيادت",
    "Committee":"ڪميٽي",
    "Membership":"ميمبرشپ",
    "News":"خبرون",
    "Events":"تقريبون",
    "Resources":"وسيلا",
    "Contact":"رابطو",
    "Contact Chamber":"چيمبر سان رابطو",
    "Commerce & Industry":"واپار ۽ صنعت",
    "Dadu Chamber of Commerce & Industry":"دادو چيمبر آف ڪامرس اينڊ انڊسٽري",
    "Dadu · Sindh · Pakistan":"دادو · سنڌ · پاڪستان",
    "Building a stronger":"وڌيڪ مضبوط",
    "business community.":"ڪاروباري برادري جي تعمير.",
    "DCCI / 2026":"DCCI / 2026",
    "Business Representation":"ڪاروباري نمائندگي",
    "Networking & Collaboration":"رابطا ۽ سهڪار",
    "Chamber Communication":"چيمبر جي معلومات",
    "Trusted Institution":"قابلِ اعتماد ادارو",
    "Our focus":"اسان جو ڌيان",
    "Connect · Represent · Support · Grow":"رابطو · نمائندگي · سهڪار · ترقي",
    "District Focus":"ضلعي توجهه",
    "Dadu District":"دادو ضلعو",
    "Region":"علائقو",
    "Sindh, Pakistan":"سنڌ، پاڪستان",
    "Purpose":"مقصد",
    "Business Community":"ڪاروباري برادري",
    "About the Chamber":"چيمبر بابت",
    "A professional platform for Dadu's business community.":"دادو جي ڪاروباري برادري لاءِ هڪ پيشه ور پليٽ فارم.",
    "Learn more about DCCI":"DCCI بابت وڌيڪ ڄاڻو",
    "Office Bearers":"عهدو دار",
    "View leadership":"قيادت ڏسو",
    "Member Value":"ميمبرن جا فائدا",
    "What DCCI stands for":"DCCI جو مقصد",
    "Information":"معلومات",
    "Business Support":"ڪاروباري سهڪار",
    "Networking":"نيٽ ورڪنگ",
    "Latest":"تازو",
    "News & Updates":"خبرون ۽ تازيون ڄاڻ",
    "View all updates":"سڀ تازيون ڄاڻ ڏسو",
    "Connect with DCCI":"DCCI سان رابطو ڪريو",
    "Contact Office":"آفيس سان رابطو",
    "Chamber Office":"چيمبر آفيس",
    "Downloads":"ڊائون لوڊز",
    "Executive Committee":"ايگزيڪيوٽو ڪميٽي",
    "Executive Committee & Chamber Governance":"ايگزيڪيوٽو ڪميٽي ۽ چيمبر جو انتظام",
    "Committee Members":"ڪميٽي جا ميمبر",
    "Committee Roles":"ڪميٽي جا ڪردار",
    "Official Records":"سرڪاري رڪارڊ",
    "Become part of Dadu's business community.":"دادو جي ڪاروباري برادري جو حصو بڻجو.",
    "Why membership":"ميمبرشپ ڇو؟",
    "Business representation":"ڪاروباري نمائندگي",
    "Networking opportunities":"رابطا وڌائڻ جا موقعا",
    "Chamber information and updates":"چيمبر جي معلومات ۽ تازيون خبرون",
    "Access to member-focused resources":"ميمبرن لاءِ وسيلن تائين رسائي",
    "Confirm requirements":"ضرورتن جي تصديق",
    "Submit application":"درخواست جمع ڪريو",
    "Verification":"تصديق",
    "Chamber news, announcements and business community updates.":"چيمبر جون خبرون، اعلان ۽ ڪاروباري برادري جون تازيون ڄاڻ.",
    "Events & chamber activities":"تقريبون ۽ چيمبر جون سرگرميون",
    "Business resources & downloads":"ڪاروباري وسيلا ۽ ڊائون لوڊز",
    "Send an inquiry":"پڇا ڳاڇا موڪليو",
    "We are here to help.":"اسان مدد لاءِ موجود آهيون.",
    "Your name":"توهان جو نالو",
    "Email address":"اي ميل پتو",
    "Subject":"موضوع",
    "Message":"پيغام",
    "Submit Inquiry":"پڇا ڳاڇا جمع ڪريو",
    }
};

const originalText = new WeakMap<Text, string>();

function normalize(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function applyLanguage(language: Language) {
  const dict = language === "en" ? null : translations[language];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  while (walker.nextNode()) nodes.push(walker.currentNode as Text);

  for (const node of nodes) {
    const parent = node.parentElement;
    if (!parent || ["SCRIPT","STYLE","NOSCRIPT"].includes(parent.tagName)) continue;
    const original = originalText.get(node) ?? normalize(node.nodeValue ?? "");
    if (!originalText.has(node)) originalText.set(node, original);
    const translated = dict?.[original] ?? original;
    if (normalize(node.nodeValue ?? "") !== translated) node.nodeValue = translated;
  }

  document.querySelectorAll<HTMLElement>("[placeholder],[aria-label],[title]").forEach((el) => {
    for (const attr of ["placeholder","aria-label","title"]) {
      const value = el.getAttribute(attr);
      if (!value) continue;
      const original = el.dataset[`dcci-${attr}`] ?? normalize(value);
      el.dataset[`dcci-${attr}`] = original;
      const translated = dict?.[original] ?? original;
      if (value !== translated) el.setAttribute(attr, translated);
    }
  });
}

export function LanguageEngine() {
  useEffect(() => {
    const initial = (localStorage.getItem("dcci-language") as Language | null) ?? "en";
    const setLanguage = (language: Language) => {
      document.documentElement.dir = language === "en" ? "ltr" : "rtl";
      document.documentElement.lang = language;
      applyLanguage(language);
    };
    setLanguage(initial);
    const onChange = (event: Event) => setLanguage((event as CustomEvent<Language>).detail);
    window.addEventListener("dcci-language-change", onChange);
    const observer = new MutationObserver(() => applyLanguage((localStorage.getItem("dcci-language") as Language | null) ?? "en"));
    observer.observe(document.body, { childList: true, subtree: true });
    return () => {
      window.removeEventListener("dcci-language-change", onChange);
      observer.disconnect();
    };
  }, []);
  return null;
}
