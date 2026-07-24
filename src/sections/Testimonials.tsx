"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";


const testimonials = [
  {
    name: "Aarav Sharma",
    company: "Founder, Elevate Studio",
    review:
      "Cosmos BrandFlow completely transformed our brand identity. The website and marketing strategy exceeded our expectations.",
  },
  {
    name: "Priya Mehta",
    company: "Director, Nova Interiors",
    review:
      "Professional, creative, and highly strategic. The team understood our vision and delivered exceptional results.",
  },
  {
    name: "Rahul Verma",
    company: "CEO, Vision Tech",
    review:
      "From branding to automation, Cosmos helped us build a strong digital presence that generated real business growth.",
  },
];


export default function Testimonials(){

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
h-[450px]
w-[450px]
rounded-full
bg-purple-200/40
blur-[150px]
"
/>





<div
className="
relative
z-10
mx-auto
max-w-7xl
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

Testimonials

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

What Our

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

Clients Say

</span>


</h2>



<p
className="
mx-auto
mt-6
max-w-2xl
text-gray-600
"
>

Trusted by businesses that believe in
building stronger digital identities.

</p>


</motion.div>









{/* Cards */}


<div
className="
grid
gap-8
lg:grid-cols-3
"
>


{

testimonials.map((item,index)=>(


<motion.div

key={item.name}

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
delay:index*0.15
}}

whileHover={{
y:-10
}}

className="
rounded-3xl
border
border-purple-100
bg-white
p-8
shadow-[0_20px_50px_rgba(168,85,247,0.10)]
transition
"

>


{/* Stars */}


<div
className="
mb-7
flex
gap-1
"
>

{

[...Array(5)].map((_,i)=>(

<Star

key={i}

size={18}

className="
fill-purple-500
text-purple-500
"

/>

))

}

</div>







<p
className="
leading-8
text-gray-600
"
>

"{item.review}"

</p>






<div
className="
mt-8
border-t
border-gray-100
pt-6
"
>


<h3
className="
text-xl
font-bold
text-gray-900
"
>

{item.name}

</h3>


<p
className="
mt-1
text-gray-500
"
>

{item.company}

</p>


</div>





</motion.div>


))

}


</div>





</div>


</section>


)

}