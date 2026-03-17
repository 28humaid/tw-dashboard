"use client"
import Button from '@/components/common/Button'
import CompanyTable from './CompanyTable'
import { useState } from 'react';
import { Company } from '@/types/type';
import CompanyFormModal from './CompanyForm';

const CompanyComponent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingCompany, setEditingCompany] = useState<Company | null>(null);

    const handleAddClick = () => {
    setEditingCompany(null);
    setIsModalOpen(true);
    };

    const handleEdit = (row: Company) => {
    setEditingCompany(row);
    setIsModalOpen(true);
    };

    const handleSuccess = (data: Company, isEdit: boolean) => {
    console.log("Form success callback:", { data, isEdit });
    // Here you would normally call your API and refresh the table
    };

  return (
    <>
    <div className='space-y-6'>
        <div className='flex items-center justify-end'>
            <Button onClick={handleAddClick} size='sm'>
                Add Company
            </Button>
        </div>
        <div>
            <CompanyTable handleEdit={handleEdit}/>
        </div>
    </div>
    <CompanyFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialData={editingCompany}
        onSuccess={handleSuccess}
    />
    </>
  )
}

export default CompanyComponent