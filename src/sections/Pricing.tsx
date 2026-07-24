"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";


const plans = [

{
title:"Starter",
description:
"Perfect for businesses building their brand presence.",
button:"Book Consultation",
features:[
"Brand Consultation",
"Social Media Strategy",
"Landing Page",
"Email Support",
],
featured:false,
},


{
title:"Growth",
description:
"Ideal for brands ready to scale and dominate.",
button:"Let's Talk",
features:[
"Everything in Starter",
"Website Design",
"Content Strategy",
"Lead Generation",
"Performance Marketing",
"Priority Support",
],
featured:true,
},


{
title:"Enterprise",
description:
"Complete business growth and automation solution.",
button:"Contact Us",
features:[
"Everything in Growth",
"Business Automation",
"ERP Consultation",
"Custom Software",
"Dedicated Support",
],
featured:false,
},

];




export default function Pricing(){


return(

<section
id="pricing"
className="
relative
overflow-hidden
bg-white
px-6
py-28
scroll-mt-32
"
>


{/* Background Glow */}

<div
className="
absolute
left-1/2
top-0
-translate-x-1/2
h-[500px]
w-[500px]
rounded-full
bg-purple-200/40
blur-[160px]
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
mb-20
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

Pricing

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

Plans Built For

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

Serious Brands

</span>


</h2>



<p
className="
mx-auto
mt-6
max-w-2xl
text-lg
text-gray-600
"
>

Flexible engagement models designed for
startups, growing businesses and established brands.

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
plans.map((plan,index)=>(


<motion.div


key={plan.title}


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
delay:index*0.15
}}


whileHover={{
y:-12
}}


className={`
relative
rounded-3xl
border
p-8
bg-white
shadow-sm
transition
${
plan.featured
?
"border-purple-500 shadow-[0_20px_60px_rgba(168,85,247,0.25)] lg:-translate-y-5"
:
"border-purple-100 hover:shadow-[0_20px_50px_rgba(168,85,247,0.15)]"
}
`}


>


{
plan.featured &&

<div
className="
absolute
top-0
left-1/2
-translate-x-1/2
-translate-y-1/2
rounded-full
bg-gradient-to-r
from-purple-600
to-fuchsia-500
px-5
py-2
text-sm
font-semibold
text-white
"
>

Most Popular

</div>

}



<h3
className="
mt-4
text-3xl
font-bold
text-gray-900
"
>

{plan.title}

</h3>




<p
className="
mt-4
text-gray-600
"
>

{plan.description}

</p>




<div
className="
my-8
h-px
bg-gray-200
"
/>





<ul
className="
space-y-4
"
>


{
plan.features.map(feature=>(


<li
key={feature}
className="
flex
items-center
gap-3
"
>


<div
className="
flex
h-6
w-6
items-center
justify-center
rounded-full
bg-purple-100
"
>

<Check
size={15}
className="
text-purple-700
"
/>

</div>



<span
className="
text-gray-700
"
>

{feature}

</span>


</li>


))
}


</ul>







<button

className={`
mt-10
w-full
rounded-full
py-4
font-semibold
transition
${
plan.featured
?
"bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white hover:scale-105"
:
"border border-purple-200 text-gray-900 hover:bg-purple-50"
}
`}

>

{plan.button}

</button>




</motion.div>


))
}


</div>



</div>


</section>


)


}