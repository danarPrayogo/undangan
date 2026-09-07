import HomePageClient from "@/components/pages/HomePageClient";

type HomePageProps = {
  searchParams?: Promise<{
    to?: string | string[];
  }>;
};

export default async function Home({ searchParams }: HomePageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const rawGuestName = resolvedSearchParams?.to;
  const guestNameValue = Array.isArray(rawGuestName) ? rawGuestName[0] : rawGuestName;
  const guestName = guestNameValue?.replace(/\s+/g, " ").trim() || "Tamu Undangan";

  return <HomePageClient guestName={guestName} />;
}
