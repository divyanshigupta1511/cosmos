"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";


export default function Hero() {


const [rotate,setRotate] = useState({
  x:0,
  y:0
});



const handleMouseMove = (
e:React.MouseEvent<HTMLDivElement>
)=>{


const rect = e.currentTarget.getBoundingClientRect();


const x =
((e.clientY - rect.top) / rect.height - 0.5) * 10;


const y =
((e.clientX - rect.left) / rect.width - 0.5) * 10;



setRotate({
x,
y
});


};



return (

<section
id="home"
className="
relative
overflow-hidden
bg-white
min-h-screen
scroll-mt-32
"
>



{/* Background Glow */}


<div
className="
absolute
inset-0
overflow-hidden
pointer-events-none
"
>


<motion.div

animate={{
x:[0,80,0],
y:[0,40,0]
}}

transition={{
duration:12,
repeat:Infinity,
ease:"easeInOut"
}}

className="
absolute
top-0
left-1/3
h-[550px]
w-[550px]
rounded-full
bg-purple-300/40
blur-[160px]
"

/>



<motion.div

animate={{
x:[0,-70,0],
y:[0,-50,0]
}}

transition={{
duration:15,
repeat:Infinity,
ease:"easeInOut"
}}

className="
absolute
right-0
bottom-0
h-[450px]
w-[450px]
rounded-full
bg-fuchsia-200/40
blur-[150px]
"

/>


</div>





<Container>


<div
className="
relative
z-10
grid
items-center
gap-16
py-32
lg:grid-cols-2
"
>





{/* LEFT CONTENT */}


<motion.div

initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:0.8
}}

>



<div
className="
inline-flex
items-center
gap-2
rounded-full
border
border-purple-200
bg-purple-50
px-5
py-2
text-sm
font-medium
text-purple-700
"
>


<span
className="
h-2
w-2
rounded-full
bg-purple-600
animate-pulse
"
/>


Trusted by 50+ Businesses


</div>






<h1
className="
mt-8
text-5xl
font-bold
leading-tight
tracking-tight
text-gray-900
md:text-6xl
xl:text-7xl
"
>


We don't market brands.


<span
className="
block
bg-gradient-to-r
from-purple-700
via-purple-500
to-fuchsia-400
bg-clip-text
text-transparent
"
>

We build them.

</span>


</h1>





<p
className="
mt-7
max-w-xl
text-lg
leading-relaxed
text-gray-600
"
>


Cosmos Brandflow helps businesses create
powerful digital identities through branding,
content strategy, marketing and modern
web experiences.


</p>






<div
className="
mt-10
flex
flex-wrap
gap-5
"
>


<Button>

Book a Session

</Button>



<button
className="
rounded-full
border
border-purple-200
px-8
py-4
font-medium
text-gray-800
transition
hover:bg-purple-50
hover:scale-105
"
>

View Our Work

</button>


</div>






<div
className="
mt-14
grid
max-w-lg
grid-cols-3
gap-6
"
>


{
[
["50+","Projects"],
["30+","Clients"],
["98%","Success"]
].map((item)=>(


<div key={item[1]}>

<h3
className="
text-3xl
font-bold
text-gray-900
"
>

{item[0]}

</h3>


<p
className="
text-sm
text-gray-500
"
>

{item[1]}

</p>


</div>


))
}


</div>





</motion.div>








{/* RIGHT DASHBOARD */}



<motion.div


onMouseMove={handleMouseMove}


onMouseLeave={()=>{

setRotate({
x:0,
y:0
})

}}


style={{

transform:
`rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`

}}


initial={{
opacity:0,
scale:0.9
}}

animate={{
opacity:1,
scale:1
}}

transition={{
duration:0.8
}}


className="
relative
transition-transform
duration-300
"

>




{/* Floating Card */}


<motion.div

animate={{
y:[0,-15,0]
}}

transition={{
duration:4,
repeat:Infinity
}}

className="
absolute
-right-6
top-10
z-20
rounded-2xl
border
border-purple-100
bg-white
px-5
py-4
shadow-xl
"

>


<p
className="
text-xs
text-gray-500
"
>

Social Growth

</p>


<h3
className="
text-2xl
font-bold
text-purple-600
"
>

+68%

</h3>


</motion.div>








{/* Dashboard */}



<div
className="
rounded-3xl
border
border-purple-100
bg-white/80
p-8
shadow-2xl
backdrop-blur-xl
"
>



<div
className="
flex
items-center
justify-between
"
>


<h3
className="
font-semibold
text-gray-900
"
>

Brand Analytics

</h3>


<span
className="
rounded-full
bg-purple-100
px-3
py-1
text-xs
text-purple-700
"
>

Live

</span>


</div>





<p
className="
mt-8
text-sm
text-gray-500
"
>

Growth Performance

</p>


<h2
className="
mt-2
text-5xl
font-bold
text-gray-900
"
>

+42%

</h2>






<div
className="
mt-8
flex
h-32
items-end
rounded-2xl
bg-gradient-to-r
from-purple-100
via-purple-200
to-purple-400
p-5
"
>


<motion.div

animate={{
height:["30%","90%","60%","100%"]
}}

transition={{
duration:4,
repeat:Infinity
}}

className="
w-full
rounded-xl
bg-purple-600/40
"

/>


</div>





<div
className="
mt-6
grid
grid-cols-2
gap-4
"
>


<div
className="
rounded-xl
bg-gray-50
p-4
"
>

<p className="text-xs text-gray-500">
Leads
</p>

<h4 className="text-xl font-bold">
1240
</h4>

</div>




<div
className="
rounded-xl
bg-gray-50
p-4
"
>

<p className="text-xs text-gray-500">
Brand Score
</p>

<h4 className="text-xl font-bold">
94%
</h4>

</div>


</div>



</div>






<motion.div

animate={{
y:[0,15,0]
}}

transition={{
duration:5,
repeat:Infinity
}}

className="
absolute
-bottom-8
-left-8
rounded-2xl
border
border-purple-100
bg-white
px-5
py-4
shadow-xl
"

>

<p className="text-xs text-gray-500">
Leads Generated
</p>


<h4 className="text-xl font-bold text-purple-600">
+320
</h4>


</motion.div>





</motion.div>





</div>


</Container>





</section>


)

}