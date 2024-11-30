export interface products {
  sold: number;
ratingsAverage: number;
  _id: string;
  id: string;
  title: string;
images?:any[];
  description: string;
  quantity: number;
  price: number;
  imageCover:string;
  category:category
}
interface category{
_id:string;
name:string;
}
interface image{
  _id:string;
  name:string;
}







