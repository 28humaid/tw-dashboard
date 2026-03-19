"use client";

import { useState } from "react";
import Button from "@/components/common/Button";
import LocationTable from "./LocationTable";
import LocationFormModal from "./LocationForm";
import { Location } from "@/types/type";
import { useTranslation } from "react-i18next";

const LocationComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingLocation, setEditingLocation] = useState<Location | null>(null);
  const { t } = useTranslation();

  const handleAddClick = () => {
    setEditingLocation(null);
    setIsModalOpen(true);
  };

  const handleEdit = (row: Location) => {
    setEditingLocation(row);
    setIsModalOpen(true);
  };

  const handleSuccess = (data: Location, isEdit: boolean) => {
    console.log("Form success callback:", { data, isEdit });
    // Here you would normally call your API and refresh the table
  };

  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center justify-end">
          <Button onClick={handleAddClick} size="sm">
            {t("masters.locationPage.Add Location")}
          </Button>
        </div>
        <div>
          <LocationTable handleEdit={handleEdit} />
        </div>
      </div>

      <LocationFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialData={editingLocation}
        onSuccess={handleSuccess}
      />
    </>
  );
};

export default LocationComponent;