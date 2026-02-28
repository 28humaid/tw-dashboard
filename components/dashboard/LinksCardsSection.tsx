import { QuickLink } from "@/data/quickLinksData";
import QuickLinkCard from "./QuickLinkCard";
import { useTranslation } from "react-i18next";

interface LinksCardsSectionProps {
  links: QuickLink[];
}

export default function LinksCardsSection({ links }: LinksCardsSectionProps) {
    const {t} = useTranslation()
  return (
    <div className="flex flex-wrap gap-4 p-4">
      {links.map((link, index) => (
        <QuickLinkCard
          key={index}
          title={t(link.title)}
          description={t(link.description)}
          icon={link.icon}
          route={link.route}
        />
      ))}
    </div>
  );
}