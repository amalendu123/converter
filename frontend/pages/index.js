import Image from "next/image";
import { Inter } from "next/font/google";
import Cards from "./Components/cards";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const convert = [
    {
      text:"Pdf to excel",
      Link:"Pdftoexcel"
    },
    {
      text:"Excel to pdf",
      Link:"Exceltopdf"
    },
    {
      text:"photo to pdf",
      Link:"phototopdf",
    },
    {
      text:"Powerpoint to pdf",
      Link:"PowerPointtopdf",
    },
  ];

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-5" >
      <h1 className="font-mono text-5xl">Converter</h1>
      <div className="flex flex-wrap gap-5 justify-center items-center">
        {convert.map((item, index) => (
          <a href={`/${item.Link}`}>
            <Cards key={index} name={item.text}  />
          </a>
        ))}
      </div>
    </div>
  );
}
