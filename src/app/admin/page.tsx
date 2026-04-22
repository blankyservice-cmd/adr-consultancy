import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AdminTools } from "./admin-tools";

export const metadata: Metadata = {
  title: "Internal Tools",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <AdminTools />
      </main>
      <Footer />
    </>
  );
}
