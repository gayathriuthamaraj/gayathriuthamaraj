"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sidebarSections } from "@/lib/data";
import { cn } from "@/lib/utils";

// ─── Icon Map ─────────────────────────────────────────────────────────────────
function Icon({ name, size = 14 }: { name: string; size?: number }) {
  const icons: Record<string, React.ReactNode> = {
    home: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    user: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    folder: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
      </svg>
    ),
    layers: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    "book-open": (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
      </svg>
    ),
    github: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
    server: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
    compass: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    ),
    mail: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    terminal: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    ),
    cpu: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    ),
    link: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
      </svg>
    ),
    linkedin: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    activity: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    "share-2": (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
    shield: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    "git-branch": (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="6" y1="3" x2="6" y2="15" />
        <circle cx="18" cy="6" r="3" /><circle cx="6" cy="18" r="3" />
        <path d="M18 9a9 9 0 01-9 9" />
      </svg>
    ),
    zap: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    "external-link": (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </svg>
    ),
    "chevron-right": (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="9 18 15 12 9 6" />
      </svg>
    ),
    "chevron-down": (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="6 9 12 15 18 9" />
      </svg>
    ),
    menu: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
      </svg>
    ),
    x: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    ),
    brain: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2a7 7 0 017 7c0 1.5-.5 3-1.5 4l1 3-3-1a7 7 0 01-7 0l-3 1 1-3A7 7 0 015 9a7 7 0 017-7z"/>
      </svg>
    ),
    code: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    layout: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
  };
  return <span className="inline-flex items-center justify-center flex-shrink-0">{icons[name] ?? <span />}</span>;
}

// ─── Sidebar Item ─────────────────────────────────────────────────────────────
type SidebarItemDef = {
  label: string;
  href: string;
  icon: string;
  badge?: string;
  external?: boolean;
};

function SidebarItem({ item, depth = 0 }: { item: SidebarItemDef; depth?: number }) {
  const [hovered, setHovered] = useState(false);

  const badgeColor: Record<string, string> = {
    live: "text-sage bg-sage/10 border-sage/30",
    soon: "text-beige-muted bg-forest-800/50 border-forest-600/20",
    wip: "text-walnut-light bg-walnut/10 border-walnut/20",
  };

  const badgeClass =
    item.badge && badgeColor[item.badge]
      ? badgeColor[item.badge]
      : "text-beige-muted bg-forest-800/30 border-forest-600/20";

  return (
    <a
      href={item.href}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noopener noreferrer" : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "group flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs transition-all duration-200",
        depth === 0 ? "pl-2" : "pl-3",
        hovered
          ? "bg-moss/30 text-beige"
          : "text-beige-muted hover:text-beige"
      )}
    >
      <span className={cn("transition-colors duration-200", hovered ? "text-sage" : "text-beige-dark")}>
        <Icon name={item.icon} size={12} />
      </span>
      <span className="truncate flex-1 font-mono">{item.label}</span>
      {item.badge && (
        <span className={cn("px-1.5 py-0 rounded-full text-[9px] border font-mono tracking-wide", badgeClass)}>
          {item.badge}
        </span>
      )}
      {item.external && hovered && (
        <span className="text-beige-dark opacity-60">
          <Icon name="external-link" size={10} />
        </span>
      )}
    </a>
  );
}

// ─── Sidebar Section ──────────────────────────────────────────────────────────
type SectionDef = {
  id: string;
  label: string;
  icon: string;
  defaultOpen: boolean;
  items: SidebarItemDef[];
};

function SidebarSection({ section }: { section: SectionDef }) {
  const [open, setOpen] = useState(section.defaultOpen);

  return (
    <div className="mb-1">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-[11px] font-mono font-medium text-beige-dark hover:text-beige hover:bg-moss/20 transition-all duration-200 group"
      >
        <span className="text-sage/70 group-hover:text-sage transition-colors duration-200">
          <Icon name={section.icon} size={12} />
        </span>
        <span className="flex-1 text-left uppercase tracking-widest text-[10px]">
          {section.label}
        </span>
        <motion.span
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-beige-dark/50"
        >
          <Icon name="chevron-right" size={10} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="ml-2 mt-0.5 border-l border-moss/30 pl-2 py-0.5 space-y-0.5">
              {section.items.map((item) => (
                <SidebarItem key={item.label} item={item} depth={1} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Main Sidebar ─────────────────────────────────────────────────────────────
export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile on resize
  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 1280) setMobileOpen(false);
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen((o) => !o)}
        className="xl:hidden fixed top-4 right-4 z-[90] glass rounded-xl p-2.5 text-beige-muted hover:text-beige transition-colors"
        aria-label="Toggle sidebar"
      >
        <Icon name={mobileOpen ? "x" : "menu"} size={18} />
      </button>

      {/* Mobile backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="xl:hidden fixed inset-0 bg-pine/70 backdrop-blur-sm z-[70]"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar panel */}
      <motion.aside
        animate={{
          x: mobileOpen ? 0 : undefined,
          width: collapsed ? 52 : 220,
        }}
        initial={false}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className={cn(
          "fixed left-0 top-0 h-full z-[80] flex flex-col",
          "glass-dark border-r border-moss/20",
          // Mobile: slide in from left
          "max-xl:translate-x-[-100%] max-xl:w-[220px]",
          mobileOpen && "max-xl:!translate-x-0",
          // Desktop: always visible
          "xl:translate-x-0"
        )}
        style={{ width: collapsed ? 52 : 220 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-3 py-4 border-b border-moss/20">
          <AnimatePresence>
            {!collapsed && (
              <motion.div
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2 overflow-hidden"
              >
                <div className="w-2 h-2 rounded-full bg-sage animate-breathe" />
                <span className="text-xs font-mono text-beige/70 truncate">gayathri.sys</span>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={() => setCollapsed((c) => !c)}
            className="hidden xl:flex items-center justify-center w-7 h-7 rounded-lg text-beige-dark hover:text-beige hover:bg-moss/30 transition-all duration-200 flex-shrink-0"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <motion.span animate={{ rotate: collapsed ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <Icon name="chevron-right" size={12} />
            </motion.span>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto sidebar-scroll py-3 px-2">
          <AnimatePresence>
            {!collapsed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {sidebarSections.map((section) => (
                  <SidebarSection key={section.id} section={section} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {collapsed && (
            <div className="flex flex-col items-center gap-3 pt-2">
              {["home", "user", "folder", "layers", "server", "mail"].map((icon) => (
                <button
                  key={icon}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-beige-dark hover:text-sage hover:bg-moss/30 transition-all duration-200"
                >
                  <Icon name={icon} size={14} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <AnimatePresence>
          {!collapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="px-3 py-3 border-t border-moss/20"
            >
              <p className="text-[10px] font-mono text-beige-dark/40 text-center">
                built with next.js
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.aside>
    </>
  );
}
