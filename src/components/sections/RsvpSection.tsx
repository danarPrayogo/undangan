"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionTitle from "@/components/ui/SectionTitle";
import GoldBorderCard from "@/components/ui/GoldBorderCard";
import BatikPattern from "@/components/ornaments/BatikPattern";

interface RsvpFormData {
  name: string;
  attendance: "hadir" | "tidak_hadir" | "ragu" | "";
  guests: number;
  message: string;
}

interface RsvpErrors {
  name?: string;
  attendance?: string;
  guests?: string;
}

export default function RsvpSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [form, setForm] = useState<RsvpFormData>({
    name: "",
    attendance: "",
    guests: 1,
    message: "",
  });
  const [errors, setErrors] = useState<RsvpErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: RsvpErrors = {};
    if (!form.name.trim()) newErrors.name = "Nama wajib diisi";
    if (!form.attendance) newErrors.attendance = "Pilih status kehadiran";
    if (form.guests < 1) newErrors.guests = "Minimal 1 tamu";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setSubmitError(data.error || "Terjadi kesalahan. Silakan coba lagi.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitError("Gagal mengirim konfirmasi. Periksa koneksi internet Anda.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-darkwine/60 border border-gold/20 rounded-sm px-4 py-3 font-montserrat text-xs text-cream placeholder-cream/30 focus:outline-none focus:border-gold/60 transition-colors";
  const labelClass = "block font-montserrat text-[10px] tracking-[0.2em] text-gold/70 uppercase mb-2";
  const errorClass = "font-montserrat text-[10px] text-red-400 mt-1";

  return (
    <section id="rsvp" className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <BatikPattern />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative z-10 max-w-md mx-auto">
        <SectionTitle title="RSVP" subtitle="Konfirmasi Kehadiran" />

        <p className="font-montserrat text-xs text-cream/60 text-center mb-8 leading-relaxed">
          Kehadiran dan doa restu Anda merupakan kebahagiaan bagi kami.
        </p>

        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {submitted ? (
            <GoldBorderCard className="p-8 text-center">
              <CheckCircle size={40} className="text-gold mx-auto mb-4" />
              <h3 className="font-cormorant text-2xl text-cream mb-2">Terima Kasih!</h3>
              <p className="font-montserrat text-xs text-cream/60 leading-relaxed">
                Konfirmasi kehadiran Anda telah kami terima. Sampai jumpa di hari bahagia kami!
              </p>
            </GoldBorderCard>
          ) : (
            <GoldBorderCard className="p-6 md:p-8">
              <form onSubmit={handleSubmit} noValidate>
                {/* Nama */}
                <div className="mb-5">
                  <label className={labelClass}>Nama Lengkap</label>
                  <input
                    id="rsvp-name"
                    type="text"
                    placeholder="Masukkan nama Anda"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                  />
                  {errors.name && <p className={errorClass}>{errors.name}</p>}
                </div>

                {/* Status kehadiran */}
                <div className="mb-5">
                  <label className={labelClass}>Status Kehadiran</label>
                  <div className="space-y-2">
                    {[
                      { value: "hadir", label: "✓  Insyaallah Hadir" },
                      { value: "tidak_hadir", label: "✗  Tidak Dapat Hadir" },
                      { value: "ragu", label: "?  Masih Belum Pasti" },
                    ].map((opt) => (
                      <label
                        key={opt.value}
                        className="flex items-center gap-3 cursor-pointer group"
                      >
                        <div
                          className={`w-4 h-4 border rounded-full flex items-center justify-center transition-colors ${
                            form.attendance === opt.value
                              ? "border-gold bg-gold"
                              : "border-gold/30 group-hover:border-gold/60"
                          }`}
                        >
                          {form.attendance === opt.value && (
                            <div className="w-1.5 h-1.5 bg-darkwine rounded-full" />
                          )}
                        </div>
                        <span
                          className={`font-montserrat text-xs ${
                            form.attendance === opt.value ? "text-cream" : "text-cream/60"
                          }`}
                          onClick={() =>
                            setForm({ ...form, attendance: opt.value as RsvpFormData["attendance"] })
                          }
                        >
                          {opt.label}
                        </span>
                      </label>
                    ))}
                  </div>
                  {errors.attendance && <p className={errorClass}>{errors.attendance}</p>}
                </div>

                {/* Jumlah tamu */}
                <div className="mb-5">
                  <label className={labelClass}>Jumlah Tamu</label>
                  <select
                    id="rsvp-guests"
                    value={form.guests}
                    onChange={(e) => setForm({ ...form, guests: parseInt(e.target.value) })}
                    className={inputClass}
                  >
                    {[1, 2, 3, 4].map((n) => (
                      <option key={n} value={n} className="bg-darkwine">
                        {n} orang
                      </option>
                    ))}
                  </select>
                </div>

                {/* Ucapan */}
                <div className="mb-6">
                  <label className={labelClass}>Ucapan untuk Mempelai</label>
                  <textarea
                    id="rsvp-message"
                    placeholder="Sampaikan doa dan ucapan terbaik Anda..."
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {submitError && (
                  <p className="font-montserrat text-xs text-red-400 text-center mb-4">
                    {submitError}
                  </p>
                )}

                {/* Submit */}
                <button
                  id="btn-submit-rsvp"
                  type="submit"
                  disabled={loading}
                  className="group relative w-full py-3.5 border border-gold/60 text-gold font-montserrat text-xs tracking-[0.2em] uppercase overflow-hidden transition-all duration-300 hover:text-darkwine disabled:opacity-50"
                >
                  <span className="absolute inset-0 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <span className="relative flex items-center justify-center gap-2">
                    {loading ? (
                      <>
                        <div className="w-3 h-3 border border-gold/60 border-t-gold rounded-full animate-spin" />
                        Mengirim...
                      </>
                    ) : (
                      <>
                        <Send size={13} />
                        KIRIM KONFIRMASI
                      </>
                    )}
                  </span>
                </button>
              </form>
            </GoldBorderCard>
          )}
        </div>
      </div>
    </section>
  );
}
