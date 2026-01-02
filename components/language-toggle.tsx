"use client"

import { useLanguage } from "@/contexts/language-context"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => setLanguage("en")}
        className={`w-9 h-9 flex items-center justify-center text-xs font-bold border-2 transition-smooth ${
          language === "en"
            ? "bg-primary text-primary-foreground border-primary shadow-md"
            : "bg-background text-muted-foreground border-border hover:border-primary hover:text-primary"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("ne")}
        className={`w-9 h-9 flex items-center justify-center text-xs font-bold border-2 transition-smooth ${
          language === "ne"
            ? "bg-primary text-primary-foreground border-primary shadow-md"
            : "bg-background text-muted-foreground border-border hover:border-primary hover:text-primary"
        }`}
      >
        ने
      </button>
    </div>
  )
}
