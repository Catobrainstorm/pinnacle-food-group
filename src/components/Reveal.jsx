import { useReveal } from "../hooks/useReveal";

export default function Reveal({
  children,
  className = "",
  stagger,
  y,
  as: Tag = "div",
}) {
  const ref = useReveal({ stagger, y });
  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
