"use client";

import { motion } from "framer-motion";

import {
Search,
Lightbulb,
Rocket,
TrendingUp,
} from "lucide-react";


const processSteps = [

{
number:"01",
title:"Discover",
description:
"We understand your brand, audience, goals and challenges to create a strong foundation.",
icon:Search,
},

{
number:"02",
title:"Strategize",
description:
"We build a clear roadmap with positioning, creative direction and growth strategies.",
icon:Lightbulb,
},

{
number:"03",
title:"Create",
description:
"We transform ideas into powerful designs, content, websites and digital experiences.",
icon:Rocket,
},

{
number:"04",
title:"Grow",
description:
"We optimize performance, improve visibility and help your brand scale consistently.",
icon:TrendingUp,
},

];



export default function WorkProcess(){


return(

<section
id="work-process"
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
left-1/2
top-1/2
-translate-x-1/2
-translate-y-1/2
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


<motion.div

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
duration:0.7
}}

className="
text-center
mb-20
"

>


<p
className="
uppercase
tracking-[0.4em]
text-sm
text-purple-600
"
>

Our Process

</p>



<h2
className="
mt-5
text-5xl
md:text-6xl
font-bold
text-gray-900
"
>

How We Build

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

Powerful Brands

</span>

</h2>




<p
className="
mt-6
mx-auto
max-w-2xl
text-lg
text-gray-600
"
>

A structured process that turns ideas
into impactful brand experiences.

</p>


</motion.div>








<div
className="
grid
gap-8
md:grid-cols-2
lg:grid-cols-4
"
>


{
processSteps.map((step,index)=>{


const Icon = step.icon;


return(

<motion.div


key={step.number}


initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:0.6,
delay:index*0.12
}}


whileHover={{
y:-12
}}


className="
group
relative
rounded-3xl
border
border-purple-100
bg-white
p-8
shadow-sm
overflow-hidden
transition
hover:shadow-[0_20px_50px_rgba(168,85,247,0.18)]
"


>


<div
className="
absolute
inset-0
bg-gradient-to-br
from-purple-100/0
to-purple-100/50
opacity-0
group-hover:opacity-100
transition
"
/>




<div
className="
relative
z-10
"
>


<span
className="
text-6xl
font-bold
text-purple-100
"
>

{step.number}

</span>




<motion.div

whileHover={{
rotate:10,
scale:1.1
}}

className="
mt-6
flex
h-14
w-14
items-center
justify-center
rounded-2xl
bg-purple-100
text-purple-700
"

>

<Icon size={28}/>

</motion.div>





<h3
className="
mt-6
text-2xl
font-bold
text-gray-900
"
>

{step.title}

</h3>




<p
className="
mt-4
leading-relaxed
text-gray-600
"
>

{step.description}

</p>



</div>



</motion.div>


)


})

}



</div>



</div>


</section>


)


}