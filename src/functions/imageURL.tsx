export default function publicURL(url:string){
    const isProd = process.env.NODE_ENV === 'production';
    return isProd? `/Tsz${url}` : url;
}