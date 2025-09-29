import type { Metadata } from "next";
import ClientReviews from "@/components/reviews/ClientReviews";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "What clients and collaborators say about working together.",
  alternates: { canonical: "/reviews" }
};

export default function ReviewsPage() {
  return <ClientReviews />;
}
