"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";


export default function Footer(){

return(

<footer
className="
relative
overflow-hidden
bg-white
px-6
pt-20
pb-8
"
>


{/* Glow */}

<div
className="
absolute
right-0
top-0
h-[350px]
w-[350px]
rounded-full
bg-purple-200/40
blur-[120px]
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


<div
className="
grid
gap-12
md:grid-cols-4
"
>





{/* Brand */}


<div
className="md:col-span-2"
>

<h2
className="
text-3xl
font-black
text-gray-900
"
>

Cosmos

<span
className="
bg-gradient-to-r
from-purple-700
to-fuchsia-500
bg-clip-text
text-transparent
"
>

BrandFlow

</span>


</h2>



<p
className="
mt-5
max-w-md
leading-relaxed
text-gray-600
"
>

Strategic branding, modern websites,
marketing systems and automation solutions
that help businesses grow.

</p>





<div
className="
mt-6
flex
gap-4
"
>


<a
href="https://www.instagram.com/cosmosbrandflow.co"
target="_blank"
rel="noopener noreferrer"
className="
flex
h-10
w-10
items-center
justify-center
rounded-full
bg-purple-100
text-purple-700
transition
hover:scale-110
"
>

<FaInstagram/>

</a>




<a
href="#"
className="
flex
h-10
w-10
items-center
justify-center
rounded-full
bg-purple-100
text-purple-700
transition
hover:scale-110
"
>

<FaLinkedin/>

</a>




<a
href="mailto:cosmosbrandflow.in@gmail.com"
className="
flex
h-10
w-10
items-center
justify-center
rounded-full
bg-purple-100
text-purple-700
transition
hover:scale-110
"
>

<Mail size={18}/>

</a>



</div>



</div>







{/* Links */}


<div>

<h3
className="
font-bold
text-gray-900
"
>

Company

</h3>


<div
className="
mt-5
space-y-3
text-gray-600
"
>

<a href="#about" className="block hover:text-purple-700">
About
</a>

<a href="#process" className="block hover:text-purple-700">
Process
</a>

<a href="#pricing" className="block hover:text-purple-700">
Pricing
</a>

<a href="#contact" className="block hover:text-purple-700">
Contact
</a>

</div>

</div>







{/* Services */}


<div>

<h3
className="
font-bold
text-gray-900
"
>

Services

</h3>


<div
className="
mt-5
space-y-3
text-gray-600
"
>

<p>Brand Strategy</p>

<p>Web Design</p>

<p>Content Creation</p>

<p>Marketing</p>

</div>


</div>




</div>






{/* Contact strip */}


<div
className="
mt-16
rounded-3xl
bg-purple-50
p-6
"
>


<div
className="
flex
flex-col
gap-4
md:flex-row
md:items-center
md:justify-between
"
>


<div>

<h3
className="
text-xl
font-bold
text-gray-900
"
>

Ready to build your brand?

</h3>


<p
className="
mt-1
text-gray-600
"
>

Let's create something impactful together.

</p>


</div>



<a
href="#contact"
className="
rounded-full
bg-gradient-to-r
from-purple-600
to-purple-400
px-7
py-3
font-semibold
text-white
transition
hover:scale-105
"
>

Start Project

</a>



</div>


</div>







<div
className="
mt-10
border-t
border-gray-200
pt-6
text-center
text-sm
text-gray-500
"
>

© {new Date().getFullYear()} Cosmos BrandFlow. All Rights Reserved.

</div>





</div>


</footer>

)

}