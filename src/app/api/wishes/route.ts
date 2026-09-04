import { NextResponse } from "next/server";
import { weddingData } from "@/data/wedding";

type WishItem = {
  timestamp: string;
  name: string;
  message: string;
};

const toTimestampValue = (value: unknown): string => {
  if (typeof value === "string") {
    return value;
  }

  if (value instanceof Date) {
    return value.toISOString();
  }

  return "";
};

const toTextValue = (value: unknown): string =>
  typeof value === "string" ? value.trim() : "";

const normalizeWish = (row: unknown): WishItem | null => {
  if (Array.isArray(row)) {
    const [timestamp, name, message] = row;
    const normalized = {
      timestamp: toTimestampValue(timestamp),
      name: toTextValue(name),
      message: toTextValue(message),
    };

    if (!normalized.name || !normalized.message) {
      return null;
    }

    return normalized;
  }

  if (row && typeof row === "object") {
    const objectRow = row as Record<string, unknown>;
    const normalized = {
      timestamp: toTimestampValue(
        objectRow.timestamp ?? objectRow.waktu ?? objectRow["Waktu Pengiriman"]
      ),
      name: toTextValue(objectRow.name ?? objectRow.nama ?? objectRow["Nama"]),
      message: toTextValue(
        objectRow.message ?? objectRow.ucapan ?? objectRow["Ucapan & Doa"]
      ),
    };

    if (!normalized.name || !normalized.message) {
      return null;
    }

    return normalized;
  }

  return null;
};

const toTimeValue = (timestamp: string): number => {
  if (!timestamp) {
    return 0;
  }

  const parsedTime = Date.parse(timestamp);
  return Number.isNaN(parsedTime) ? 0 : parsedTime;
};

const extractRows = (rawData: unknown): unknown[] => {
  if (Array.isArray(rawData)) {
    return rawData;
  }

  if (!rawData || typeof rawData !== "object") {
    return [];
  }

  const objectData = rawData as Record<string, unknown>;
  const candidates = [
    objectData.data,
    objectData.rows,
    objectData.wishes,
    objectData.items,
    objectData.result,
  ];

  for (const candidate of candidates) {
    if (Array.isArray(candidate)) {
      return candidate;
    }
  }

  return [];
};

export async function GET() {
  try {
    const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

    if (!scriptUrl || scriptUrl.trim() === "") {
      return NextResponse.json(
        { success: false, error: "Google Script URL belum dikonfigurasi", data: [] },
        { status: 500 }
      );
    }

    const response = await fetch(scriptUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      cache: "no-store",
      redirect: "follow",
    });

    if (!response.ok) {
      throw new Error(`Google Script tidak dapat diakses (status: ${response.status})`);
    }

    const rawData = await response.json().catch(() => null);
    const rows = extractRows(rawData);

    const wishes = rows
      .map(normalizeWish)
      .filter((wish): wish is WishItem => wish !== null)
      .sort((first, second) => toTimeValue(second.timestamp) - toTimeValue(first.timestamp));

    return NextResponse.json({
      success: true,
      data: wishes,
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Gagal mengambil data ucapan";
    console.error("Wishes GET Route error:", error);
    return NextResponse.json(
      { success: false, error: errorMessage, data: [] },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, message } = body;

    if (!name || !message) {
      return NextResponse.json(
        { success: false, error: "Nama dan ucapan wajib diisi" },
        { status: 400 }
      );
    }

    const scriptUrl =
      process.env.GOOGLE_SCRIPT_URL ||
      process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL ||
      weddingData.rsvpGoogleScriptUrl;

    const payload = {
      type: "wishes",
      timestamp: new Date().toLocaleString("id-ID", {
        timeZone: "Asia/Jakarta",
        dateStyle: "full",
        timeStyle: "medium",
      }),
      name: name.trim(),
      message: message.trim(),
    };

    if (scriptUrl && scriptUrl.trim() !== "") {
      const response = await fetch(scriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        redirect: "follow",
      });

      const scriptResult = await response.json().catch(() => null);

      if (!response.ok || scriptResult?.result !== "success") {
        throw new Error(
          scriptResult?.error ||
            `Google Script gagal menyimpan ucapan (status: ${response.status})`
        );
      }
    } else {
      console.log("Wishes submission received locally (Google Script URL not configured):", payload);
    }

    return NextResponse.json({
      success: true,
      message: "Ucapan berhasil disimpan",
      data: payload,
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Gagal menyimpan ucapan";
    console.error("Wishes API Route error:", error);
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
