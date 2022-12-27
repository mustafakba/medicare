const PencilIcon =({size}) =>{
    return(
       <svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
           <path
               d="M12.9 6.858l4.242 4.243L7.242 21H3v-4.243l9.9-9.9zm1.414-1.414l2.121-2.122a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242z"
               fill="currentColor"/>
       </svg>
    )
}
const ArrowIcon =({size}) =>{
    return(
       <svg viewBox="0 0 24 24" strokeWidth="0" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
           <path
               strokeWidth="2"
               d="M2,12 L22,12 M13,3 L22,12 L13,21"
               fill="currentColor"/>
       </svg>
    )
}
const rightIcon =({size}) =>{
    return(
       <svg viewBox="0 0 1024 1024" strokeWidth="0" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
           <path
               strokeWidth="0"
               d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"
               fill="currentColor"/>
       </svg>
    )
}

const Icon =({name,size = 24}) => {
    const icons ={
        pencil : PencilIcon,
        arrowR : ArrowIcon,
        right : rightIcon,
    }
    const Component = icons[name]
    return <Component size={size}/>
}
export {
    Icon
}