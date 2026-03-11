import { useState, useEffect } from "react";

const COLORS = {
  navy: "#0D1B2A", navyLight: "#1A2E45", gold: "#C9A84C", goldLight: "#E8C96A",
  cream: "#FAF6EE", text: "#1A1A2E", muted: "#6B7280", white: "#FFFFFF",
  success: "#2D9B6F", surface: "#F4EFE6",
};

const jobs = [
  { id: 1, title: "مهندس برمجيات", company: "أرامكو السعودية", location: "الظهران", type: "دوام كامل", badge: "جديد" },
  { id: 2, title: "محلل بيانات", company: "stc", location: "الرياض", type: "دوام كامل", badge: "" },
  { id: 3, title: "مصمم جرافيك", company: "إم بي سي", location: "جدة", type: "عن بُعد", badge: "مميز" },
  { id: 4, title: "محاسب قانوني", company: "ديلويت", location: "الرياض", type: "دوام كامل", badge: "" },
];

const trainings = [
  { id: 1, title: "تدريب تعاوني في هندسة البرمجيات", org: "مايكروسوفت السعودية", duration: "6 أشهر", seats: "12 مقعداً" },
  { id: 2, title: "تدريب في التسويق الرقمي", org: "شركة جوجل", duration: "3 أشهر", seats: "8 مقاعد" },
  { id: 3, title: "تدريب في الذكاء الاصطناعي", org: "SDAIA", duration: "4 أشهر", seats: "20 مقعداً" },
];

const gradPrograms = [
  {
    id: 1, title: "برنامج خريجي أرامكو", org: "أرامكو السعودية",
    icon: "🛢️", color: "#006C35", duration: "سنتان",
    desc: "برنامج تطويري متكامل للخريجين في مجالات الهندسة والتقنية والأعمال، يشمل تدريباً ميدانياً ومساراً وظيفياً واضحاً.",
    link: "https://www.aramco.com", badge: "مفتوح",
  },
  {
    id: 2, title: "برنامج الخريجين المتميزين", org: "البنك الأهلي السعودي",
    icon: "🏦", color: "#00A86B", duration: "18 شهراً",
    desc: "برنامج مكثف يُعدّ الخريجين للعمل في القطاع المصرفي والمالي من خلال تدريب دوري في أقسام متعددة.",
    link: "https://www.alahli.com", badge: "جديد",
  },
  {
    id: 3, title: "برنامج المواهب الرقمية", org: "stc",
    icon: "📡", color: "#7B2DE0", duration: "12 شهراً",
    desc: "يستهدف خريجي تقنية المعلومات والاتصالات، ويتضمن مشاريع حقيقية في الذكاء الاصطناعي وأمن المعلومات.",
    link: "https://www.stc.com.sa", badge: "",
  },
  {
    id: 4, title: "برنامج سفراء المستقبل", org: "وزارة الصحة",
    icon: "🏥", color: "#DC2626", duration: "سنة",
    desc: "يُهيئ خريجي الصحة والطب لدخول القطاع الصحي الحكومي بمزايا وظيفية وتدريب متخصص.",
    link: "https://www.moh.gov.sa", badge: "",
  },
];

const stores = [
  {
    id: 1, name: "مكتبة جرير", discount: "15%", category: "كتب وقرطاسية",
    logoText: "جرير", logoColor: "#C0392B", logoBg: "#FFF0EE",
    desc: "أكبر سلسلة مكتبات في المملكة، تقدم كتباً ومستلزمات مدرسية وأدوات قرطاسية وإلكترونيات متنوعة.",
    contact: "8002444455", link: "https://www.jarir.com",
  },
  {
    id: 2, name: "إكسترا", discount: "20%", category: "إلكترونيات وتقنية",
    logoText: "eXtra", logoColor: "#1565C0", logoBg: "#EEF3FF",
    desc: "متجر إلكترونيات رائد يوفر أحدث الأجهزة والتقنيات بضمان شامل وخدمة ما بعد البيع.",
    contact: "920000997", link: "https://www.extra.com",
  },
  {
    id: 3, name: "كافيه أكاديميا", discount: "10%", category: "مطاعم وكافيهات",
    logoText: "ACA", logoColor: "#6B4C1E", logoBg: "#FFF8EE",
    desc: "كافيه بأجواء أكاديمية هادئة مثالية للدراسة والعمل، يقدم مشروبات ومأكولات فاخرة.",
    contact: "info@academia-cafe.sa", link: "https://academia-cafe.sa",
  },
  {
    id: 4, name: "ناين ويست", discount: "25%", category: "أزياء وأحذية",
    logoText: "9W", logoColor: "#1A1A2E", logoBg: "#F3F3F8",
    desc: "علامة عالمية للأزياء والأحذية النسائية تجمع بين الأناقة العصرية والجودة العالية.",
    contact: "8001009900", link: "https://www.ninewest.com",
  },
];

const tips = [
  { id: 1, title: "كيف تكتب CV احترافي؟", author: "د. سارة العمري", reads: "2.4k", icon: "📝" },
  { id: 2, title: "أسرار النجاح في مقابلات العمل", author: "م. خالد السبيعي", reads: "5.1k", icon: "🎯" },
  { id: 3, title: "بناء شبكة علاقات مهنية قوية", author: "ن. الزهراني", reads: "3.7k", icon: "🤝" },
];

const courses = [
  { id: 1, title: "تطوير تطبيقات الجوال", level: "متوسط", hours: "24 ساعة", enrolled: "340", icon: "📱" },
  { id: 2, title: "ريادة الأعمال للمبتدئين", level: "مبتدئ", hours: "12 ساعة", enrolled: "890", icon: "🚀" },
  { id: 3, title: "تحليل البيانات بـ Python", level: "متقدم", hours: "36 ساعة", enrolled: "210", icon: "📊" },
];

/* ─── HELPERS ─────────────────────────────────────────────────────── */
function SectionHeader({ title, icon }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, margin: "22px 0 12px" }}>
      <span style={{ fontSize: 18 }}>{icon}</span>
      <h2 style={{ margin: 0, fontSize: 17, fontWeight: 800, color: COLORS.navy }}>{title}</h2>
    </div>
  );
}

/* ─── CARDS ──────────────────────────────────────────────────────── */
function JobCard({ job }) {
  return (
    <div style={{ background: COLORS.white, borderRadius: 16, padding: 16, marginBottom: 12, boxShadow: "0 2px 12px rgba(13,27,42,0.08)" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h3 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: COLORS.navy }}>{job.title}</h3>
          <p style={{ margin: "4px 0 0", fontSize: 13, color: COLORS.muted }}>{job.company} · {job.location}</p>
        </div>
        {job.badge && (
          <span style={{ background: job.badge === "جديد" ? "#DCF5EC" : "#FFF3DC", color: job.badge === "جديد" ? COLORS.success : "#B07D1A", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20, height: "fit-content" }}>{job.badge}</span>
        )}
      </div>
      <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
        <span style={{ background: COLORS.surface, color: COLORS.navy, fontSize: 12, padding: "4px 12px", borderRadius: 20, fontWeight: 600 }}>{job.type}</span>
        <button style={{ background: COLORS.gold, color: COLORS.white, border: "none", borderRadius: 20, fontSize: 12, padding: "5px 16px", fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>تقدّم الآن</button>
      </div>
    </div>
  );
}

function TrainingCard({ t }) {
  return (
    <div style={{ background: COLORS.white, borderRadius: 16, padding: 16, marginBottom: 12, boxShadow: "0 2px 12px rgba(13,27,42,0.08)" }}>
      <h3 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: COLORS.navy }}>{t.title}</h3>
      <p style={{ margin: "6px 0 0", fontSize: 13, color: COLORS.muted }}>{t.org}</p>
      <div style={{ display: "flex", gap: 8, marginTop: 12, flexWrap: "wrap" }}>
        <span style={{ background: "#E8F0FF", color: "#2D4AE0", fontSize: 12, padding: "3px 10px", borderRadius: 20, fontWeight: 600 }}>⏱ {t.duration}</span>
        <span style={{ background: "#F0E8FF", color: "#7B2DE0", fontSize: 12, padding: "3px 10px", borderRadius: 20, fontWeight: 600 }}>🪑 {t.seats}</span>
        <button style={{ marginRight: "auto", background: COLORS.navy, color: COLORS.white, border: "none", borderRadius: 20, fontSize: 12, padding: "5px 14px", fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>سجّل</button>
      </div>
    </div>
  );
}

function GradCard({ p }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ background: COLORS.white, borderRadius: 18, marginBottom: 14, boxShadow: "0 2px 14px rgba(13,27,42,0.09)", overflow: "hidden" }}>
      <div style={{ background: p.color, padding: "14px 16px", display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ fontSize: 28 }}>{p.icon}</span>
        <div style={{ flex: 1 }}>
          <div style={{ color: "#fff", fontWeight: 800, fontSize: 14 }}>{p.title}</div>
          <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 12 }}>{p.org}</div>
        </div>
        {p.badge && <span style={{ background: "rgba(255,255,255,0.22)", color: "#fff", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20 }}>{p.badge}</span>}
      </div>
      <div style={{ padding: "12px 16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ background: COLORS.surface, color: COLORS.navy, fontSize: 12, padding: "3px 12px", borderRadius: 20, fontWeight: 600 }}>⏳ {p.duration}</span>
          <button onClick={() => setOpen(!open)} style={{ background: "none", border: "none", color: COLORS.gold, fontWeight: 700, fontSize: 12, cursor: "pointer", fontFamily: "inherit" }}>{open ? "إخفاء ▲" : "تفاصيل ▼"}</button>
        </div>
        {open && (
          <div style={{ marginTop: 12 }}>
            <p style={{ margin: "0 0 12px", fontSize: 13, color: COLORS.text, lineHeight: 1.75 }}>{p.desc}</p>
            <div style={{ display: "flex", gap: 8 }}>
              <a href={`mailto:hr@company.sa`} style={{ flex: 1, background: COLORS.surface, color: COLORS.navy, borderRadius: 12, padding: "9px", fontWeight: 700, fontSize: 12, textAlign: "center", textDecoration: "none", display: "block" }}>📧 تواصل</a>
              <a href={p.link} target="_blank" rel="noreferrer" style={{ flex: 2, background: COLORS.navy, color: COLORS.gold, borderRadius: 12, padding: "9px", fontWeight: 700, fontSize: 12, textAlign: "center", textDecoration: "none", display: "block" }}>🔗 صفحة البرنامج</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function StoreCard({ s }) {
  const isEmail = s.contact?.includes("@");
  return (
    <div style={{ background: COLORS.white, borderRadius: 18, marginBottom: 14, boxShadow: "0 2px 14px rgba(13,27,42,0.09)", overflow: "hidden" }}>
      {/* Top row */}
      <div style={{ padding: "16px 16px 12px", display: "flex", alignItems: "center", gap: 14 }}>
        {/* Store Logo */}
        <div style={{ width: 58, height: 58, borderRadius: 16, background: s.logoBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: `2px solid ${s.logoColor}25` }}>
          <span style={{ color: s.logoColor, fontWeight: 900, fontSize: s.logoText.length > 3 ? 12 : 16, letterSpacing: -0.5 }}>{s.logoText}</span>
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{ margin: 0, fontSize: 15, fontWeight: 800, color: COLORS.navy }}>{s.name}</h3>
          <p style={{ margin: "3px 0 0", fontSize: 12, color: COLORS.muted }}>{s.category}</p>
        </div>
        {/* Discount */}
        <div style={{ textAlign: "center", flexShrink: 0 }}>
          <div style={{ background: `linear-gradient(135deg,${COLORS.gold},${COLORS.goldLight})`, color: COLORS.white, fontWeight: 900, fontSize: 20, borderRadius: 14, padding: "8px 12px", lineHeight: 1.1 }}>{s.discount}</div>
          <div style={{ fontSize: 10, color: COLORS.muted, marginTop: 4 }}>خصم الأعضاء</div>
        </div>
      </div>
      {/* Description */}
      <div style={{ padding: "0 16px 14px" }}>
        <p style={{ margin: "0 0 12px", fontSize: 13, color: COLORS.text, lineHeight: 1.7, borderTop: `1px solid ${COLORS.surface}`, paddingTop: 12 }}>{s.desc}</p>
        <div style={{ display: "flex", gap: 8 }}>
          {isEmail ? (
            <a href={`mailto:${s.contact}`} style={{ flex: 1, background: COLORS.surface, color: COLORS.navy, borderRadius: 12, padding: "9px 6px", fontWeight: 700, fontSize: 11, textAlign: "center", textDecoration: "none", display: "block" }}>📧 {s.contact}</a>
          ) : (
            <a href={`tel:${s.contact}`} style={{ flex: 1, background: COLORS.surface, color: COLORS.navy, borderRadius: 12, padding: "9px 6px", fontWeight: 700, fontSize: 12, textAlign: "center", textDecoration: "none", display: "block" }}>📞 {s.contact}</a>
          )}
          <a href={s.link} target="_blank" rel="noreferrer" style={{ flex: 1, background: COLORS.navy, color: COLORS.gold, borderRadius: 12, padding: "9px 6px", fontWeight: 700, fontSize: 12, textAlign: "center", textDecoration: "none", display: "block" }}>🌐 زيارة المتجر</a>
        </div>
      </div>
    </div>
  );
}

function TipCard({ tip }) {
  return (
    <div style={{ background: COLORS.white, borderRadius: 16, padding: "14px 16px", marginBottom: 12, boxShadow: "0 2px 12px rgba(13,27,42,0.08)" }}>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <span style={{ fontSize: 28 }}>{tip.icon}</span>
        <div>
          <h3 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: COLORS.navy }}>{tip.title}</h3>
          <p style={{ margin: "4px 0 0", fontSize: 12, color: COLORS.muted }}>{tip.author} · {tip.reads} قراءة</p>
        </div>
      </div>
      <button style={{ marginTop: 10, width: "100%", background: "transparent", border: `1.5px solid ${COLORS.gold}`, color: COLORS.gold, borderRadius: 20, fontSize: 12, padding: "8px", fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>اقرأ المقال</button>
    </div>
  );
}

function CourseCard({ c }) {
  const lc = c.level === "مبتدئ" ? "#2D9B6F" : c.level === "متوسط" ? "#D97706" : "#DC2626";
  return (
    <div style={{ background: COLORS.white, borderRadius: 16, padding: "14px 16px", marginBottom: 12, boxShadow: "0 2px 12px rgba(13,27,42,0.08)" }}>
      <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
        <span style={{ fontSize: 30 }}>{c.icon}</span>
        <div style={{ flex: 1 }}>
          <h3 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: COLORS.navy }}>{c.title}</h3>
          <div style={{ display: "flex", gap: 8, marginTop: 8, flexWrap: "wrap" }}>
            <span style={{ background: `${lc}22`, color: lc, fontSize: 11, padding: "2px 10px", borderRadius: 20, fontWeight: 700 }}>{c.level}</span>
            <span style={{ color: COLORS.muted, fontSize: 12 }}>⏱ {c.hours}</span>
            <span style={{ color: COLORS.muted, fontSize: 12 }}>👥 {c.enrolled}</span>
          </div>
        </div>
      </div>
      <button style={{ marginTop: 12, width: "100%", background: COLORS.navy, color: COLORS.white, border: "none", borderRadius: 14, fontSize: 13, padding: "10px", fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>ابدأ الدورة</button>
    </div>
  );
}

/* ─── SCREENS ─────────────────────────────────────────────────────── */
function SplashScreen({ onDone }) {
  useEffect(() => { const t = setTimeout(onDone, 2200); return () => clearTimeout(t); }, []);
  return (
    <div style={{ height: "100%", background: COLORS.navy, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16 }}>
      <div style={{ width: 96, height: 96, borderRadius: 28, background: "linear-gradient(135deg,#C9A84C,#E8C96A)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 40px rgba(201,168,76,0.45)" }}>
        <span style={{ fontSize: 46 }}>🖊</span>
      </div>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontFamily: "'Georgia',serif", fontSize: 36, fontWeight: 900, color: COLORS.gold }}>مداد</div>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", letterSpacing: 5, marginTop: 4 }}>M E D A D</div>
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, marginTop: 10 }}>بوابتك نحو مستقبل مهني متميز</p>
      </div>
      <div style={{ display: "flex", gap: 8, marginTop: 30 }}>
        {[0, 1, 2].map(i => <div key={i} style={{ width: 8, height: 8, borderRadius: 4, background: i === 0 ? COLORS.gold : "rgba(255,255,255,0.2)", animation: "pulse 1.4s infinite", animationDelay: `${i * 0.3}s` }} />)}
      </div>
    </div>
  );
}

function AuthScreen({ onLogin }) {
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({ name: "", phone: "", email: "", fullName: "" });
  const [error, setError] = useState("");

  const inp = (ph, key, type = "text") => (
    <input key={key} type={type} placeholder={ph} value={form[key]}
      onChange={e => { setForm({ ...form, [key]: e.target.value }); setError(""); }}
      style={{ width: "100%", padding: "14px 16px", borderRadius: 14, border: "1.5px solid #E5DDD0", background: COLORS.cream, fontSize: 14, color: COLORS.navy, outline: "none", boxSizing: "border-box", fontFamily: "inherit", textAlign: "right", direction: "rtl" }}
    />
  );

  const handleSubmit = async () => {
    if (mode === "register") {
      if (!form.fullName || !form.phone || !form.email || !form.name) { setError("يرجى تعبئة جميع الحقول"); return; }
      try { await window.storage.set(`user:${form.phone}`, JSON.stringify(form)); } catch {}
      onLogin(form);
    } else {
      if (!form.phone) { setError("يرجى إدخال رقم الجوال"); return; }
      try {
        const res = await window.storage.get(`user:${form.phone}`);
        if (res) onLogin(JSON.parse(res.value));
        else setError("المستخدم غير موجود، يرجى التسجيل أولاً");
      } catch { setError("حدث خطأ، حاول مرة أخرى"); }
    }
  };

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: COLORS.navy, overflowY: "auto" }}>
      <div style={{ padding: "60px 24px 40px", textAlign: "center" }}>
        <div style={{ width: 76, height: 76, borderRadius: 22, background: "linear-gradient(135deg,#C9A84C,#E8C96A)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", boxShadow: "0 8px 28px rgba(201,168,76,0.4)" }}>
          <span style={{ fontSize: 36 }}>🖊</span>
        </div>
        <div style={{ fontFamily: "'Georgia',serif", fontSize: 30, fontWeight: 900, color: COLORS.gold }}>مداد</div>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, marginTop: 8 }}>بوابتك نحو مستقبل مهني متميز</p>
      </div>
      <div style={{ flex: 1, background: COLORS.cream, borderRadius: "28px 28px 0 0", padding: "28px 22px", display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ display: "flex", background: "#E5DDD0", borderRadius: 14, padding: 4 }}>
          {["login", "register"].map(m => (
            <button key={m} onClick={() => setMode(m)} style={{ flex: 1, padding: 10, borderRadius: 11, border: "none", fontWeight: 700, fontSize: 13, cursor: "pointer", background: mode === m ? COLORS.navy : "transparent", color: mode === m ? COLORS.gold : COLORS.muted, fontFamily: "inherit" }}>
              {m === "login" ? "تسجيل الدخول" : "حساب جديد"}
            </button>
          ))}
        </div>
        {mode === "register" && <>{inp("الاسم المستخدم", "name")}{inp("الاسم الثلاثي الكامل", "fullName")}{inp("رقم الجوال", "phone", "tel")}{inp("البريد الإلكتروني", "email", "email")}</>}
        {mode === "login" && inp("رقم الجوال", "phone", "tel")}
        {error && <p style={{ color: "#DC2626", fontSize: 13, margin: 0, textAlign: "center" }}>{error}</p>}
        <button onClick={handleSubmit} style={{ background: `linear-gradient(135deg,${COLORS.navy},#1A3A5C)`, color: COLORS.gold, border: "none", borderRadius: 14, padding: 15, fontSize: 15, fontWeight: 900, cursor: "pointer", fontFamily: "inherit" }}>
          {mode === "login" ? "دخول ←" : "إنشاء الحساب ←"}
        </button>
        <p style={{ textAlign: "center", fontSize: 11, color: COLORS.muted, margin: 0 }}>بالمتابعة توافق على شروط الاستخدام وسياسة الخصوصية</p>
      </div>
    </div>
  );
}

function HomeScreen({ user, setTab }) {
  const hour = new Date().getHours();
  const greet = hour < 12 ? "صباح الخير" : hour < 17 ? "مساء الخير" : "مساء النور";
  return (
    <div style={{ paddingBottom: 20 }}>
      <div style={{ background: `linear-gradient(135deg,${COLORS.navy} 0%,#1A3A5C 100%)`, padding: "50px 20px 56px", borderRadius: "0 0 32px 32px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <p style={{ margin: 0, color: "rgba(255,255,255,0.6)", fontSize: 13 }}>{greet}،</p>
            <h2 style={{ margin: "4px 0 0", color: COLORS.white, fontSize: 20, fontWeight: 800 }}>{user.fullName || user.name} 👋</h2>
          </div>
          <div style={{ width: 46, height: 46, borderRadius: 23, background: COLORS.gold, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontWeight: 900, color: COLORS.navy }}>
            {(user.fullName || user.name || "م")[0]}
          </div>
        </div>
        <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
          {[{ label: "وظيفة", count: jobs.length, icon: "💼", t: "jobs" }, { label: "خريجون", count: gradPrograms.length, icon: "🎖️", t: "grad" }, { label: "تدريب", count: trainings.length, icon: "🎓", t: "training" }].map(s => (
            <div key={s.label} onClick={() => setTab(s.t)} style={{ flex: 1, background: "rgba(255,255,255,0.12)", borderRadius: 14, padding: "12px 8px", textAlign: "center", cursor: "pointer" }}>
              <div style={{ fontSize: 20 }}>{s.icon}</div>
              <div style={{ color: COLORS.gold, fontWeight: 900, fontSize: 18 }}>{s.count}+</div>
              <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 11 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "0 16px", marginTop: -14 }}>
        <div style={{ background: `linear-gradient(135deg,${COLORS.gold},${COLORS.goldLight})`, borderRadius: 20, padding: "16px 20px", boxShadow: "0 6px 24px rgba(201,168,76,0.3)", display: "flex", alignItems: "center", gap: 14, marginBottom: 22 }}>
          <span style={{ fontSize: 36 }}>🪙</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 900, fontSize: 15, color: COLORS.navy }}>بطاقة عضوية مداد</div>
            <div style={{ fontSize: 12, color: "rgba(13,27,42,0.65)", marginTop: 2 }}>خصومات حصرية في المتاجر المشاركة</div>
          </div>
          <div onClick={() => setTab("stores")} style={{ background: COLORS.navy, borderRadius: 12, padding: "6px 14px", color: COLORS.gold, fontSize: 11, fontWeight: 800, cursor: "pointer" }}>عرض</div>
        </div>

        <SectionHeader title="أحدث الوظائف" icon="💼" />
        {jobs.slice(0, 2).map(j => <JobCard key={j.id} job={j} />)}

        <SectionHeader title="برامج الخريجين" icon="🎖️" />
        {gradPrograms.slice(0, 2).map(p => <GradCard key={p.id} p={p} />)}

        <SectionHeader title="المتاجر الشريكة" icon="🏪" />
        {stores.slice(0, 2).map(s => <StoreCard key={s.id} s={s} />)}

        <SectionHeader title="دورة مقترحة" icon="📖" />
        <CourseCard c={courses[0]} />

        <SectionHeader title="نصائح مهنية" icon="💡" />
        {tips.slice(0, 2).map(t => <TipCard key={t.id} tip={t} />)}
      </div>
    </div>
  );
}

/* ─── PROFILE ─────────────────────────────────────────────────────── */
function ProfileScreen({ user, setUser, onLogout }) {
  const [editMode, setEditMode] = useState(false);
  const [editFullName, setEditFullName] = useState(user.fullName || "");
  const [editUsername, setEditUsername] = useState(user.name || "");
  const [saved, setSaved] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [contactMsg, setContactMsg] = useState("");
  const [contactSent, setContactSent] = useState(false);

  const saveEdits = async () => {
    const updated = { ...user, fullName: editFullName, name: editUsername };
    setUser(updated);
    try {
      await window.storage.set("medad:currentUser", JSON.stringify(updated));
      await window.storage.set(`user:${user.phone}`, JSON.stringify(updated));
    } catch {}
    setEditMode(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const menuItems = [
    { label: "تعديل الاسم", icon: "✏️", action: () => { setShowContact(false); setEditMode(v => !v); } },
    { label: "الإشعارات", icon: "🔔", action: () => {} },
    { label: "الخصوصية", icon: "🔒", action: () => {} },
    { label: "تواصل معنا", icon: "📩", action: () => { setEditMode(false); setShowContact(v => !v); } },
    { label: "حول مداد", icon: "ℹ️", action: () => {} },
  ];

  return (
    <div style={{ paddingBottom: 20 }}>
      <div style={{ background: `linear-gradient(135deg,${COLORS.navy},#1A3A5C)`, padding: "50px 20px 70px", textAlign: "center", borderRadius: "0 0 36px 36px" }}>
        <div style={{ width: 82, height: 82, borderRadius: 41, background: COLORS.gold, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, fontWeight: 900, color: COLORS.navy, margin: "0 auto 12px", boxShadow: "0 4px 22px rgba(201,168,76,0.4)" }}>
          {(user.fullName || user.name || "م")[0]}
        </div>
        <h2 style={{ color: COLORS.white, margin: 0, fontSize: 20 }}>{user.fullName || user.name}</h2>
        <p style={{ color: "rgba(255,255,255,0.55)", margin: "4px 0 0", fontSize: 13 }}>عضو في مداد ✦</p>
      </div>

      <div style={{ padding: "0 16px", marginTop: -20 }}>
        {saved && (
          <div style={{ background: "#DCF5EC", color: COLORS.success, borderRadius: 12, padding: "10px 14px", textAlign: "center", fontWeight: 700, fontSize: 13, marginBottom: 12 }}>✅ تم حفظ التعديلات بنجاح</div>
        )}

        {/* Edit name panel */}
        {editMode && (
          <div style={{ background: COLORS.white, borderRadius: 18, padding: 18, marginBottom: 14, boxShadow: "0 4px 20px rgba(13,27,42,0.12)" }}>
            <h3 style={{ margin: "0 0 14px", fontSize: 15, color: COLORS.navy, fontWeight: 800 }}>✏️ تعديل البيانات</h3>
            {[["الاسم المستخدم", editUsername, setEditUsername], ["الاسم الثلاثي الكامل", editFullName, setEditFullName]].map(([ph, val, fn]) => (
              <input key={ph} placeholder={ph} value={val} onChange={e => fn(e.target.value)}
                style={{ width: "100%", padding: "12px 14px", borderRadius: 12, border: "1.5px solid #E5DDD0", background: COLORS.cream, fontSize: 14, color: COLORS.navy, outline: "none", boxSizing: "border-box", fontFamily: "inherit", textAlign: "right", direction: "rtl", marginBottom: 10 }} />
            ))}
            <div style={{ display: "flex", gap: 8 }}>
              <button onClick={() => setEditMode(false)} style={{ flex: 1, padding: 10, background: COLORS.surface, border: "none", borderRadius: 12, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", color: COLORS.muted, fontSize: 13 }}>إلغاء</button>
              <button onClick={saveEdits} style={{ flex: 2, padding: 10, background: COLORS.navy, color: COLORS.gold, border: "none", borderRadius: 12, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", fontSize: 13 }}>حفظ التعديلات ✓</button>
            </div>
          </div>
        )}

        {/* Contact us panel */}
        {showContact && (
          <div style={{ background: COLORS.white, borderRadius: 18, padding: 18, marginBottom: 14, boxShadow: "0 4px 20px rgba(13,27,42,0.12)" }}>
            <h3 style={{ margin: "0 0 4px", fontSize: 15, color: COLORS.navy, fontWeight: 800 }}>📩 تواصل معنا</h3>
            <p style={{ margin: "0 0 14px", fontSize: 12, color: COLORS.muted }}>سنردّ عليك خلال 24 ساعة على بريدك المسجّل</p>
            <div style={{ background: COLORS.surface, borderRadius: 12, padding: "10px 14px", marginBottom: 12, fontSize: 13, color: COLORS.navy, display: "flex", alignItems: "center", gap: 8 }}>
              <span>📧</span>
              <strong>support@medad.sa</strong>
            </div>
            {contactSent ? (
              <div style={{ background: "#DCF5EC", color: COLORS.success, borderRadius: 12, padding: "12px", textAlign: "center", fontWeight: 700, fontSize: 13 }}>✅ تم فتح تطبيق البريد، أرسل رسالتك!</div>
            ) : (
              <>
                <textarea
                  placeholder="اكتب رسالتك هنا..."
                  value={contactMsg}
                  onChange={e => setContactMsg(e.target.value)}
                  style={{ width: "100%", minHeight: 90, padding: "12px 14px", borderRadius: 12, border: "1.5px solid #E5DDD0", background: COLORS.cream, fontSize: 13, fontFamily: "inherit", textAlign: "right", direction: "rtl", resize: "none", outline: "none", boxSizing: "border-box", marginBottom: 10 }}
                />
                <div style={{ display: "flex", gap: 8 }}>
                  <button onClick={() => setShowContact(false)} style={{ flex: 1, padding: 10, background: COLORS.surface, border: "none", borderRadius: 12, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", color: COLORS.muted, fontSize: 13 }}>إلغاء</button>
                  <a
                    href={`mailto:support@medad.sa?subject=رسالة من ${encodeURIComponent(user.fullName || user.name)}&body=${encodeURIComponent(contactMsg)}`}
                    onClick={() => setContactSent(true)}
                    style={{ flex: 2, padding: 10, background: COLORS.navy, color: COLORS.gold, borderRadius: 12, fontWeight: 700, fontSize: 13, textAlign: "center", textDecoration: "none", display: "block" }}
                  >إرسال عبر البريد 📤</a>
                </div>
              </>
            )}
          </div>
        )}

        {/* User info */}
        {[{ label: "الاسم المستخدم", val: user.name, icon: "👤" }, { label: "الاسم الثلاثي", val: user.fullName, icon: "📛" }, { label: "رقم الجوال", val: user.phone, icon: "📱" }, { label: "البريد الإلكتروني", val: user.email, icon: "📧" }].map(r => r.val ? (
          <div key={r.label} style={{ background: COLORS.white, borderRadius: 14, padding: "13px 16px", marginBottom: 9, display: "flex", gap: 12, alignItems: "center", boxShadow: "0 2px 8px rgba(13,27,42,0.05)" }}>
            <span style={{ fontSize: 20 }}>{r.icon}</span>
            <div>
              <div style={{ fontSize: 11, color: COLORS.muted }}>{r.label}</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.navy, marginTop: 2 }}>{r.val}</div>
            </div>
          </div>
        ) : null)}

        {/* Menu */}
        <div style={{ margin: "20px 0 8px" }}>
          {menuItems.map(m => (
            <div key={m.label} onClick={m.action} style={{ background: COLORS.white, borderRadius: 14, padding: "14px 16px", marginBottom: 8, display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0 2px 8px rgba(13,27,42,0.05)", cursor: "pointer" }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <span>{m.icon}</span>
                <span style={{ fontSize: 14, fontWeight: 600, color: COLORS.navy }}>{m.label}</span>
              </div>
              <span style={{ color: COLORS.muted, fontSize: 18 }}>‹</span>
            </div>
          ))}
        </div>

        <button onClick={onLogout} style={{ width: "100%", padding: 14, background: "#FEE2E2", color: "#DC2626", border: "none", borderRadius: 14, fontSize: 14, fontWeight: 800, cursor: "pointer", fontFamily: "inherit" }}>
          تسجيل الخروج 🚪
        </button>
      </div>
    </div>
  );
}

/* ─── MAIN ─────────────────────────────────────────────────────────── */
export default function MedadApp() {
  const [screen, setScreen] = useState("splash");
  const [tab, setTab] = useState("home");
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const s = await window.storage.get("medad:currentUser");
        if (s) { setUser(JSON.parse(s.value)); }
      } catch {}
    })();
  }, []);

  const handleLogin = async (u) => {
    setUser(u);
    try { await window.storage.set("medad:currentUser", JSON.stringify(u)); } catch {}
    setScreen("app");
  };

  const handleLogout = async () => {
    try { await window.storage.delete("medad:currentUser"); } catch {}
    setUser(null); setScreen("auth"); setTab("home");
  };

  const tabs = [
    { id: "home", label: "الرئيسية", icon: "🏠" },
    { id: "jobs", label: "وظائف", icon: "💼" },
    { id: "grad", label: "خريجون", icon: "🎖️" },
    { id: "training", label: "تدريب", icon: "🎓" },
    { id: "stores", label: "متاجر", icon: "🏪" },
    { id: "courses", label: "دورات", icon: "📖" },
  ];

  const renderTab = () => {
    if (tab === "profile") return <ProfileScreen user={user} setUser={u => { setUser(u); }} onLogout={handleLogout} />;
    if (tab === "home") return <HomeScreen user={user} setTab={setTab} />;
    if (tab === "jobs") return (
      <div style={{ padding: "60px 16px 20px" }}>
        <h1 style={{ fontSize: 22, fontWeight: 900, color: COLORS.navy, margin: "0 0 16px" }}>الوظائف المتاحة 💼</h1>
        {jobs.map(j => <JobCard key={j.id} job={j} />)}
      </div>
    );
    if (tab === "grad") return (
      <div style={{ padding: "60px 16px 20px" }}>
        <h1 style={{ fontSize: 22, fontWeight: 900, color: COLORS.navy, margin: "0 0 4px" }}>برامج الخريجين 🎖️</h1>
        <p style={{ color: COLORS.muted, fontSize: 13, margin: "0 0 16px" }}>برامج تطويرية مصمّمة لبداية مسيرتك المهنية</p>
        {gradPrograms.map(p => <GradCard key={p.id} p={p} />)}
      </div>
    );
    if (tab === "training") return (
      <div style={{ padding: "60px 16px 20px" }}>
        <h1 style={{ fontSize: 22, fontWeight: 900, color: COLORS.navy, margin: "0 0 16px" }}>التدريب التعاوني 🎓</h1>
        {trainings.map(t => <TrainingCard key={t.id} t={t} />)}
      </div>
    );
    if (tab === "stores") return (
      <div style={{ padding: "60px 16px 20px" }}>
        <div style={{ background: `linear-gradient(135deg,${COLORS.gold},${COLORS.goldLight})`, borderRadius: 20, padding: "18px 16px", marginBottom: 20, textAlign: "center" }}>
          <div style={{ fontSize: 30 }}>🏷️</div>
          <div style={{ fontWeight: 900, fontSize: 16, color: COLORS.navy }}>خصومات حصرية لأعضاء مداد</div>
          <div style={{ fontSize: 12, color: "rgba(13,27,42,0.65)", marginTop: 4 }}>أبرز بطاقة عضويتك للحصول على الخصم</div>
        </div>
        {stores.map(s => <StoreCard key={s.id} s={s} />)}
      </div>
    );
    if (tab === "courses") return (
      <div style={{ padding: "60px 16px 20px" }}>
        <h1 style={{ fontSize: 22, fontWeight: 900, color: COLORS.navy, margin: "0 0 4px" }}>الدورات والنصائح 📚</h1>
        <p style={{ color: COLORS.muted, fontSize: 13, margin: "0 0 16px" }}>طور مهاراتك واستثمر وقتك</p>
        <SectionHeader title="الدورات التدريبية" icon="🎯" />
        {courses.map(c => <CourseCard key={c.id} c={c} />)}
        <SectionHeader title="نصائح مهنية" icon="💡" />
        {tips.map(t => <TipCard key={t.id} tip={t} />)}
      </div>
    );
  };

  return (
    <div style={{ maxWidth: 390, margin: "0 auto", height: "100vh", background: COLORS.surface, display: "flex", flexDirection: "column", direction: "rtl", fontFamily: "'Segoe UI','Arial',sans-serif", overflow: "hidden" }}>
      <style>{`
        * { -webkit-tap-highlight-color: transparent; box-sizing: border-box; }
        ::-webkit-scrollbar { display: none; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
      `}</style>

      {screen === "splash" && <SplashScreen onDone={() => setScreen(user ? "app" : "auth")} />}
      {screen === "auth" && <AuthScreen onLogin={handleLogin} />}
      {screen === "app" && (
        <>
          <div style={{ flex: 1, overflowY: "auto" }}>{renderTab()}</div>
          <div style={{ background: COLORS.white, borderTop: "1px solid #EDE8E0", padding: "6px 0 16px", display: "flex", flexShrink: 0, boxShadow: "0 -4px 20px rgba(13,27,42,0.08)" }}>
            {tabs.map(t => (
              <button key={t.id} onClick={() => setTab(t.id)} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 2, background: "none", border: "none", cursor: "pointer", padding: "5px 0" }}>
                <span style={{ fontSize: 17, filter: tab === t.id ? "none" : "grayscale(1) opacity(0.4)" }}>{t.icon}</span>
                <span style={{ fontSize: 9, fontWeight: 700, color: tab === t.id ? COLORS.navy : COLORS.muted, fontFamily: "inherit" }}>{t.label}</span>
                {tab === t.id && <div style={{ width: 16, height: 3, borderRadius: 2, background: COLORS.gold }} />}
              </button>
            ))}
            <button onClick={() => setTab("profile")} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 2, background: "none", border: "none", cursor: "pointer", padding: "5px 0" }}>
              <span style={{ fontSize: 17, filter: tab === "profile" ? "none" : "grayscale(1) opacity(0.4)" }}>👤</span>
              <span style={{ fontSize: 9, fontWeight: 700, color: tab === "profile" ? COLORS.navy : COLORS.muted, fontFamily: "inherit" }}>حسابي</span>
              {tab === "profile" && <div style={{ width: 16, height: 3, borderRadius: 2, background: COLORS.gold }} />}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
