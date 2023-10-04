"use client"

"import { HeartIcon } from '@heroicons/react/24/outline'"
import { useState } from 'react'

export default function CardRoupa({roupa}) {
    return (
        <div id="card" className="flex flex-col w-40 justify-center items-center m-2">
            
            <span className="font-bold text-center line-clamp-1">{roupa.titulo}</span>
            <div>
                <span>R${roupa.preco}</span>
            </div>
            <a href="#" className="bg-yellow-500 py-2 w-full rounded text-center">Detalhes</a>
        </div>

    )
}