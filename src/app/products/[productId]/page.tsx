export default async function product({params}:
    {params:
    {productId:string}
    }){
    const id =(await params).productId;
    return <h1>Product {id}</h1>
}