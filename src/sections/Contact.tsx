"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";


export default function Contact(){

return(

<section
id="contact"
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

Contact

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

Let's Build

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

Something Amazing

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

Ready to grow your brand?
Let's discuss how Cosmos Brandflow can
help your business stand out.

</p>



</motion.div>







<div
className="
grid
gap-10
lg:grid-cols-2
"
>






{/* INFO CARD */}


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

className="
rounded-3xl
border
border-purple-100
bg-white
p-10
shadow-[0_20px_50px_rgba(168,85,247,0.12)]
"

>


<h3
className="
text-3xl
font-bold
text-gray-900
"
>

Contact Information

</h3>




<div
className="
mt-10
space-y-8
"
>


<div
className="
flex
items-center
gap-5
"
>

<div
className="
rounded-xl
bg-purple-100
p-3
"
>

<Phone
className="text-purple-700"
/>

</div>

<p className="text-gray-700">
+91 8882475018
</p>

</div>




<div
className="
flex
items-center
gap-5
"
>

<div
className="
rounded-xl
bg-purple-100
p-3
"
>

<Mail
className="text-purple-700"
/>

</div>

<p className="text-gray-700">
cosmosbrandflow.in@gmail.com
</p>

</div>





<div
className="
flex
items-center
gap-5
"
>

<div
className="
rounded-xl
bg-purple-100
p-3
"
>

<MapPin
className="text-purple-700"
/>

</div>

<p className="text-gray-700">
New Delhi, India
</p>

</div>




</div>





<div
className="
mt-12
rounded-2xl
bg-purple-50
p-6
"
>

<p className="font-semibold text-gray-900">
🚀 Let's create something impactful
</p>

<p className="mt-2 text-gray-600">
Strategy, creativity and technology combined.
</p>


</div>



</motion.div>








{/* FORM */}



<motion.form

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

className="
space-y-5
rounded-3xl
border
border-purple-100
bg-white
p-10
shadow-[0_20px_50px_rgba(168,85,247,0.12)]
"

>



<input

type="text"

placeholder="Your Name"

className="
w-full
rounded-xl
border
border-gray-200
bg-gray-50
p-4
text-gray-900
outline-none
focus:border-purple-500
transition
"

/>




<input

type="email"

placeholder="Email Address"

className="
w-full
rounded-xl
border
border-gray-200
bg-gray-50
p-4
text-gray-900
outline-none
focus:border-purple-500
transition
"

/>




<input

type="text"

placeholder="Company Name"

className="
w-full
rounded-xl
border
border-gray-200
bg-gray-50
p-4
text-gray-900
outline-none
focus:border-purple-500
transition
"

/>





<textarea

rows={5}

placeholder="Tell us about your project..."

className="
w-full
rounded-xl
border
border-gray-200
bg-gray-50
p-4
text-gray-900
outline-none
focus:border-purple-500
transition
"

/>




<button

className="
rounded-full
bg-gradient-to-r
from-purple-600
to-purple-400
px-10
py-4
font-semibold
text-white
transition
hover:scale-105
shadow-[0_10px_30px_rgba(168,85,247,0.35)]
"

>

Send Message

</button>




</motion.form>







</div>


</div>


</section>


)

}