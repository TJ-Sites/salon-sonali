"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";

const filters = ["All", "Hair Colouring", "Hair Cutting", "Kids Hair Cutting", "Treatments", "Dressing", "Bridle Dressing", "Hair Removing", "Eyebrows Shaping"];

interface GalleryItem {
  id: number;
  category: string;
  label: string;
  image?: string;
  span?: string;
  gradient?: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, category: "Hair Colouring", label: "Hair Colouring", image: "/hair-colouring/0624fae0-820b-49eb-93ff-da7b67b55681.jpg", span: "row-span-2" },
  { id: 2, category: "Hair Colouring", label: "Hair Colouring", image: "/hair-colouring/49eda34d-c8be-4bf5-97bd-e6bd6474ab6b.jpg", span: "" },
  { id: 3, category: "Hair Colouring", label: "Hair Colouring", image: "/hair-colouring/53a13a46-4df1-4ae4-96ac-818797a0e3a2.jpg", span: "" },
  { id: 4, category: "Hair Colouring", label: "Hair Colouring", image: "/hair-colouring/5dab9db0-15b8-48bb-8701-ca3d23bed373.jpg", span: "row-span-2" },
  { id: 5, category: "Hair Colouring", label: "Hair Colouring", image: "/hair-colouring/7700bf53-2276-416d-b5f6-60b9971a1279.jpg", span: "" },
  { id: 6, category: "Hair Colouring", label: "Hair Colouring", image: "/hair-colouring/7d12699c-38e0-4b78-8917-c5759c090682.jpg", span: "" },
  { id: 7, category: "Hair Colouring", label: "Hair Colouring", image: "/hair-colouring/8bcfaf01-912b-4a40-b0f9-436d765f2b4d.jpg", span: "" },
  { id: 8, category: "Hair Colouring", label: "Hair Colouring", image: "/hair-colouring/acbe3e29-e662-44a7-85cc-46b36d25c1bc.jpg", span: "row-span-2" },
  { id: 9, category: "Hair Colouring", label: "Hair Colouring", image: "/hair-colouring/be04ca17-08a5-4710-9460-cbb6d5997941.jpg", span: "" },
  { id: 10, category: "Hair Colouring", label: "Hair Colouring", image: "/hair-colouring/d4f2fce8-c07e-4445-b80c-f210d5809e3e.jpg", span: "" },
  { id: 11, category: "Hair Colouring", label: "Hair Colouring", image: "/hair-colouring/d7cf43bd-594b-4dba-8866-cbf2feee68a5.jpg", span: "" },
  { id: 12, category: "Hair Colouring", label: "Hair Colouring", image: "/hair-colouring/e0d85b23-7f5f-4aba-b9f0-88b8350c1d1a.jpg", span: "row-span-2" },
  { id: 13, category: "Hair Colouring", label: "Hair Colouring", image: "/hair-colouring/e4632fd2-231f-4d50-bae0-b349d90175ff.jpg", span: "" },
  { id: 14, category: "Hair Colouring", label: "Hair Colouring", image: "/hair-colouring/eae3f095-76b3-46d1-926a-139828e43235.jpg", span: "" },
  { id: 15, category: "Hair Colouring", label: "Hair Colouring", image: "/hair-colouring/f06a1b3a-021e-415d-b596-67f65551f6c8.jpg", span: "" },
  { id: 16, category: "Hair Colouring", label: "Hair Colouring", image: "/hair-colouring/fefc98df-be10-478a-91b9-833ec6414070.jpg", span: "row-span-2" },
  { id: 17, category: "Hair Cutting", label: "Hair Cutting", image: "/hair-cutting/03494458-5f94-4870-bcfc-537c52678768.jpg", span: "row-span-2" },
  { id: 18, category: "Hair Cutting", label: "Hair Cutting", image: "/hair-cutting/0624fae0-820b-49eb-93ff-da7b67b55681.jpg", span: "" },
  { id: 19, category: "Hair Cutting", label: "Hair Cutting", image: "/hair-cutting/1e8edcc1-07f9-4963-b309-21978dc42e91.jpg", span: "" },
  { id: 20, category: "Hair Cutting", label: "Hair Cutting", image: "/hair-cutting/24ffad4a-c113-47f5-9c23-acf72cd3a421.jpg", span: "row-span-2" },
  { id: 21, category: "Hair Cutting", label: "Hair Cutting", image: "/hair-cutting/33a4ca6a-bde6-4aa7-a184-0ef23bd05d5c.jpg", span: "" },
  { id: 22, category: "Hair Cutting", label: "Hair Cutting", image: "/hair-cutting/42a15923-09f9-4909-8f0e-56ea9f063e9b.jpg", span: "" },
  { id: 23, category: "Hair Cutting", label: "Hair Cutting", image: "/hair-cutting/4e0786bf-5f34-4e59-ac74-ae0c988358e1.jpg", span: "" },
  { id: 24, category: "Hair Cutting", label: "Hair Cutting", image: "/hair-cutting/524b91e4-f302-44bd-958c-43c034a86f54.jpg", span: "row-span-2" },
  { id: 25, category: "Hair Cutting", label: "Hair Cutting", image: "/hair-cutting/52d455ae-eea1-4ec0-8cdb-261f07b26e84.jpg", span: "" },
  { id: 26, category: "Hair Cutting", label: "Hair Cutting", image: "/hair-cutting/5525944e-60f5-479a-a364-3b28f9db122c.jpg", span: "" },
  { id: 27, category: "Hair Cutting", label: "Hair Cutting", image: "/hair-cutting/577b0f81-bd47-4df6-9d39-2c42ea24805a.jpg", span: "" },
  { id: 28, category: "Hair Cutting", label: "Hair Cutting", image: "/hair-cutting/688f4958-31d6-4ef4-826a-fe059bcba7a4.jpg", span: "row-span-2" },
  { id: 29, category: "Hair Cutting", label: "Hair Cutting", image: "/hair-cutting/6d1a659c-3881-4971-8d11-7e1d2b6b4c09.jpg", span: "" },
  { id: 30, category: "Hair Cutting", label: "Hair Cutting", image: "/hair-cutting/882bd6fb-7e56-44d3-a93d-d9d0905ba9c3.jpg", span: "" },
  { id: 31, category: "Hair Cutting", label: "Hair Cutting", image: "/hair-cutting/885eb170-6761-4411-903c-1aef7dc5b608.jpg", span: "" },
  { id: 32, category: "Hair Cutting", label: "Hair Cutting", image: "/hair-cutting/90639d09-e512-4cb6-9efa-beb7fe365f15.jpg", span: "row-span-2" },
  { id: 33, category: "Hair Cutting", label: "Hair Cutting", image: "/hair-cutting/97085c03-7140-4797-9147-61fb0f207f51.jpg", span: "" },
  { id: 34, category: "Hair Cutting", label: "Hair Cutting", image: "/hair-cutting/9c6561c7-d594-40da-be3b-7995fe7a1615.jpg", span: "" },
  { id: 35, category: "Hair Cutting", label: "Hair Cutting", image: "/hair-cutting/ad8ff89e-5ef5-41ff-8dae-51c6164bdcc2.jpg", span: "" },
  { id: 36, category: "Hair Cutting", label: "Hair Cutting", image: "/hair-cutting/c1c78ce3-3ba2-40e3-ac0a-584faf1bad26.jpg", span: "row-span-2" },
  { id: 37, category: "Hair Cutting", label: "Hair Cutting", image: "/hair-cutting/cc8827ac-7b86-4897-acc4-407e452024d1.jpg", span: "" },
  { id: 38, category: "Hair Cutting", label: "Hair Cutting", image: "/hair-cutting/d394339e-aad6-4a20-b11f-a40afbc4bd36.jpg", span: "" },
  { id: 39, category: "Hair Cutting", label: "Hair Cutting", image: "/hair-cutting/fb4b5f2b-a160-44f5-8aa2-fe81fa93e7ba.jpg", span: "" },
  { id: 40, category: "Kids Hair Cutting", label: "Kids Hair Cutting", image: "/kids-hair-cutting/1c1daa09-10bc-4774-84ef-34103f9d648b.jpg", span: "row-span-2" },
  { id: 41, category: "Kids Hair Cutting", label: "Kids Hair Cutting", image: "/kids-hair-cutting/1c290c43-e616-48e1-a0b8-05ef5accbc89.jpg", span: "" },
  { id: 42, category: "Kids Hair Cutting", label: "Kids Hair Cutting", image: "/kids-hair-cutting/254eac87-cca6-4fb9-b827-72d9dedaeb6f.jpg", span: "" },
  { id: 43, category: "Kids Hair Cutting", label: "Kids Hair Cutting", image: "/kids-hair-cutting/2eb2ee54-2197-4529-81a3-eddd24a12614.jpg", span: "row-span-2" },
  { id: 44, category: "Kids Hair Cutting", label: "Kids Hair Cutting", image: "/kids-hair-cutting/33c357cb-0458-4277-aebd-42417b5cdf04.jpg", span: "" },
  { id: 45, category: "Kids Hair Cutting", label: "Kids Hair Cutting", image: "/kids-hair-cutting/a4bfc59d-e843-4f38-9e42-dac1ea668776.jpg", span: "" },
  { id: 46, category: "Kids Hair Cutting", label: "Kids Hair Cutting", image: "/kids-hair-cutting/a6269c77-97c8-4248-90c0-7c44aec5c83c.jpg", span: "" },
  { id: 47, category: "Kids Hair Cutting", label: "Kids Hair Cutting", image: "/kids-hair-cutting/a69e89af-5467-403f-ad0d-73cc664cb29c.jpg", span: "row-span-2" },
  { id: 48, category: "Kids Hair Cutting", label: "Kids Hair Cutting", image: "/kids-hair-cutting/d487e19f-b8d1-4a59-bad0-a2b8cf9a3526.jpg", span: "" },
  { id: 49, category: "Kids Hair Cutting", label: "Kids Hair Cutting", image: "/kids-hair-cutting/df1a96b8-40c5-4800-9d14-ad8acd9e4a21.jpg", span: "" },
  { id: 50, category: "Kids Hair Cutting", label: "Kids Hair Cutting", image: "/kids-hair-cutting/e6345d09-4b22-4c6f-9786-506c2155ba7d.jpg", span: "" },
  { id: 51, category: "Treatments", label: "Treatments", image: "/treatments/0165ea91-71f1-47d8-9be5-eec2af23980d.jpg", span: "row-span-2" },
  { id: 52, category: "Treatments", label: "Treatments", image: "/treatments/01a86713-d0cb-450d-99d6-5a9235752c15.jpg", span: "" },
  { id: 53, category: "Treatments", label: "Treatments", image: "/treatments/081c4a2f-17ff-4e70-acaf-89ca8cbb2d14.jpg", span: "" },
  { id: 54, category: "Treatments", label: "Treatments", image: "/treatments/0fd85a72-a5aa-41e6-b608-b7a5115af686.jpg", span: "row-span-2" },
  { id: 55, category: "Treatments", label: "Treatments", image: "/treatments/10b2b6ba-bd00-45a5-9686-ec3248179585.jpg", span: "" },
  { id: 56, category: "Treatments", label: "Treatments", image: "/treatments/1d4062c6-7d33-4861-a717-457b0b1910d4.jpg", span: "" },
  { id: 57, category: "Treatments", label: "Treatments", image: "/treatments/4ecf2a7c-c4d7-49ef-be4f-2a6254c710f5.jpg", span: "" },
  { id: 58, category: "Treatments", label: "Treatments", image: "/treatments/5a563f88-e53c-42ea-95fd-17bff1a022dc.jpg", span: "row-span-2" },
  { id: 59, category: "Treatments", label: "Treatments", image: "/treatments/6b1fd28b-e832-48c2-bbc0-33330bae2d48.jpg", span: "" },
  { id: 60, category: "Treatments", label: "Treatments", image: "/treatments/796db33d-e42d-497f-bb47-d0e7b3d5d2ac.jpg", span: "" },
  { id: 61, category: "Treatments", label: "Treatments", image: "/treatments/94c836f7-c223-4130-af40-0008f11021f7.jpg", span: "" },
  { id: 62, category: "Treatments", label: "Treatments", image: "/treatments/b45c10cb-add9-47bd-8b02-6c6a59c67d76.jpg", span: "row-span-2" },
  { id: 63, category: "Treatments", label: "Treatments", image: "/treatments/c1c6c802-8b19-4f68-9cbe-0847830a4bf0.jpg", span: "" },
  { id: 64, category: "Dressing", label: "Dressing", image: "/dressing/00497360-5ef7-4f36-969f-cfab6bf0e70b.jpg", span: "row-span-2" },
  { id: 65, category: "Dressing", label: "Dressing", image: "/dressing/09f9cc34-52b4-490b-9c4c-56b7d6150458.jpg", span: "" },
  { id: 66, category: "Dressing", label: "Dressing", image: "/dressing/12031bf4-ab7f-4ad8-8d4e-e2d4679a8cc8.jpg", span: "" },
  { id: 67, category: "Dressing", label: "Dressing", image: "/dressing/1429132a-3230-456f-a43f-eee1edfe3301.jpg", span: "row-span-2" },
  { id: 68, category: "Dressing", label: "Dressing", image: "/dressing/2082b3ec-e2f5-4b4b-849c-4047f90e3a4a.jpg", span: "" },
  { id: 69, category: "Dressing", label: "Dressing", image: "/dressing/2ff6af4d-62ea-4eec-8bad-30dc924cdafa.jpg", span: "" },
  { id: 70, category: "Dressing", label: "Dressing", image: "/dressing/360199ab-9201-45d9-b9fa-4cc01c76dba2.jpg", span: "" },
  { id: 71, category: "Dressing", label: "Dressing", image: "/dressing/3beb0275-2e8c-436d-b31c-cf3ee7e7b411.jpg", span: "row-span-2" },
  { id: 72, category: "Dressing", label: "Dressing", image: "/dressing/45604068-043d-4bb5-97f9-ac881fd23304.jpg", span: "" },
  { id: 73, category: "Dressing", label: "Dressing", image: "/dressing/46c9f2d2-d1a3-46e9-853c-309be3c402a6.jpg", span: "" },
  { id: 74, category: "Dressing", label: "Dressing", image: "/dressing/75652a76-a6e8-4cbe-b80c-c29df27822f8.jpg", span: "" },
  { id: 75, category: "Dressing", label: "Dressing", image: "/dressing/79d3b9a5-07ee-4ef8-b29e-646d122b54d9.jpg", span: "row-span-2" },
  { id: 76, category: "Dressing", label: "Dressing", image: "/dressing/85d51377-629d-4dde-b0e7-a246a2c80d97.jpg", span: "" },
  { id: 77, category: "Dressing", label: "Dressing", image: "/dressing/8797fb84-a7f4-4184-9f51-08959ecb6dfc.jpg", span: "" },
  { id: 78, category: "Dressing", label: "Dressing", image: "/dressing/880b27f7-4da9-47e7-917a-3cd87408cb3b.jpg", span: "" },
  { id: 79, category: "Dressing", label: "Dressing", image: "/dressing/9856b483-3dcc-4942-a381-759f0b380391.jpg", span: "row-span-2" },
  { id: 80, category: "Dressing", label: "Dressing", image: "/dressing/a1916995-b3e6-4f91-9c39-c3e154ee28a2.jpg", span: "" },
  { id: 81, category: "Dressing", label: "Dressing", image: "/dressing/a80d7264-9707-4ff9-a528-62ab06710bcd.jpg", span: "" },
  { id: 82, category: "Dressing", label: "Dressing", image: "/dressing/a9b33a4f-0f4f-4c72-b549-f85324157fcc.jpg", span: "" },
  { id: 83, category: "Dressing", label: "Dressing", image: "/dressing/ac938daf-9cad-442c-aca5-d82b043fbf0d.jpg", span: "row-span-2" },
  { id: 84, category: "Dressing", label: "Dressing", image: "/dressing/d77ae247-2719-421b-b005-1f8df5a3c7e9.jpg", span: "" },
  { id: 85, category: "Dressing", label: "Dressing", image: "/dressing/db7277ad-f670-41eb-a27d-5b96b28f9771.jpg", span: "" },
  { id: 86, category: "Dressing", label: "Dressing", image: "/dressing/e2aeb5ad-1752-415c-af40-99288fa8e24b.jpg", span: "" },
  { id: 87, category: "Dressing", label: "Dressing", image: "/dressing/e3eb7572-d71b-4c3a-89b1-68529d03e57e.jpg", span: "row-span-2" },
  { id: 88, category: "Dressing", label: "Dressing", image: "/dressing/e42f5155-4354-4df1-b032-3422de36ff80.jpg", span: "" },
  { id: 89, category: "Dressing", label: "Dressing", image: "/dressing/f90f487d-b95e-4943-a071-9a7389a7d1bf.jpg", span: "" },
  { id: 90, category: "Bridle Dressing", label: "Bridle Dressing", image: "/bridle-dressing/0204b241-29ef-4ca6-8524-97771cd82589.jpg", span: "row-span-2" },
  { id: 91, category: "Bridle Dressing", label: "Bridle Dressing", image: "/bridle-dressing/04096442-4e63-40fa-b8b0-c5b23be0fcdc.jpg", span: "" },
  { id: 92, category: "Bridle Dressing", label: "Bridle Dressing", image: "/bridle-dressing/05402c34-ce06-4184-b0d1-4ce40e05ec5a.jpg", span: "" },
  { id: 93, category: "Bridle Dressing", label: "Bridle Dressing", image: "/bridle-dressing/0b300dbb-7344-45a2-9388-fe2daae81b4e.jpg", span: "row-span-2" },
  { id: 94, category: "Bridle Dressing", label: "Bridle Dressing", image: "/bridle-dressing/0dfebc29-85a6-464a-9732-313e18a24371.jpg", span: "" },
  { id: 95, category: "Bridle Dressing", label: "Bridle Dressing", image: "/bridle-dressing/0ec38c98-4496-4304-b4d3-05e5228d70a7.jpg", span: "" },
  { id: 96, category: "Bridle Dressing", label: "Bridle Dressing", image: "/bridle-dressing/38cd4fff-bbd3-4660-b3f1-470347ab89ad.jpg", span: "" },
  { id: 97, category: "Bridle Dressing", label: "Bridle Dressing", image: "/bridle-dressing/40a5c57d-4bc1-48fa-86e7-5a34f541ac07.jpg", span: "row-span-2" },
  { id: 98, category: "Bridle Dressing", label: "Bridle Dressing", image: "/bridle-dressing/44b29f96-ab32-4c57-8047-bb1fbf10931f.jpg", span: "" },
  { id: 99, category: "Bridle Dressing", label: "Bridle Dressing", image: "/bridle-dressing/55c142ce-62bf-4ce0-8139-e3bda01e8c50.jpg", span: "" },
  { id: 100, category: "Bridle Dressing", label: "Bridle Dressing", image: "/bridle-dressing/65c4f885-749c-4dd1-9248-87cb8a945f26.jpg", span: "" },
  { id: 101, category: "Bridle Dressing", label: "Bridle Dressing", image: "/bridle-dressing/680502ab-d11b-41fa-a8ef-994fc9b7a1b6.jpg", span: "row-span-2" },
  { id: 102, category: "Bridle Dressing", label: "Bridle Dressing", image: "/bridle-dressing/709931cc-0f01-4b6b-823a-a4a6356a314c.jpg", span: "" },
  { id: 103, category: "Bridle Dressing", label: "Bridle Dressing", image: "/bridle-dressing/9c18058a-1e22-40a5-86d0-6d748f17b9a0.jpg", span: "" },
  { id: 104, category: "Bridle Dressing", label: "Bridle Dressing", image: "/bridle-dressing/9cfbe7b8-ec7e-4768-a3fb-600590464af7.jpg", span: "" },
  { id: 105, category: "Bridle Dressing", label: "Bridle Dressing", image: "/bridle-dressing/a7543238-7fa0-4a80-ad79-827e9c4a979a.jpg", span: "row-span-2" },
  { id: 106, category: "Bridle Dressing", label: "Bridle Dressing", image: "/bridle-dressing/cbeafd7d-67d8-4482-b8d4-c697958b916f.jpg", span: "" },
  { id: 107, category: "Hair Removing", label: "Hair Removing", image: "/hair-removing/06da87b8-60fe-4e0b-be1a-dfc34ec3c7fd.jpg", span: "row-span-2" },
  { id: 108, category: "Hair Removing", label: "Hair Removing", image: "/hair-removing/6e6611ef-f31c-4166-a5ab-3b50f397cf76.jpg", span: "" },
  { id: 109, category: "Hair Removing", label: "Hair Removing", image: "/hair-removing/962ca7fd-25f8-4e54-8328-566b9b286ab7.jpg", span: "" },
  { id: 110, category: "Hair Removing", label: "Hair Removing", image: "/hair-removing/a125084f-1961-4d22-a6c2-33c09598612f.jpg", span: "row-span-2" },
  { id: 111, category: "Hair Removing", label: "Hair Removing", image: "/hair-removing/f8368447-aae5-47ae-a9b1-578d33941ad3.jpg", span: "" },
  { id: 112, category: "Eyebrows Shaping", label: "Eyebrows Shaping", image: "/eyebrows-shaping/07a9c5eb-7e3c-4171-b122-3bcf77d320f5.jpg", span: "row-span-2" },
  { id: 113, category: "Eyebrows Shaping", label: "Eyebrows Shaping", image: "/eyebrows-shaping/bc280a3a-47c1-49ee-a0d2-b68c52af183f.jpg", span: "" },
  { id: 114, category: "Eyebrows Shaping", label: "Eyebrows Shaping", image: "/eyebrows-shaping/d8ae8638-72f3-4157-af27-27b917e2cf07.jpg", span: "" },
];

export default function GalleryPageClient() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxItem, setLightboxItem] = useState<(typeof galleryItems)[0] | null>(null);

  const filtered =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((g) => g.category === activeFilter);

  return (
    <>
      {/* Page Hero */}
      <section className="bg-[#0E0E10] pt-36 pb-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 70% 30%, rgba(184,154,122,0.1) 0%, transparent 60%)" }} />
        <SectionReveal className="relative z-10 max-w-2xl mx-auto">
          <p className="font-montserrat text-xs tracking-[0.4em] uppercase text-[#B89A7A] mb-5">Our Portfolio</p>
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-7xl text-[#F7F6F2] mb-6" style={{ lineHeight: 1.1 }}>
            Beauty in Every Frame
          </h1>
          <div className="w-16 h-px bg-[#B89A7A] mx-auto mb-8" />
          <p className="font-montserrat text-[#6B665F] text-base leading-relaxed">
            A curated collection of transformations — from everyday elegance to unforgettable bridal moments.
          </p>
        </SectionReveal>
      </section>

      {/* Filter Bar */}
      <section className="bg-[#F7F6F2] sticky top-20 z-30 border-b border-[#E7E2D8] shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex gap-1 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`relative font-montserrat text-xs tracking-widest uppercase px-6 py-5 whitespace-nowrap transition-colors duration-300 ${
                activeFilter === f ? "text-[#0E0E10]" : "text-[#6B665F] hover:text-[#0E0E10]"
              }`}
            >
              {f}
              {activeFilter === f && (
                <motion.div
                  layoutId="gallery-tab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B89A7A]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry/Grid */}
      <section className="bg-[#F7F6F2] py-12 lg:py-16">
        <div className="w-full px-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="columns-1 sm:columns-2 lg:columns-3 gap-2 space-y-2"
            >
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="break-inside-avoid group cursor-pointer relative overflow-hidden"
                  style={{ height: item.span === "row-span-2" ? "420px" : "280px" }}
                  onClick={() => setLightboxItem(item)}
                >
                  {/* Image or Gradient placeholder */}
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.label}
                      className="absolute inset-0 w-full h-full object-cover object-center scale-110 transition-transform duration-700 group-hover:scale-125"
                    />
                  ) : (
                    <div
                      className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                      style={{ background: item.gradient }}
                    />
                  )}
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-[#0E0E10]/10 group-hover:bg-[#0E0E10]/50 transition-all duration-500" />
                  {/* Bottom shadow overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0E0E10]/80 to-transparent pointer-events-none" />
                  {/* Label */}
                  <div className="absolute inset-x-0 bottom-0 p-5 transition-transform duration-500">
                    <p className="font-montserrat text-[10px] tracking-widest uppercase text-[#B89A7A] mb-1">{item.category}</p>
                    <p className="font-playfair text-lg text-[#0E0E10] group-hover:text-[#B89A7A] transition-colors duration-300">{item.label}</p>
                  </div>
                  {/* Expand icon */}
                  <div className="absolute top-4 right-4 w-8 h-8 border border-[#B89A7A]/0 group-hover:border-[#B89A7A]/60 flex items-center justify-center text-[#F7F6F2]/0 group-hover:text-[#F7F6F2] transition-all duration-500 text-xs">
                    ⤢
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:p-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxItem(null)}
          >
            <div className="absolute inset-0 bg-[#0E0E10]/90 backdrop-blur-md" />
            <motion.div
              className="relative max-w-2xl w-full aspect-[4/5] overflow-hidden"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {lightboxItem.image ? (
                <img
                  src={lightboxItem.image}
                  alt={lightboxItem.label}
                  className="absolute inset-0 w-full h-full object-cover object-center scale-110"
                />
              ) : (
                <div className="absolute inset-0" style={{ background: lightboxItem.gradient }} />
              )}
              {/* Close */}
              <button
                className="absolute top-4 right-4 w-10 h-10 bg-[#0E0E10]/60 text-[#F7F6F2] flex items-center justify-center text-xl hover:bg-[#B89A7A] transition-colors z-10"
                onClick={() => setLightboxItem(null)}
              >
                ×
              </button>
              {/* Caption */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0E0E10]/80 to-transparent p-8">
                <p className="font-montserrat text-[10px] tracking-widest uppercase text-[#B89A7A] mb-2">{lightboxItem.category}</p>
                <p className="font-playfair text-2xl text-[#F7F6F2]">{lightboxItem.label}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
