// src/pages/index.tsx
import Layout from "@/components/Layout";
import Home from "@/pages/Home"; // ini komponen, bukan route langsung

export default function IndexPage() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}
