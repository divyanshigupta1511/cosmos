"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


const faqs = [
  {
    question: "What services does Cosmos BrandFlow provide?",
    answer:
      "We provide Branding, Website Development, Marketing, Business Automation, Performance Marketing, Social Media Management, and Business Consultancy.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "Yes. We work with startups, growing businesses, and established brands looking to build a stronger digital presence.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "Project timelines vary depending on the scope, but most branding and website projects are completed within a few weeks.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. We redesign existing websites with modern layouts, premium experiences, and conversion-focused strategies.",
  },
];


export default function FAQ(){

const [active,setActive]=useState<number | null>(0);


return(

<section
className="
relative
overflow-hidden
bg-white
px-6
py-28
"
>


{/* Glow */}

<div
className="
absolute
left-1/2
top-20
-translate-x-1/2
h-[400px]
w-[400px]
rounded-full
bg-purple-200/40
blur-[140px]
"
/>





<div
className="
relative
z-10
mx-auto
max-w-4xl
"
>





{/* Heading */}


<motion.div

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

className="
mb-16
text-center
"

>


<p
className="
text-sm
uppercase
tracking-[0.4em]
text-purple-600
"
>

FAQ

</p>



<h2
className="
mt-4
text-5xl
font-bold
text-gray-900
md:text-6xl
"
>

Frequently Asked

<span
className="
block
bg-gradient-to-r
from-purple-700
via-purple-500
to-purple-300
bg-clip-text
text-transparent
"
>

Questions

</span>


</h2>


</motion.div>








{/* Accordion */}



<div
className="
space-y-5
"
>


{

faqs.map((faq,index)=>(


<motion.div

key={index}

initial={{
opacity:0,
y:20
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
delay:index*0.1
}}

className="
rounded-3xl
border
border-purple-100
bg-white
shadow-[0_15px_40px_rgba(168,85,247,0.08)]
overflow-hidden
"

>


<button

onClick={()=>setActive(
active===index ? null : index
)}

className="
flex
w-full
items-center
justify-between
p-7
text-left
"

>


<span
className="
text-lg
font-semibold
text-gray-900
"
>

{faq.question}

</span>



<ChevronDown

size={22}

className={`
text-purple-600
transition-transform
duration-300

${active===index ? "rotate-180" : ""}

`}

/>


</button>





<AnimatePresence>


{

active===index && (

<motion.div

initial={{
height:0,
opacity:0
}}

animate={{
height:"auto",
opacity:1
}}

exit={{
height:0,
opacity:0
}}

transition={{
duration:0.3
}}

className="
overflow-hidden
"

>


<p
className="
px-7
pb-7
leading-relaxed
text-gray-600
"
>

{faq.answer}

</p>


</motion.div>

)

}


</AnimatePresence>



</motion.div>


))

}



</div>




</div>


</section>


)

}