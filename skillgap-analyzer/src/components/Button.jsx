export default function Button({ children, variant = "primary", className = "", ...props }) {
  const base = variant === "primary" ? "btn-primary" : "btn-ghost";
  return (
    <button type="button" className={`${base} ${className}`} {...props}>
      {children}
    </button>
  );
}
