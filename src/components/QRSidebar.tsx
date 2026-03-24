"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import { DropdownButton } from "@/components/ui/DropdownButton";
import Image from "next/image";

interface QRSidebarProps {
  onClose: () => void;
}

function QRModal({
  title,
  imageSrc,
  onClose,
}: {
  title: string;
  imageSrc: string;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4">
      <div className="relative w-full max-w-md rounded-xl border bg-background p-4 shadow-lg">
        <p className="mb-2 text-sm font-medium">{title}</p>
        <Image
          src={imageSrc}
          alt={`${title} QR`}
          className="h-[420px] w-full object-contain rounded-md"
        />
        <Button variant="outline" className="mt-3 w-full" onClick={onClose}>
          Close
        </Button>
      </div>
    </div>
  );
}

export function QRSidebar({ }: QRSidebarProps) {
  // export function QRSidebar({ onClose }: QRSidebarProps) {
  const [showEsewa, setShowEsewa] = useState(false);
  const [showBank, setShowBank] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const esewaModal = showEsewa ? (
    <QRModal
      title="Esewa QR"
      imageSrc="/esewa.jpeg"
      onClose={() => setShowEsewa(false)}
    />
  ) : null;

  const bankModal = showBank ? (
    <QRModal
      title="Bank QR"
      imageSrc="/bank.jpeg"
      onClose={() => setShowBank(false)}
    />
  ) : null;

  return (
    <>
      <DropdownButton label="QR Code" className="w-full">
        <Button variant="ghost" className="w-full justify-start" onClick={() => setShowEsewa(true)}>
          Esewa
        </Button>
        <Button variant="ghost" className="w-full justify-start" onClick={() => setShowBank(true)}>
          Bank
        </Button>
      </DropdownButton>

      {mounted &&
        createPortal(
          <>
            {esewaModal}
            {bankModal}
          </>,
          document.body
        )}
    </>
  );
}
