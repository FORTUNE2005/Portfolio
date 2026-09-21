"use client";

import { useState, useMemo, useEffect } from "react";
import emailjs from "@emailjs/browser";

const MONTHS = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfWeek(year: number, month: number) {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1;
}

const TIME_SLOTS_WEEKDAY = ["09:00","09:30","10:00","10:30","11:00","11:30","14:00","14:30","15:00","15:30","16:00","16:30"];
const TIME_SLOTS_SATURDAY = ["09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30"];

const DAYS_FR = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];

const WHATSAPP_PHONE = "2250748552599";

export default function Booking() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    setNow(new Date());
    const timer = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    description: ""
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const daysInMonth = useMemo(() => getDaysInMonth(year, month), [year, month]);
  const firstDay = useMemo(() => getFirstDayOfWeek(year, month), [year, month]);

  const prevMonth = () => {
    if (month === 0) { setMonth(11); setYear(y => y - 1); }
    else setMonth(m => m - 1);
    setSelectedDay(null);
    setSelectedTime(null);
  };

  const nextMonth = () => {
    if (month === 11) { setMonth(0); setYear(y => y + 1); }
    else setMonth(m => m + 1);
    setSelectedDay(null);
    setSelectedTime(null);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (field === "name" || field === "email") {
      setErrors(prev => ({ ...prev, [field]: false }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: formData.name.trim() === "",
      email: formData.email.trim() === "" || !isValidEmail(formData.email)
    };
    setErrors(newErrors);
    return !newErrors.name && !newErrors.email;
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    if (!validateForm() || !selectedDay || !selectedTime) return;

    setSubmitting(true);

    const dayName = DAYS_FR[new Date(year, month, selectedDay).getDay()];
    const dateStr = `${dayName} ${selectedDay} ${MONTHS[month]} ${year} a ${selectedTime}`;
    const projetStr = formData.projectType || "Non precise";
    const descStr = formData.description || "Aucune";

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          project_type: projetStr,
          date: dateStr,
          description: descStr,
          to_name: "Fortune",
        },
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
      );

      const waMessage = encodeURIComponent(
        `Bonjour Fortune, je suis ${formData.name}.\n\nJe reserve un appel pour : *${projetStr}*\n\n📅 ${dateStr}\n\n${descStr !== "Aucune" ? descStr : ""}`
      );
      window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${waMessage}`, "_blank");

      setSubmitted(true);
      setFormData({ name: "", email: "", projectType: "", description: "" });
      setSelectedDay(null);
      setSelectedTime(null);

      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error("Erreur envoi:", err);
      alert("Une erreur est survenue. Reessayez plus tard.");
    } finally {
      setSubmitting(false);
    }
  };

  const isAvailable = (day: number) => {
    if (year < now.getFullYear()) return false;
    if (year === now.getFullYear() && month < now.getMonth()) return false;
    if (year === now.getFullYear() && month === now.getMonth() && day < now.getDate()) return false;
    const dayOfWeek = new Date(year, month, day).getDay();
    return dayOfWeek !== 0;
  };

  const isToday = (day: number) => {
    return year === now.getFullYear() && month === now.getMonth() && day === now.getDate();
  };

  const isSaturday = (day: number) => new Date(year, month, day).getDay() === 6;

  const availableTimeSlots = useMemo(() => {
    if (!selectedDay) return [];
    const baseSlots = isSaturday(selectedDay) ? TIME_SLOTS_SATURDAY : TIME_SLOTS_WEEKDAY;
    if (!isToday(selectedDay)) return baseSlots;
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    return baseSlots.filter(time => {
      const [h, m] = time.split(":").map(Number);
      return h > currentHour || (h === currentHour && m > currentMinute);
    });
  }, [selectedDay, now]);

  return (
    <section id="rdv" className="relative px-3 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-[1280px] rounded-[14px] border border-white/60 bg-white/65 px-5 py-14 shadow-[0_30px_80px_-30px_rgb(0_0_0/0.3)] backdrop-blur-2xl md:px-14 md:py-20">

        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="section-title text-[clamp(2.4rem,6.5vw,5rem)]">/RENDEZ-VOUS</h2>
            <p className="mt-4 max-w-lg text-[17px] leading-relaxed text-ink/70">
              Choisis un créneau libre dans mon agenda : un court appel pour parler de ton projet, sans engagement.
            </p>
          </div>
          <p className="text-sm text-muted">Horaires affichés dans ton fuseau · Africa/Abidjan</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12">

          {/* Calendar */}
          <div className="rounded-3xl bg-white p-5 shadow-[0_20px_50px_-30px_rgb(0_0_0/0.35)] md:p-7">
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold tracking-tight">{MONTHS[month]} {year}</p>
              <div className="flex gap-2">
                <button onClick={prevMonth} className="grid size-10 place-items-center rounded-full border border-line transition hover:bg-ink hover:text-white" aria-label="Mois précédent">
                  <svg viewBox="0 0 24 24" className="size-4 rotate-180" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 6 6 6-6 6" /></svg>
                </button>
                <button onClick={nextMonth} className="grid size-10 place-items-center rounded-full border border-line transition hover:bg-ink hover:text-white" aria-label="Mois suivant">
                  <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 6 6 6-6 6" /></svg>
                </button>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-7 gap-1.5 text-center">
              {["Lun","Mar","Mer","Jeu","Ven","Sam","Dim"].map((d, i) => (
                <span key={i} className="pb-2 text-xs font-bold uppercase text-muted/70">{d}</span>
              ))}

              {Array.from({ length: firstDay }).map((_, i) => (
                <span key={`empty-${i}`} />
              ))}

              {Array.from({ length: daysInMonth }, (_, i) => {
                const day = i + 1;
                const available = isAvailable(day);
                const isSelected = selectedDay === day;

                return (
                  <button
                    key={day}
                    onClick={() => { if (available) { setSelectedDay(day); setSelectedTime(null); } }}
                    disabled={!available}
                    className={`relative aspect-square rounded-xl text-[15px] font-semibold transition
                      ${isSelected ? "bg-ink text-white shadow-lg" : available ? "text-ink hover:bg-ink/10 cursor-pointer" : "text-ink/25 cursor-not-allowed opacity-40"}
                    `}
                  >
                    {day}
                    {available && !isSelected && (
                      <span className="absolute bottom-1 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-ok" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Time slots */}
          <div className="min-h-[380px]">
            {submitted ? (
              <div className="grid h-full min-h-[380px] place-items-center rounded-3xl border border-ok/30 bg-ok/5 p-8 text-center">
                <div>
                  <p className="text-5xl">✅</p>
                  <p className="mt-4 text-lg font-semibold text-ok">RDV bien recu !</p>
                  <p className="mt-1 text-sm text-muted">Tu recevras un email de confirmation. A bientot !</p>
                </div>
              </div>
            ) : selectedDay ? (
              <div className="rounded-3xl border border-line bg-white p-6 shadow-[0_20px_50px_-30px_rgb(0_0_0/0.15)]">
                <p className="text-lg font-bold">Créneaux disponibles</p>
                <p className="mt-1 text-sm text-muted">{selectedDay} {MONTHS[month]} {year}</p>
                {availableTimeSlots.length === 0 ? (
                  <div className="mt-6 rounded-xl bg-ink/5 p-6 text-center">
                    <p className="text-sm text-muted">Plus de créneaux disponibles pour aujourd'hui.</p>
                    <p className="mt-1 text-xs text-muted/70">Reviens demain pour réserver un créneau.</p>
                  </div>
                ) : (
                <div className="mt-6 grid grid-cols-3 gap-2 md:grid-cols-4">
                  {availableTimeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`rounded-xl border px-3 py-2.5 text-sm font-semibold transition
                        ${selectedTime === time
                          ? "border-ink bg-ink text-white"
                          : "border-line hover:border-ink hover:bg-ink/5"
                        }
                      `}
                    >
                      {time}
                    </button>
                  ))}
                </div>
                )}
                {selectedTime && (
                  <div className="mt-6 space-y-5">
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div>
                        <input 
                          type="text" 
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Ton nom *" 
                          className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition placeholder:text-muted/50 focus:border-ink ${
                            errors.name ? "border-red-500 bg-red-50" : "border-line"
                          }`}
                        />
                        {errors.name && (
                          <p className="mt-1 text-xs text-red-500">Le nom est requis</p>
                        )}
                      </div>
                      <div>
                        <input 
                          type="email" 
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="Ton e-mail *" 
                          className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition placeholder:text-muted/50 focus:border-ink ${
                            errors.email ? "border-red-500 bg-red-50" : "border-line"
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-1 text-xs text-red-500">
                            {formData.email.trim() === "" ? "L'email est requis" : "Email invalide"}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {["Projet web", "Dev front"].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => handleInputChange("projectType", formData.projectType === type ? "" : type)}
                          className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition hover:border-ink ${
                            formData.projectType === type 
                              ? "bg-ink text-white border-ink" 
                              : "border-line"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>

                    <textarea 
                      rows={3} 
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      placeholder="En deux mots, ton projet ? (optionnel)" 
                      className="w-full rounded-xl border border-line px-4 py-3 text-sm outline-none transition placeholder:text-muted/50 focus:border-ink" 
                    />

                    <button 
                      type="button"
                      onClick={handleSubmit}
                      disabled={submitting}
                      className="btn-dark w-full justify-center px-6 py-3.5 text-[15px] font-medium disabled:opacity-50"
                    >
                      {submitting ? "Envoi en cours..." : (
                        <>
                          Réserver le {DAYS_FR[new Date(year, month, selectedDay).getDay()]} {selectedDay} {MONTHS[month]} à {selectedTime}
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="M7 17 17 7M8 7h9v9" /></svg>
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="grid h-full min-h-[380px] place-items-center rounded-3xl border border-dashed border-ink/15 p-8 text-center">
                <div>
                  <p className="text-5xl">📅</p>
                  <p className="mt-4 text-lg font-semibold">Choisis un jour</p>
                  <p className="mt-1 text-sm text-muted">Les jours avec un point vert ont des créneaux libres.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
