import SectionHeading from "../components/SectionHeading";

export default function Placeholder({ title }) {
  return (
    <section className="pt-40 pb-32 min-h-[60vh]">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="Pinnacle Food Group" title={title} />
        <p className="text-stone">This page is being built next.</p>
      </div>
    </section>
  );
}
