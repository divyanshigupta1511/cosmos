"use client";

import { motion } from "framer-motion";


const stats = [
{
number:"50+",
label:"Projects Delivered",
},

{
number:"25+",
label:"Happy Clients",
},

{
number:"5+",
label:"Years Experience",
},

{
number:"100%",
label:"Client Satisfaction",
},
];



export default function About(){


return(

<section
id="about"
className="
relative
overflow-hidden
bg-white
px-6
py-28
scroll-mt-32
"
>


{/* Glow */}

<div
className="
absolute
right-0
top-0
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
grid
max-w-7xl
items-center
gap-16
lg:grid-cols-2
"
>





{/* LEFT */}



<motion.div

initial={{
opacity:0,
x:-40
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

transition={{
duration:0.7
}}

>


<p
className="
text-sm
uppercase
tracking-[0.4em]
text-purple-600
"
>

About Cosmos

</p>




<h2
className="
mt-5
text-5xl
md:text-6xl
font-bold
leading-tight
text-gray-900
"
>

Building Brands

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

That People Remember

</span>

</h2>





<p
className="
mt-8
text-lg
leading-8
text-gray-600
"
>

Cosmos Brandflow is a premium branding
and business consultancy helping startups
and growing businesses build memorable
brands, modern websites, marketing systems
and scalable digital experiences.

</p>





<p
className="
mt-6
text-lg
leading-8
text-gray-600
"
>

We combine strategy, creativity, technology
and automation to create brands that don't
just look premium — they perform.

</p>



</motion.div>







{/* RIGHT SIDE */}



<motion.div

initial={{
opacity:0,
x:40
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

transition={{
duration:0.7
}}

className="
relative
"

>





{/* Philosophy Card */}



<div
className="
rounded-3xl
border
border-purple-100
bg-white
p-10
shadow-[0_20px_60px_rgba(168,85,247,0.15)]
"
>



<p
className="
text-sm
uppercase
tracking-widest
text-purple-600
"
>

Our Philosophy

</p>




<h3
className="
mt-5
text-3xl
font-bold
text-gray-900
"
>

Strategy.
Creativity.
Growth.

</h3>





<div
className="
mt-8
space-y-5
"
>


<div
className="
rounded-2xl
bg-purple-50
p-5
"
>

<p className="font-semibold text-gray-900">
01 — Strategy
</p>

<p className="mt-2 text-gray-600">
Understanding businesses and building strong foundations.
</p>

</div>




<div
className="
rounded-2xl
bg-purple-50
p-5
"
>

<p className="font-semibold text-gray-900">
02 — Creativity
</p>

<p className="mt-2 text-gray-600">
Creating identities and experiences people remember.
</p>

</div>





<div
className="
rounded-2xl
bg-purple-50
p-5
"
>

<p className="font-semibold text-gray-900">
03 — Growth
</p>

<p className="mt-2 text-gray-600">
Building systems that help brands scale.
</p>

</div>



</div>


</div>






{/* Floating Stats */}



<div
className="
mt-8
grid
grid-cols-2
gap-5
"
>


{
stats.map((item,index)=>(


<motion.div

key={item.label}

whileHover={{
y:-8
}}

className="
rounded-3xl
border
border-purple-100
bg-white
p-6
shadow-sm
"

>


<h3
className="
text-3xl
font-bold
text-purple-700
"
>

{item.number}

</h3>


<p
className="
mt-2
text-sm
text-gray-600
"
>

{item.label}

</p>


</motion.div>


))
}


</div>





</motion.div>






</div>



</section>

)

}