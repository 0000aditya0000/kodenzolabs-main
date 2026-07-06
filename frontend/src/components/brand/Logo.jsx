import React from "react";
import logoSrc from "../../KODENZO LABS.png";

export function LogoMark({ size = 36, className = "" }) {
  return (
    <img
      src={logoSrc}
      alt="Kodenzo Labs logo"
      width={size}
      height={size}
      className={`select-none ${className}`}
      style={{ width: size, height: size, objectFit: "contain" }}
      loading="eager"
    />
  );
}

export function LogoLockup({ className = "", textClassName = "" }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark size={36} />
      <span className={`font-heading font-extrabold text-[17px] tracking-tight ${textClassName}`}>
        Kodenzo<span className="text-brand-teal">.</span>
      </span>
    </div>
  );
}

export default LogoLockup;
