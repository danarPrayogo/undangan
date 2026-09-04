import { NextResponse } from "next/server";
import { weddingData } from "@/data/wedding";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, attendance, guests, message } = body;

    if (!name || !attendance) {
      return NextResponse.json(
        { success: false, error: "Nama dan status kehadiran wajib diisi" },
        { status: 400 }
      );
    }

    const scriptUrl =
      process.env.GOOGLE_SCRIPT_URL ||
      process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL ||
      weddingData.rsvpGoogleScriptUrl;

    const attendanceLabel =
      attendance === "hadir"
        ? "Hadir"
        : attendance === "tidak_hadir"
        ? "Tidak Hadir"
        : "Masih Ragu";

    const payload = {
      timestamp: new Date().toLocaleString("id-ID", {
        timeZone: "Asia/Jakarta",
        dateStyle: "full",
        timeStyle: "medium",
      }),
      name: name.trim(),
      attendance: attendanceLabel,
      guests: Number(guests) || 1,
      message: message ? message.trim() : "-",
    };

    // If script URL is provided, send to Google Apps Script
    if (scriptUrl && scriptUrl.trim() !== "") {
      const response = await fetch(scriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        // Follow redirects as Google Apps Script redirects POST to response
        redirect: "follow",
      });

      if (!response.ok) {
        console.error("Google Script error status:", response.status);
      }
    } else {
      console.log("RSVP Submission received locally (Google Script URL not configured):", payload);
    }

    return NextResponse.json({
      success: true,
      message: "Konfirmasi kehadiran berhasil disimpan",
      data: payload,
    });
  } catch (error: any) {
    console.error("RSVP API Route error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Gagal menyimpan konfirmasi" },
      { status: 500 }
    );
  }
}
