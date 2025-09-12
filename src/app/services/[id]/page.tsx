import React from 'react'
import DataPreview from './DataPreview';

export default async function TreatmentDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const {id} = await params;
    return (
        <main className='relative w-full'>
            <DataPreview id={id} />
        </main>
    )
}
