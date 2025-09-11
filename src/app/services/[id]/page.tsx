import React from 'react'

export default async function TreatmentDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const {id} = await params;
    return (
        <main className='relative w-full'>
            {}
        </main>
    )
}
