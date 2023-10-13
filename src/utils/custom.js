const screensize=(size)=>{
    return window.innerWidth<size;
}
export default screensize;

export const isMobile=screensize(992);
