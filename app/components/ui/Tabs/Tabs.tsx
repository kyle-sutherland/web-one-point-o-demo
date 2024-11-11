import { useState } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "@/types/common";

const tabs = tv({
  slots: {
    list: ["flex", "border-b-2 border-[#DEDEDF]"],
    tab: [
      "relative",
      "bg-w95-primary text-black",
      "rounded-t-sm",
      "border-r border-[#5A5A5A]",
      "last:border-r-0",
    ],
    trigger: [
      "px-7 py-1",
      "text-w95-sm italic",
      "hover:bg-w95-primary/90",
      "focus:outline-none focus:ring-0",
      "disabled:cursor-not-allowed disabled:opacity-50",
    ],
    content: ["bg-w95-primary", "p-4"],
  },
  variants: {
    selected: {
      true: {
        tab: [
          "z-10",
          "after:absolute after:bottom-[-2px] after:left-0",
          "after:w-full after:h-0.5 after:bg-w95-primary",
        ],
        trigger: ["border-r border-[#5A5A5A]"],
      },
    },
  },
});

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps extends ComponentProps<"div"> {
  items: TabItem[];
  defaultTab?: string;
  onChange?: (id: string) => void;
}

export function Tabs({
  items,
  defaultTab,
  onChange,
  className,
  ...props
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || items[0]?.id);

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    onChange?.(id);
  };

  const { list, tab, trigger, content } = tabs();

  return (
    <div className={cn("w-full", className)} {...props}>
      <div className={list()}>
        {items.map((item) => (
          <div
            key={item.id}
            className={tab({ selected: activeTab === item.id })}
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === item.id}
              aria-controls={`tabpanel-${item.id}`}
              disabled={item.disabled}
              className={trigger({ selected: activeTab === item.id })}
              onClick={() => handleTabChange(item.id)}
            >
              {item.label}
            </button>
          </div>
        ))}
      </div>
      <div className={content()}>
        {items.find((item) => item.id === activeTab)?.content}
      </div>
    </div>
  );
}
