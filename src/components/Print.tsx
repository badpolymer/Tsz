export default function Print(s:string){
    const isProd = process.env.NODE_ENV === 'production';
    if (!isProd){
        console.log(s);
    }
}