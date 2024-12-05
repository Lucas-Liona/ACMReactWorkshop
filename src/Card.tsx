import React from 'react'

interface Props {
    title: string;
    date: string;
    imgpath: string;
}

export default function Card({ title, date, imgpath}: Props) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      {/* Image Section */}
      <img
        src={imgpath}////"../assets/collage.jpg"
        alt={title}
        className="w-full h-48 object-cover"
      />

      {/* Content Section */}
      <div className="p-4">
        <h1 className="text-lg font-bold text-gray-800">{title}</h1>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
    </div>
  )
}