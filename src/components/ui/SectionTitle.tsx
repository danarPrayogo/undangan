import GoldDivider from "./GoldDivider";

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  className?: string;
}

export default function SectionTitle({ subtitle, title, className = "" }: SectionTitleProps) {
  return (
    <div className={`text-center mb-10 ${className}`}>
      {subtitle && (
        <p className="font-montserrat text-xs tracking-[0.3em] text-gold uppercase mb-3 opacity-80">
          {subtitle}
        </p>
      )}
      <h2 className="font-cormorant text-3xl md:text-4xl text-cream font-light tracking-wide">
        {title}
      </h2>
      <GoldDivider className="mt-5 max-w-xs mx-auto" />
    </div>
  );
}
