import { Link } from "react-router-dom";

/**
 * variant: 'solid' | 'outline'
 * dark: true when the button sits on a dark (forest) section like the hero
 *       or footer — flips the outline colors so they stay legible there.
 */
export default function Button({
  to,
  href,
  children,
  variant = "solid",
  dark = false,
  className = "",
  ...rest
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold tracking-wide uppercase transition-all duration-300 rounded-sm";

  const styles = {
    solid: "bg-mustard text-forest-deep hover:bg-mustard-light",
    outline: dark
      ? "border border-cream/40 text-cream hover:border-mustard hover:text-mustard"
      : "border border-forest/30 text-forest hover:border-mustard hover:text-mustard",
    ghost: dark
      ? "text-mustard-light hover:text-mustard"
      : "text-forest hover:text-mustard",
  };

  const cls = `${base} ${styles[variant]} ${className}`;

  if (to)
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    );
  if (href)
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    );
  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  );
}
