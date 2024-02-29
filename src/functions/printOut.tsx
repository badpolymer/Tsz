export default function printOut(s:any){
    const isProd = process.env.NODE_ENV === 'production';
    if (!isProd){
        console.log(s);
    }
}