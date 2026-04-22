import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BlogList } from "./blog-list";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on AI strategy, automation ROI, and practical implementation guides for small and medium businesses.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <BlogList />
      </main>
      <Footer />
    </>
  );
}
