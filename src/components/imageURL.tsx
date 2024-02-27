export default function imageURL(url:string){
    const isProd = process.env.NODE_ENV === 'production';
    return isProd? `/Tsz${url}` : url;
}