import SocialCard from '@/components/SocialCard'
import RootLayout from '@/components/RootLayout';
import { api } from "@/utils/api";
import { useSession } from 'next-auth/react';
import React from 'react';

export default function Links() {
    const {status} = useSession();
    
    // trpc hooks
    const { data: linkData } = api.links.getAll.useQuery()
    const deleteMutation = api.links.delete.useMutation()

    return (
        <RootLayout>
            <div className="space-y-2">
                {
                    linkData && linkData.length > 0 ? linkData.map((v) => {
                        return <SocialCard 
                            url={v.url} 
                            name={v.name} 
                            key={v.name} 
                            showDelete={status === "authenticated"} 
                            deleteCallback={() => {
                                deleteMutation.mutate(v.id)
                            }}
                        />
                    }) : 
                    <div className="text-center text-white">
                        <h1>Uh oh!</h1>
                        <p>There&apos;s nothing here :(</p>
                    </div>
                }
            </div>
        </RootLayout>
    )
}