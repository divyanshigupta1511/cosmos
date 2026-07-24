"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";


const links = [
  {
    name:"Home",
    href:"#home"
  },
  {
    name:"Services",
    href:"#services"
  },
  {
    name:"Work Process",
    href:"#work-process"
  },
  {
    name:"Pricing",
    href:"#pricing"
  },
  {
    name:"About",
    href:"#about"
  },
  {
    name:"Contact",
    href:"#contact"
  },
];



export default function Navbar() {
const [open, setOpen] = useState(false);

return (

<motion.nav

initial={{
y:-100,
opacity:0
}}

animate={{
y:0,
opacity:1
}}

transition={{
duration:0.8,
ease:"easeOut"
}}

className="
fixed
top-0
left-0
z-50
w-full
"

>


<Container className="mt-5">


<div

className="
flex
items-center
justify-between
rounded-full
border
border-purple-100
bg-white/80
px-8
py-4
backdrop-blur-2xl
shadow-[0_20px_60px_rgba(124,58,237,0.15)]
transition
"

>




<Logo />












{/* Links */}


<div
className="
hidden
items-center
gap-9
md:flex
"
>


{
links.map((link)=>(


<a

key={link.name}

href={link.href}

className="
relative
font-medium
text-gray-600
transition
hover:text-purple-700

after:absolute
after:left-0
after:-bottom-2
after:h-[2px]
after:w-0
after:bg-purple-600
after:transition-all
hover:after:w-full

"

>

{link.name}

</a>


))

}


</div>







{/* CTA */}


<div
className="
hidden
md:block
"
>

<Button>

Book a Session

</Button>

</div>
<button

onClick={() => setOpen((prev) => !prev)}

className="
md:hidden
flex
h-11
w-11
items-center
justify-center
rounded-full
border
border-purple-100
bg-white/70
backdrop-blur-xl
"

>

{
open
?
<X size={24}/>
:
<Menu size={24}/>
}

</button>



</div>
<AnimatePresence>

{
open && (

<motion.div

initial={{
opacity:0,
y:-20
}}

animate={{
opacity:1,
y:0
}}

exit={{
opacity:0,
y:-20
}}

transition={{
duration:0.25
}}

className="
mx-6
mt-3
rounded-3xl
border
border-purple-100
bg-white/80
p-6
backdrop-blur-2xl
shadow-[0_20px_60px_rgba(124,58,237,0.15)]
md:hidden
"

>


<div
className="
flex
flex-col
gap-5
"
>


{
links.map((link)=>(

<a

key={link.name}

href={link.href}

onClick={()=>setOpen(false)}

className="
text-lg
font-medium
text-gray-700
transition
hover:text-purple-700
"

>

{link.name}

</a>

))

}


<Button>
Book a Session
</Button>


</div>


</motion.div>

)

}

</AnimatePresence>


</Container>


</motion.nav>

)

}