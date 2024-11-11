"use client";
import { useState } from "react";
import { Card } from "./ui/Card/Card";
import { Button } from "./ui/Button/Button";
import { Tabs } from "./ui/Tabs/Tabs";

interface ComponentDisplayProps {
  title?: string;
  description?: string;
  code: string;
  children: React.ReactNode;
}

export function ComponentDisplay({
  title,
  description,
  code,
  children,
}: ComponentDisplayProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-5">
      {title && <h6 className="text-gray-600 mb-2">{title}</h6>}
      {description && <p className="mb-4 text-w95-base">{description}</p>}

      <Card variant="secondary">
        <Tabs
          items={[
            {
              id: "result",
              label: "Result",
              content: <div className="p-4 bg-w95-primary">{children}</div>,
            },
            {
              id: "code",
              label: "HTML",
              content: (
                <div className="relative">
                  <Button
                    size="sm"
                    variant={copied ? "success" : "primary"}
                    className="absolute top-2 right-2"
                    onClick={handleCopy}
                  >
                    {copied ? "Copied!" : "Copy"}
                  </Button>
                  <pre className="p-4 bg-w95-primary overflow-x-auto">
                    <code>{code}</code>
                  </pre>
                </div>
              ),
            },
          ]}
        />
      </Card>
    </div>
  );
}
