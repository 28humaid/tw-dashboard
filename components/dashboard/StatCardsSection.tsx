"use client";

import { useState } from "react";
import { StatCardProps } from "@/types/type";
import StatCard from "./StatCard";
import BottomSheetModal from "../common/BottomSheetModal";
import CardDetailsContent from "./CardDetailsContent";

type CardsSectionProps = {
  data: StatCardProps[];
  cards?: string;
  clickable?: boolean;
};

export default function CardsSection(props: CardsSectionProps) {
  const { data, cards, clickable = false } = props;

  const [selectedCard, setSelectedCard] = useState<StatCardProps | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = (card: StatCardProps) => {
    setSelectedCard(card);
    setIsOpen(true);
  };

  const widthClass = cards === "device cards" ? "md:w-[60%]" : "";

  return (
    <>
      <div className={`flex flex-wrap gap-4 w-full ${widthClass}`}>
        {data.map((card, index) => (
          <StatCard
            key={index}
            {...card}
            onClick={() => handleCardClick(card)}
            clickable={clickable}
          />
        ))}
      </div>

      {/* Reusable Modal */}
      <BottomSheetModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        {selectedCard && (
          <CardDetailsContent card={selectedCard} />
        )}
      </BottomSheetModal>
    </>
  );
}
