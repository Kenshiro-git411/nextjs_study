/* 静的でもない、サーバーサイドのレンダリングでもない方法のレンダリング方法 */

import Image from "next/image";
export const revalidate = 10;

export default async function SSGPage() {
  const res = await fetch('https://dog.ceo/api/breeds/image/random', {
    next: { revalidate: 10 } // 10秒ごとに再生成(情報を取得しなおす -> 10秒の間はデータが変わらない)

  })
  
  const resJson = await res.json()
  const image = resJson.message

  const timestamp = new Date().toISOString()

  return (
    <div>
      ISR 10秒ごとにリロード: { timestamp }
      <Image src={image} width={400} alt="" />
    </div>
  )
}
