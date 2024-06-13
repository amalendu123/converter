import { Solitreo } from 'next/font/google';
import { useRouter } from 'next/router';
import React from 'react';

const Index = () => {
    const convert = [
        {
            text: "Pdf to excel",
            Link: "Pdftoexcel"
        },
        {
            text: "Excel to pdf",
            Link: "Exceltopdf"
        },
        {
            text: "photo to pdf",
            Link: "phototopdf"
        },
        {
            text: "Powerpoint to pdf",
            Link: "PowerPointtopdf"
        },
    ];

    const router = useRouter();
    const slug = router.query;
    const action = convert.find((item) => item.Link === slug.action);

    return (
        <div className='h-screen w-screen flex flex-col gap-5 justify-center items-center text-3xl'>
            <h1>{action?.text}</h1>
            <form className="flex flex-col" method="POST" action="http://127.0.0.1:8000/upload/">
                <div className="border-2 border-white bg-cyan-600 p-2 flex flex-col">
                    <input type="file" id="myfile" name="myfile" />
                </div>
                <button className='w-20 h-10 bg-red p-2'>
                    <a>Submit</a>
                </button>
            </form>
        </div>
    );
}

export default Index;
