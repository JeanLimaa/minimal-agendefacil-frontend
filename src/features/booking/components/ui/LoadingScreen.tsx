import React from 'react';

type LoadingScreenProps = {
    text?: string;
};

export default function LoadingScreen({ text = "Carregando..." }: LoadingScreenProps) {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-neutral-100">
            <div className="w-16 h-16 border-4 border-neutral-300 border-t-brand-main rounded-full animate-spin" />
            <p className="mt-6 text-brand-main text-lg">
                {text}
            </p>
        </div>
    );
}