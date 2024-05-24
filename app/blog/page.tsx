import axios from "axios";

async function getData() {
  // await new Promise((r) => setTimeout(r, 10000));
  const res = await axios.get("https://thrishank1.vercel.app/api");
  return res.data;
}

export default async function Blog() {
  const data = await getData();
  return (
    <div className="text-white">
      <div>{data.method}</div>
      <h1>Hello world</h1>
    </div>
  );
}
